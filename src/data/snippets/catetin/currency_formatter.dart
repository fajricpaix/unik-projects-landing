/// Ringkas: 1000 -> "Rp1rb", 1500000 -> "Rp1,5jt", 2000000000 -> "Rp2M".
/// Maksimal 2 desimal (dipotong, bukan dibulatkan), nol di belakang dibuang.
String formatRupiahShort(int value) {
  final abs = value.abs();
  const units = [
    (1000000000000, 'T'),
    (1000000000, 'M'),
    (1000000, 'jt'),
    (1000, 'rb'),
  ];
  for (final (size, suffix) in units) {
    if (abs >= size) {
      final hundredths = abs * 100 ~/ size;
      final whole = hundredths ~/ 100;
      final frac = (hundredths % 100)
          .toString()
          .padLeft(2, '0')
          .replaceFirst(RegExp(r'0+$'), '');
      final sign = value < 0 ? '-' : '';
      return 'Rp$sign$whole${frac.isEmpty ? '' : ',$frac'}$suffix';
    }
  }
  return formatRupiah(value);
}
