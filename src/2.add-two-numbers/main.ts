/*
You are given two non-empty linked lists representing two non-negative
integers. The digits are stored in reverse order, and each of their 
nodes contains a single digit. Add the two numbers and return the sum 
as a linked list.

You may assume the two numbers do not contain any leading zero, except 
the number 0 itself.
*/

/*
Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
*/

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

const initNode = (nums: number[]): ListNode | null => {
  if (nums === null || nums.length === 0) return null
  return new ListNode(nums[0], initNode(nums.slice(1)))
}

const addTwoNumbersBruteForce = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
  if (l1 === null || l2 === null) return null

  var val: number = l1.val + l2.val
  var next: ListNode | null = addTwoNumbersBruteForce(l1.next, l2.next)



  return new ListNode(val, next)
}

console.log("bruh", addTwoNumbersBruteForce(initNode([1, 1]), initNode([2])))


/*
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
*/
console.log("bruh", addTwoNumbersBruteForce(initNode([2, 4, 3]), initNode([5, 6, 4])))

/*
Input: l1 = [0], l2 = [0]
Output: [0]
*/
console.log(addTwoNumbersBruteForce(initNode([0]), initNode([0])))

/*
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
*/
console.log(addTwoNumbersBruteForce(initNode([9, 9, 9, 9, 9, 9, 9]), initNode([9, 9, 9, 9])))
