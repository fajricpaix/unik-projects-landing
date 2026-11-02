/// Satu query agregat; reaktif terhadap perubahan tabel orders.
/// - Omzet & laba: pesanan lunas, difilter `paid_at`
///   (laba = subtotal - modal; modal 0 = belum diisi, dihitung laba penuh).
/// - Pengeluaran: tabel expenses, difilter `expense_date`.
/// - Piutang, belum diantar & jumlah pesanan: difilter `order_date`.
Stream<ReportSummary> _watchSummary((DateTime, DateTime) r) {
  final (start, end) = r;
  return _db
      .customSelect(
        '''
        SELECT
          COALESCE(SUM(CASE WHEN is_paid = 1
            AND paid_at >= ?1 AND paid_at < ?2 THEN total_price END), 0) AS omzet,
          COALESCE((SELECT SUM(i.subtotal - i.unit_cost * i.quantity)
            FROM order_items i JOIN orders p ON p.id = i.order_id
            WHERE i.deleted_at IS NULL AND p.deleted_at IS NULL
              AND p.is_paid = 1 AND p.paid_at >= ?1 AND p.paid_at < ?2), 0) AS laba,
          COALESCE((SELECT SUM(amount) FROM expenses
            WHERE deleted_at IS NULL
              AND expense_date >= ?1 AND expense_date < ?2), 0) AS pengeluaran,
          COALESCE(SUM(CASE WHEN is_paid = 0
            AND order_date >= ?1 AND order_date < ?2 THEN total_price END), 0) AS piutang
        FROM orders
        WHERE deleted_at IS NULL
        ''',
        variables: [Variable.withDateTime(start), Variable.withDateTime(end)],
        readsFrom: {_db.orders, _db.orderItems, _db.expenses},
      )
      .watchSingle()
      .map(ReportSummary.fromRow);
}
