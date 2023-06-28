abstract class Human {
  void walk();
}

enum Team { red, blue }

enum XPLevel { beginner, medium, pro }

class Player extends Human {
  String name;
  XPLevel xp;
  Team team;

  Player({
    required this.name,
    required this.xp,
    required this.team,
  });

  void walk() {
    print("I am walking");
  }

  void sayHello() {
    print("Hi my name is $name");
  }
}

class Coach extends Human {
  void walk() {
    print('the coach is walking');
  }
}

void main() {
  var nico = Player(
    name: 'dani',
    xp: XPLevel.medium,
    team: Team.blue,
  )
    ..name = 'las'
    ..xp = XPLevel.beginner
    ..team = Team.red
    ..sayHello();
}
