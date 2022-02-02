# Brute force solution:

# Time complexity: O(n²)
# Space complexity: O(1)

def firstRepeatingCharacter(str):
  for i in range(len(str)):
    for j in range(i):
      if str[i] == str[j]:
        return str[i]
  return '\0'

# 2- First repeating
# character
# Description
# Given a string str, create a function that returns the first
# repeating character.
# If such character doesn't exist, return the null character
# '\0'.
# Example 1:
# • Input: str = "inside code"
# • Output: 'i'
# Example 2:
# • Input: str = "programming"
# • Output: 'r'
# Example 3:
# • Input: str = "abcd"
# • Output: '\0'
# Example 4:
# • Input: str = "abba"
# • Output: 'b'