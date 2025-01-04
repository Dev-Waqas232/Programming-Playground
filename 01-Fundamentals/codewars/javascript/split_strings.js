// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function solution(str) {
  let ans = [];
  let j = 0;
  let i = 0;
  for (i; i < str.length; i++) {
    if (i % 2 !== 0) {
      let s = str[j] + str[i];
      ans.push(s);
      j += 2;
    }
  }

  if (str.length % 2 !== 0) {
    ans.push(str[str.length - 1] + "_");
  }

  return ans;
}

let str = "abcd";

console.log(solution(str));
