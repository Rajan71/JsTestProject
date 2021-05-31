var myArray= [1,2,3,4,5,6,7,8,8,9,10]


   

const urArray=(myArray)=>{
  for (i=0; i<myArray.length; i++){
    if(myArray[i+1]==myArray[i])
    {console.log(myArray[i])
        break} 
    
  }
}