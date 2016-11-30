module.exports={
  findMissing: function(arr1, arr2){
   
  arr1=arr1.sort();
  arr2=arr2.sort();
  
  if(arr1.length==arr2.length)
  {
    var status=1;
    for(i=0; i<arr1.length;i++){
      if(arr1[i]!=arr2[i]){
        status=0;
      }
    }
  }
  
  if (status==1){
    return 0;
  }
  
  
  arr1=arr1.sort();
  arr2=arr2.sort();
  
  var smaller, bigger;
  if(arr1.length<arr2.length){
    smaller=arr1;
    bigger=arr2;
  }
  else{
     smaller=arr2;
    bigger=arr1;
  }
  

    for (var j=0; j<bigger.length; j++){
        if (bigger[j]!=smaller[j]){
          return bigger[j];
      }
    }
  
}
  
};

