void main() {
  int plus(int a, int b, [int? c = 1]) => a + b + (c ?? 0);
  print(plus(1, 2));
}
