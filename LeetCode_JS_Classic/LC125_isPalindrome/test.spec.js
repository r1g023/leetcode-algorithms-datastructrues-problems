const isPalindrome = require("./index");

test("'A man, a plan, a canal: Panama' returns true", () => {
  expect(isPalindrome("A man, a plan, a canal: Panama")).toEqual(true);
});

test("'love' returns false", () => {
  expect(isPalindrome("love")).toEqual(false);
});

test("`` returns true", () => {
  expect(isPalindrome("")).toEqual(true); //empty string is a palindrome
});

test("'_a__' returns true", () => {
  expect(isPalindrome("_a__")).toEqual(true);
});

test("r@ac$e _c__a*r+ ", () => {
  expect(isPalindrome("r@ac$e _c__a*r+ ")).toEqual(true);
});
