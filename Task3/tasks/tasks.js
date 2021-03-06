const fs=require('fs')
const chalk=require('chalk')

const saveNotes=(tasks)=>{
    fs.writeFileSync('tasks.json',JSON.stringify(tasks))
}
const loadTasks=()=>{
    try{
        const Tasks=JSON.parse(fs.readFileSync('tasks.json'))
        return Tasks

    }
    catch(e){
        return []
    }
}
const addTask=(title,content)=>{
    const tasks=loadTasks()
    const searchVal=tasks.find(task=>task.title==title)
if(!searchVal){
    tasks.push({
            title:title,
            content:content,
            status:false
        })
        saveNotes(tasks)
        console.log(chalk.blue.inverse('task added successfully'))



}
  else{
      console.log(chalk.red.inverse('task title used before'))

  }

}

const deleteTask=(title)=>{
    const tasks=loadTasks()
    const tasksAfterDelete=tasks.filter(task=>task.title!==title)
    if(tasks.length > tasksAfterDelete.length){
        saveNotes(tasksAfterDelete)
    console.log(chalk.red.inverse('task deleted'))
    }
    else {
        console.log(chalk.red.inverse('task not found'))
    }
    
}
const editTask=(title,newTitle,newContent)=>{
   const tasks=loadTasks()
   const index =tasks.findIndex(task=>task.title==title)
   if(index==-1){
       console.log(chalk.red.inverse('task not found'))

   }
   else{
       tasks[index]={title:newTitle,content:newContent,status:tasks[index].status}
       saveNotes(tasks)
       console.log(chalk.blue.inverse('task edited'))
   }

}
const showTasks=()=>{
    const tasks=loadTasks()
    console.log(tasks)

}
const showSingleTask=(title)=>{
   const tasks=loadTasks()
   const task=tasks.find(task=>task.title==title)
   if(!task){
       console.log(chalk.red.inverse('task not found'))
       
   }
   else console.log(task)
}

const changeStatus=(title,newStatus)=>{
    const tasks=loadTasks()
    const index =tasks.findIndex(task=>task.title==title)
    if(index==-1){
        console.log(chalk.red.inverse('task not found'))
 
    }
    else{
        tasks[index]={title:title,content:tasks[index].content,status:newStatus}
        saveNotes(tasks)
        console.log(chalk.blue.inverse('status changed'))
    }
 
 }
module.exports={
    addTask,
    deleteTask,
    editTask,
    showTasks,
    showSingleTask,
    changeStatus
}