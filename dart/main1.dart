void main() {
  String name = "Apple";
  bool alive = true;
  int age = 40;
  double money = -20.21;
  num x = 12;
  var numbers = [1, 2, 3, 4];
  var giveMeFive = true;
  List<int> numbers1 = [
    1,
    2,
    3,
    4,
    if(giveMeFive) 5,
  ];
  numbers.add(5);

  print(name);
  print(alive);
  print(age);
  print(money);
  print(x);
  print(numbers1);
}
