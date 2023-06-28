class Human {
  final String name;
  Human({required this.name});

  void sayHello() {
    print("Hi my name is $name!");
  }
}

class Strong {
  final double strengthLevel = 1500.99;
}

class QuickRunner {
  void runQuick() {
    print("Runnnnnnn!");
  }
}

class Tall {
  final double height = 1.99;
}

enum Team { blue, red }

class Player with Strong, QuickRunner, Tall  {
  final Team team; }

class Horse with Strong, QuickRunner {}

  Player({
    required this.team,
    required String name,
  }) : super(name = name);
  @override
  void sayHello() {
    super.sayHello();
    print('and I play for ${team}');
  }
}

void main() {
  var player = Player(team: Team.red, name: 'nico');
  player.sayHello();
}
