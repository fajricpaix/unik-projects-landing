/// Kolom standar di semua tabel.
mixin StandardColumns on Table {
  TextColumn get id => text()(); // UUID v4 dari client
  DateTimeColumn get createdAt => dateTime()();
  DateTimeColumn get updatedAt => dateTime()();
  DateTimeColumn get deletedAt => dateTime().nullable()(); // soft delete
  // 'pending' | 'synced'
  TextColumn get syncStatus => text().withDefault(const Constant('pending'))();

  @override
  Set<Column> get primaryKey => {id};
}

class Products extends Table with StandardColumns {
  TextColumn get shopId => text().references(Shops, #id)();
  TextColumn get name => text()();
  IntColumn get price => integer()(); // Rupiah penuh, bukan double
  // Harga modal per satuan; 0 = belum diisi.
  IntColumn get costPrice => integer().withDefault(const Constant(0))();
  // Sisa stok; berkurang otomatis saat ada pesanan.
  IntColumn get stock => integer().withDefault(const Constant(0))();
}

class Orders extends Table with StandardColumns {
  TextColumn get shopId => text().references(Shops, #id)();
  TextColumn get customerName => text()();
  IntColumn get totalPrice => integer()();
  BoolColumn get isDelivered => boolean().withDefault(const Constant(false))();
  BoolColumn get isPaid => boolean().withDefault(const Constant(false))();
  DateTimeColumn get paidAt => dateTime().nullable()();
  DateTimeColumn get orderDate => dateTime()();
}

class OrderItems extends Table with StandardColumns {
  TextColumn get orderId => text().references(Orders, #id)();
  TextColumn get productId => text().references(Products, #id)();
  // Snapshot saat order dibuat, supaya order lama tetap utuh.
  TextColumn get productName => text()();
  IntColumn get unitPrice => integer()();
  IntColumn get unitCost => integer().withDefault(const Constant(0))();
  IntColumn get quantity => integer()();
  IntColumn get subtotal => integer()();
}
