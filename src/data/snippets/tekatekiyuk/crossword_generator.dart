/// Generates a valid crossword layout (intersecting across/down words) from a
/// pool of candidate [WordEntry]s at runtime, so every playthrough gets a
/// freshly shuffled board instead of a hand-authored one.
class CrosswordGenerator {
  final Random random;
  final int maxSpan;

  CrosswordGenerator({Random? random, this.maxSpan = 60})
    : random = random ?? Random();

  /// Tries a few shuffled attempts and keeps the layout that placed the most
  /// words, so a handful of unplaceable words never tanks the whole puzzle.
  PlacedPuzzle generate(List<WordEntry> pool, int target, {int attempts = 6}) {
    PlacedPuzzle? best;
    for (var attempt = 0; attempt < attempts; attempt++) {
      final shuffled = List<WordEntry>.from(pool)..shuffle(random);
      final result = _attempt(shuffled, target);
      if (best == null || result.words.length > best.words.length) {
        best = result;
      }
      if (best.words.length >= target) break;
    }
    return best ?? const PlacedPuzzle(rows: 0, cols: 0, words: []);
  }

  (int, int, Direction)? _findPlacement(
    Map<(int, int), _Cell> grid,
    WordEntry word,
  ) {
    final options = <(int, int, Direction)>[];
    for (final gridEntry in grid.entries) {
      final (r, c) = gridEntry.key;
      final cell = gridEntry.value;
      for (var i = 0; i < word.length; i++) {
        if (word.letters[i] != cell.letter) continue;
        if (!cell.hasAcross && _isValid(grid, word, r, c - i, Direction.across)) {
          options.add((r, c - i, Direction.across));
        }
        if (!cell.hasDown && _isValid(grid, word, r - i, c, Direction.down)) {
          options.add((r - i, c, Direction.down));
        }
      }
    }
    if (options.isEmpty) return null;
    options.shuffle(random);
    return options.first;
  }

  // _isValid, _commit, _normalize …
}
