class Ork extends Character {
  contructor() {
  }

  attack(enemy) {
    const amIAlive = this.isAlive()
    const haveIEnergy = this.hasEnergy()
    const isEnemyAlive = enemy.isAlive()
    const hasEnemyEnergy = enemy.hasEnergy()
    const isFightPossible = amIAlive && isEnemyAlive && haveIEnergy && hasEnemyEnergy

    if (isFightPossible) {
      this.simulateFight(enemy)
    } else if (!amIAlive) {
      console.log('How do you want to fight being dead?')
    } else if (!isEnemyAlive) {
      console.log('How do you want to fight with dead opponent?')
    } else if (!haveIEnergy) {
      console.log('How do you want to fight without energy?')
    } else if (!hasEnemyEnergy) {
      console.log('How do you want to fight exhausted opponent?')
    } else {
      console.log(`Somehing went wrong:
      'amIAlive': ${amIAlive},
      'haveIEnergy': ${haveIEnergy},
      'isEnemyAlive': ${isEnemyAlive},
      'hasEnemyEnergy': ${hasEnemyEnergy},
      'isFightPossible': ${isFightPossible}`)
    }
  }

  simulateFight(enemy) {
    const myInflictedDamage = getRandomNumber(2, 10)
    const enemyInflictedDamage = getRandomNumber(1, 10)
    const didIWin = myInflictedDamage > enemyInflictedDamage
    const energyCost = 15

    this.health -= enemyInflictedDamage
    this.energy -= energyCost

    enemy.health -= myInflictedDamage
    enemy.energy -= energyCost

    console.log(`You ${didIWin ? 'win': 'lost'}!
    Your damage: ${myInflictedDamage},
    Enemy damage: ${enemyInflictedDamage},
    Your health: ${this.health},
    Enemy health: ${enemy.health}`)
  }
}
