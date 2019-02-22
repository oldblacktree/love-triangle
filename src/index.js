/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let triangles = 0;
  preferences.forEach(function (item, i, arr) {

    let SpichoneeB = arr[item - 1];
    let SpichoneeC = arr[SpichoneeB - 1];
    if (i === SpichoneeC - 1) {
      triangles++;
    };
    if (item == i + 1) {
      triangles--;
    };
  });
  return Math.round(triangles / 3);
}