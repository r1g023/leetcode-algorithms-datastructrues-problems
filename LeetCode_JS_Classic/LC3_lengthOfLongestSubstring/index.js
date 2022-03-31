// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

function lengthOfLongestSubstring(s) {
  if(s.length <= 1) return s.length;
    
    const seen = new Map();
    let left = 0, longest = 0;
    
    for( let right = 0; right < s.length; right++){
        const curr = s[right];
        const pre = seen.get(curr);
        if(pre >= left){
            left = pre+1;
        }
        seen.set(curr,right);
        longest = Math.max(longest, (right - left + 1));
    }
    return longest;
}

module.exports = lengthOfLongestSubstring;
