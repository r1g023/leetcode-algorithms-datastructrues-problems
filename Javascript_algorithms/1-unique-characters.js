//function that determines unique characters in a string
function unique(str) {
  var unique = "";
  for (var i = 0; i < str.length; i++) {
    if (unique.indexOf(str[i]) === -1) {
      unique += str[i];
    }
  }
  return unique;
}

console.log(unique(["test", "test2", "test"]));
