class Character {
  constructor({type}) {
    this.type = type
    this.exp = 0
    this.energy = 100
    this.health = 100
  }

  getLevel() {
    const {level} = LEVEL_LIST.reverse().find(item => this.exp >= item.minExp)

    return level
  }

  training({mode}) {
    const modesData = {
      'easy': {
        time: 5 * 1000,
        energyCost: 10,
        exp: 20
      },
      'medium': {
        time: 10 * 1000,
        energyCost: 15,
        exp: 30
      },
      'hard': {
        time: 15 * 1000,
        energyCost: 20,
        exp: 50
      },
    }

    const modeData = modesData[mode]
    // let remainingTime = modeData.time
    let remainingTime = 1000 // Only for faster development

    const trainingInterval = setInterval(() => {
      remainingTime -= 1000

      if (remainingTime === 0) {
        this.energy -= modeData.energyCost
        this.exp += modeData.exp

        console.log(`Congratulations! You've finished your training.\nYour new properties are:
        level: ${this.getLevel()},
        exp: ${this.exp},
        energy: ${this.energy}`)
        clearInterval(trainingInterval)
      } else {
        console.log(`Training in ${mode} mode. ${remainingTime / 1000}s left...`)
      }
    }, 1000)
  }

  rest() {
    let remainingTime = 1000
    const trainingInterval = setInterval(() => {
      remainingTime -= 1000

      if (remainingTime === 0) {
        this.energy += 10

        console.log(`Congratulations! You've finished your resting.\nYour new properties are:
        level: ${this.getLevel()},
        exp: ${this.exp},
        energy: ${this.energy}`)
        clearInterval(trainingInterval)
      } else {
        console.log(`Resting. ${remainingTime / 1000}s left...`)
      }
    }, 1000)
  }
}
