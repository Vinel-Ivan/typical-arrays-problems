
exports.min = function min (array) {
  if (!array || array.length === 0) {
    return 0;
  } 
  else {
    return minValue = Math.min.apply(null,array);
  }
}

exports.max = function max (array) {
  if (!array || array.length === 0) {
    return 0;
  } 
 else {
   return maxValue = Math.max.apply(null,array);
 }
}

exports.avg = function avg (array) {
  if (!array || array.length === 0) {
    return 0;
  } 
  else {
  const sumValue = array.reduce((sum, current) => sum + current, 0)
  avgValue = (sumValue / array.length)
  return avgValue;
  }
}