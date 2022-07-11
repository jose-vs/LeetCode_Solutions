const add = (num1: number, num2: number): number => {
  return num1 + num2
}
console.log("1. add 1 + 2 = ", add(1, 2)) // output: 3

const sum = (nums: number[]): number => {
  if (nums.length === 0) return 0
  return nums[0] + sum(nums.slice(1))
}

const sumArgs = (...args: number[]): number => {
  if (args.length === 0) return 0
  return args[0] + sum(args.slice(1))
}

console.log("2. sum 2 + 3 + 4 + 5 = ", sum([2, 3, 4, 5])) // output: 14
console.log("2. sumArgs 2 + 3 + 4 + 5 = ", sumArgs(2, 3, 4, 5)) // output: 14

const stringIncludes = (string1: string, string2: string): boolean => {
  const regex = new RegExp(string2, "i")
  return regex.test(string1)
}

console.log(
  "3. stringIncludes ",
  stringIncludes("I drove to New York in a van with my friend", "new"),
)

const getLargestNumberIndex = (nums: number[]): number => {
  var ans = 0
  var largest = 0
  nums.forEach((num, index) => {
    if (largest < num) {
      largest = num
      ans = index
    }
  })

  return ans
}

console.log("4. getLargestNumberIndex ", getLargestNumberIndex([7, 1, 4, 12, 9]))

const getNames = (array: any[]): string[] => {
  var ans: string[] = new Array<string>()

  array.forEach((obj) => {
    if (obj.hasOwnProperty("name")) ans.push(obj.name)
  })

  return ans
}

console.log(
  "5. getNames ",
  getNames([{ a: 1 }, { name: "Jane" }, { name: "Mark" }, { name: "Sophie" }, { b: 2 }]),
)
