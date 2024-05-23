Here is a TypeScript console application that solves the problem:

```typescript
function isSubsequence(str1: string, str2: string): boolean {
    let j = 0;
    for (let i = 0; i < str2.length && j < str1.length; i++) {
        if (str1[j] === str2[i]) {
            j++;
        }
    }
    return j === str1.length;
}

console.log(isSubsequence('abc', 'ahbgdc'));  // true
console.log(isSubsequence('axc', 'ahbgdc'));  // false
```

This application defines a function `isSubsequence` that takes two strings as input and returns a boolean indicating whether the first string is a subsequence of the second. It then tests this function with two pairs of strings and logs the results to the console.