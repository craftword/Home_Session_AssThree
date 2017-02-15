
exports.findMissing = function (arr, arr1) {
  if(arr.length === 0 && arr1.length === 0) {
      return 0;
  }else if(arr.length === 1 && arr1.length === 1) {
      return 0;
  } else {
    for(i=0; i <= arr1.length; i++) {
       if(arr.indexOf(arr1[i]) === -1) { 
         return arr1[i];
       
        }

    }
  }
  
};