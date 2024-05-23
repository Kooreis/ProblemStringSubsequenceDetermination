Here is a simple JavaScript console application that determines whether one string is a subsequence of another:

```javascript
function isSubsequence(str1, str2) {
    let j = 0;
    for(let i = 0; i < str2.length; i++) {
        if(str1[j] === str2[i]) j++;
        if(j === str1.length) return true;
    }
    return false;
}

console.log(isSubsequence('abc', 'ahbgdc')); // true
console.log(isSubsequence('axc', 'ahbgdc')); // false
```