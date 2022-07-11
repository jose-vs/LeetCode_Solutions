/*
Given an array of integers nums and an integer target, return 
indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, 
and you may not use the same element twice.

You can return the answer in any order.

*/

const twoSumBruteForce = (nums: number[], target: number): number[] => {
  var ans: number[] = new Array()

  for (var k: number = 0; k < nums.length; k++) {
    var curr = nums[k]
    for (var i: number = 0; i < nums.length; i++) {
      if (curr + nums[i] == target && k != i) {
        ans.push(i)
        ans.push(k)
        return ans
      }
    }
  }

  return ans
}

const twoSumOptimized = (nums: number[], target: number): number[] => {
  var ans: number[] = new Array()
  var map = new Map<number, number>()

  nums.some((num, index) => {
    var search: number = target -num
    if (map.has(search)) {
      ans = [index, map.get(search)!]
      return
    }

    map.set(num, index)
  })

  return ans
}

console.log("brute")
console.log(twoSumBruteForce([3, 2, 4], 6)) // output [2,1]
console.log(twoSumBruteForce([2, 7, 11, 15], 9)) // output [0,1]

console.log("hash map")
console.log(twoSumOptimized([3, 2, 4], 6)) // output [2,1]
console.log(twoSumOptimized([2, 7, 11, 15], 9)) // output [0,1]
