/*
An array arr is a mountain if the following properties hold:

------------------
arr.length >= 3
------------------
arr[0] < arr[1] < ... < arr[i - 1] < arr[i] 
------------------
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
------------------

Given a mountain array arr, return the INDEX i such that arr[0] < arr[1] < ... < arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

The goal is to solve it in O(log(arr.length)) time complexity.

For example, 
Input: arr = [0,1,2,3,4,100,2,1,0]
Output: 5
*/

export const READY_TO_TEST = false; // SET ME TO TRUE IF YOU DARE

export function findPeak(mountain : number[]): number {
  return -1; // TODO - IMPLEMENT

}