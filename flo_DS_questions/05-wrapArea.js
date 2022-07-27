// You have to order wrapping paper for presents. Write a function that returns the number of square feet of wrapping paper you need to order, given the length, width, and height of the box you need to wrap.
// Example:
// $ wrap(2, 3, 4)
// 52 square feet

function wrap(l, w, h) {
    let area = (l * w * 2) + (w * h * 2) + (l * h * 2);
    return area;
  }
  
  console.log(wrap(2, 3, 4)); // 52
  