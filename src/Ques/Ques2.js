 

const dataArray=(myArray)=>{
    let total = 0;
    let updateTotal = 0
  for (i=0; i<myArray.length; i++){
    if(myArray[i]==0 ){
       if(total>updateTotal){
           updateTotal=total
       }
       total=0
    }
    
    else{total+=1}   
    
  }
  console.log(updateTotal)
}