for (i; i <= n; i++) {
       if(arr[i] === N) {
           keyValue = i;
       }else {
         if(N < arr[i]) {
            arr.slice(0, -i);


         }else {
            arr.slice(i);
         }

       }
       count+=1;
   }
   return count +"--"+ keyValue;


function myFunc() {
   this.
  if (myFunc.caller == null) {
    return 'The function was called from the top!';
  } else {
    return 'This function\'s caller was ' + myFunc.caller;
  }
}
