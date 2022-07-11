class Permutations {
  num: number
  start: string
  end: string

  constructor(num: number, start: string, end: string) {
    this.num = num
    this.start = start
    this.end = end
  }
}

class Dictionary {
  wordArray: Array<string>
  wildCardPerm: Array<Permutations> | undefined

  constructor(wordArray: Array<string>) {
    this.wordArray = wordArray

    wordArray.map((word) => {
      var num: number
      var start: string
      var end: string

      var set = new Set<string>([...word])

      console.log(word, set)
    })
  }

  thisInDict(word: string): boolean {
    return this.wordArray.some((obj) => {
      const template = word.replace(new RegExp(/[*]/g), ".")
      const regex = new RegExp(`^${template}$`)
      return regex.test(obj)
    })
  }
}

const test = new Dictionary(["cat", "car", "dog"])

console.log(test.thisInDict("car")) //true
console.log(test.thisInDict("don")) //false

//wildcard
console.log(test.thisInDict("*at")) //true
console.log(test.thisInDict("cr*")) //false
console.log(test.thisInDict("*a*")) //true
