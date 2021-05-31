


const ApiCall =async(method='GET') => {
    let data
     await fetch('www.example.com/api/get/1', {
      method:method,
      
    }).then((response)=>response.json())
    .then((result)=>{console.log('====>>>>',result)
    data=result})
   .catch(error=>console.log(error))
   return data
   }

  export default ApiCall