const LEVEL_LIST = [
  {
    level: 1,
    minExp: 0
  },
  {
    level: 2,
    minExp: 100
  },
  {
    level: 3,
    minExp: 200
  },
  {
    level: 4,
    minExp: 400
  },
  {
    level: 5,
    minExp: 800
  },
].reverse()

const getLevelBasedOnExp = (exp) => {
  const {level} = LEVEL_LIST.find(item => exp >= item.minExp)

  return level
}
