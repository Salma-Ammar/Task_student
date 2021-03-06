const yargs=require('yargs')
const chalk=require('chalk')
const tasks=require('./tasks')
const { boolean } = require('yargs')

yargs.command({
    command:'add',
    describe:'add new task',
    builder:{
        title:{
            type:'string',
            demandOption:true,
            describe:'task title'
        },
        content:{
            type:'string',
            demandOption:true,
            describe:'task content'
        }

    },
    handler:function(argv){
        tasks.addTask(argv.title,argv.content)
    }
})


yargs.command({
    command:'delete',
    builder:{
        title:{
            type:'string',
            demandOption:true
        }
    },
    handler:function(argv){
        tasks.deleteTask(argv.title)
    }
})

yargs.command({
    command:'edit',
    builder:{
        title:{
            type:'string',
            demandOption:true
        },
        newTitle:{
            type:'string',
            demandOption:true
        },
        newContent:{
            type:'string',
            demandOption:true
        }
    },
    handler:function(argv){
        tasks.editTask(argv.title,argv.newTitle,argv.newContent)
    }
})

yargs.command({
    command:'showAll',
    handler:function(){
        tasks.showTasks()

    }
})
yargs.command({
    command:'showSingleTask',
    builder:{
        title:{
            type:'string',
            demandOption:true
        }
    },
    handler:function(argv){
        tasks.showSingleTask(argv.title)

    }
})
yargs.command({
    command:"changeStatus",
    builder:{
        title:{
            type:'string',
            demandOption:true
        },
        content:{
            type:'string',
            
        },
        newStatus:{
            type:boolean,
            demandOption:true
        }
    },
    handler:function(argv){
        tasks.changeStatus(argv.title,argv.newStatus)

    }

})

yargs.parse()
