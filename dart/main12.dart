class Player {
final String name;
int xp;

Player(this.name, this.xp); 

void sayHello() {
    print("Hi my name is $name");
  }
}

void main() {
  var player = Player("nico", 1500);
  player.sayHello();
  var player2 = Player("dani", 2500);
  player2.sayHello();
}
