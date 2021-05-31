var data = {
     '4' : 'abc',
     '10' :'ab2',
     '5' : 'abc3',
     '6' : 'abc5'
   }

const Sort= Object.keys(data).sort().reduce(
    (obj, key) => { 
        obj[key] = data[key]; 
        return obj;
      }, 
      {}
)
console.log(JSON.stringify(data));
   