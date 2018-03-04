class Character {
  constructor({type}) {
    this.type = type
    this.exp = 0
    this.energy = 100
    this.health = 100
  }

  getLevel() {
    return getLevelBasedOnExp(this.exp)
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

    this.action({
      time: 1000, // Only for faster development
      attributesData: {
        energy: -modeData.energyCost,
        exp: modeData.exp,
      },
      type: 'training',
    })
  }

  rest() {
    this.action({
      time: 1000,
      attributesData: {
        energy: 10
      },
      type: 'resting',
    })
  }

  action({time, attributesData, type}) {
    let remainingTime = time
    const trainingInterval = setInterval(() => {
      remainingTime -= 1000

      if (remainingTime === 0) {
        Object.entries(attributesData).forEach(([key, value]) => {
          this[key] += value
        })

        console.log(`Congratulations! You've finished your ${type}.\nYour new properties are:
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
