const yargs=require('yargs')
const chalk=require('chalk')
const myMethods=require('./functions')
const { describe, number } = require('yargs')

yargs.command({
    command:'addCustomer',
    describe:"addNewCustomer",
    builder:{
        id:{
           type:number,
           demandOption:true

        },
        name:{
            type:'string',
            demandOption:true


        },
        balance:{
            type:number,
            demandOption:true


        }
    },
    handler:function(argv){
        customer={id:argv.id,name:argv.name,balance:argv.balance}
        myMethods.addNewCustomer(customer)
    }
})
yargs.command({
    command:'showCustomer',
    builder:{
        id:{
            type:number,
            demandOption:true


        }
    },
    handler:function(argv){
        myMethods.showCustomer(argv.id)
    }
})
yargs.command({
    command:'deleteCustomer',
    builder:{
        id:{
            type:number,
            demandOption:true


        }
    },
    handler:function(argv){
        myMethods.deleteCustomer(argv.id)
    }
})
yargs.command({
    command:'addBalance',
    builder:{
        id:{
            type:number,
            demandOption:true


        },
        balance:{
            type:number,
            demandOption:true
        }
        
    },
    handler:function(argv){
        
        myMethods.addBalance(argv.id,argv.balance)
    }
})

yargs.argv