
exports.min = function min (arr_) {
  if (!Array.isArray(arr_) || arr_.length < 1 )  return 0;

  const arr = arr_.slice();
  return (arr.sort((a, b) => a - b))[0];
}

exports.max = function max (arr_) {
  if (!Array.isArray(arr_) || arr_.length < 1 )  return 0;
  
  const arr = arr_.slice();
  return (arr.sort((a, b) => b - a))[0];
}

exports.avg = function avg (arr_) {
  if (!Array.isArray(arr_) || arr_.length < 1 )  return 0;

  let arr = arr_.slice();
  
  const result = arr.reduce( (total, value) => {
    return total += value;
  }, 0) / arr.length;

  return result;
}
