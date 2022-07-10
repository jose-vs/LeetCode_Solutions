class Dictionary {
  wordArray: Array<string>

  constructor(wordArray: Array<string>) {
    this.wordArray = wordArray
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
