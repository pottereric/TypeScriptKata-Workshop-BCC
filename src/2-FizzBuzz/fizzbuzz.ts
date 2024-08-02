/*
Write a function that will take a number. 
If the number is evenly divisible by 3, return "fizz"
If the number is evenly divisible by 5, return "buzz"
If the number is evenly divisible by 3 and 5, return "fizzbuzz"
If none of the above conditions are true, return a stringified version of the input.
*/

export const READY_TO_TEST = false; // SET ME TO TRUE IF YOU DARE

export function solve(input : number): string {
  if(input % 15 === 0){
    return "fizzbuzz";
  }
  else if(input % 5 === 0){
    return "buzz";
  }
  else if(input % 3 === 0){
    return "fizz";
  }
  return input.toString();
}

export function solve_Guy(input : number): string {
  if(input % 15 === 0) return "fizzbuzz";
  if(input % 5 === 0) return "buzz";
  if(input % 3 === 0) return "fizz";
  return input.toString();
}

export function solve_Guy2(input : number): string {
  return input % 15 === 0 ? "fizzbuzz"
       : input % 5 === 0 ? "buzz"
       : input % 3 === 0 ? "fizz"
       : input.toString();
}