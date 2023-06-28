class Player {
  String name;
  int xp;
  String team;

  Player({
    required this.name,
    required this.xp,
    required this.team,
  });

  void sayHello() {
    print("Hi my name is $name");
  }
}

void main() {
  var nico = Player(
    name: 'dani',
    xp: 1200,
    team: 'red',
  )
    ..name = 'las'
    ..xp = 120000
    ..team = 'blue'
    ..sayHello();
}
