 
 module.exports.removeDupsinArray = function (arr) {
  return [... new Set(arr)];
};


module.exports.sortArray = function (arr,order) {
  if(order === 'asc') return arr.sort();
  if(order === 'dsc') return arr.sort((a,b)=> b-a);
}


// module.exports = {
//   removeDupsinArray: removeDupsinArray,
//   sortArray: sortArray
// }