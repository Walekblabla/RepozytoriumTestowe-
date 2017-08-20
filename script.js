function randomNumber(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);

}

function Player(name, hitpoints, attackpoints) {

    this.name = name;

    this.hitpoints = hitpoints;

    this.attack = function attack(opponent) {

        opponent.hitpoints -= 10;

        return console.log(opponent.name + ' ma jeszcze ' + opponent.hitpoints);

    }

}

var p1 = new Player('Conan', 100, 10);

var p2 = new Player('Hercules', 200, 10);

var p3 = new Player('Doctor', 50, 5);

p3.heal = function heal(targetPlayer) {

    targetPlayer.hitpoints += 20;

    return console.log(targetPlayer.name + ' ma jeszcze ' + targetPlayer.hitpoints);

};

var boss = new Player('JavaScript', 500, 20);

function jebnij() {

    var basem = randomNumber(1, 6);

    console.log(basem);

    switch (basem) {

        case 1:

            return p1.attack(boss);

            break;

        case 2:

            return p2.attack(boss);

            break;

        case 3:

            return p3.heal(p1);

            break;

        case 4:

            return p3.heal(p2);

            break;

        case 5:

            return boss.attack(p1);

            break;

        case 6:

            return boss.attack(p2);

            break;

    }

}
while ((boss.hitpoints > 0) && (!((p1.hitpoints < 1) && (p2.hitpoints < 1))))

    jebnij();


var a = 2;
var r = 2;

