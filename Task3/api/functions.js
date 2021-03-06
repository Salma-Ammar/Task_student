const fs=require('fs')
const readFile = function(){
    try{    
        customers = JSON.parse(fs.readFileSync('customers.json').toString())
    }
    catch(e){
        customers = []
    }
    return customers
}
const writeFile = function(customers){
    fs.writeFileSync('customers.json', JSON.stringify(customers))
}
const addNewCustomer=function(customer){
    customers= readFile()
    customers.push(customer)
    writeFile(customers)


}
const showCustomer=function(customerId){

    let customers=readFile()
    index=customers.findIndex(customer=>{
    return customer.id==customerId

})
  if(index==-1)
 console.log(index)
  else{
    console.log(`customer id : ${customerId} and customer name: ${customers[index].name} and customer balance: ${customers[index].balance}`)

  }
         
     

}
const deleteCustomer=function(customerId){
  let customers=readFile()
  index=customers.findIndex(customer=>{
      return customer.id==customerId
  })
  if(index==-1)
 {console.log('customer not found')}
  else{
      customers.splice(index,1)
      writeFile(customers)
  }
}
const addBalance=function(customerId,newData){
    let customers=readFile()
    index=customers.findIndex(customer=>{
        return customer.id==customerId
    })
    if(index==-1)
   {console.log('customer not found')}
    else{
        (customers[index].balance)+=newData
        writeFile(customers)
        
    }
  }


  const readApi=function(api){
    const https = require('https')
    if(api=='posts') url = 'https://jsonplaceholder.typicode.com/posts'
    else if(api=='albums') url ='https://jsonplaceholder.typicode.com/albums'
    const myRequest = https.request(url, (response)=>{
        let data = '' 
        response.on('data', (chunk)=>{
            data = data + chunk.toString()
        })
        response.on('end',()=>{
            const body = JSON.parse(data)
            console.log(body)
        })
    })
    myRequest.on('error', (error)=>console.log('error'))
    myRequest.end()

  }


module.exports={
    addNewCustomer,
    showCustomer,
    deleteCustomer,
    addBalance,
    readApi
}