String capitalizeName(String? name) =>
    name?.toUpperCase() ?? 'ANON';
    // => name != name.toUpperCase() : 'ANON';

void main() {
  capitalizeName('nico');
  capitalizeName(null);
}
