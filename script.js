let showHideBtn = document.querySelector('#showhide')
let studentTable = document.querySelector('#studentTable')
let students=[

]
let studentForm=document.querySelector('#addStudent')
let tableHeader=['id','name','class','age','degree','grade','actions']
let actions=[
    {txt:"Edit Degree", classes:"btn btn-warning m-1 "},
    {txt:"Delete", classes:"btn btn-danger m-1 "}

]
showHideBtn.addEventListener('click', function(e){
    this.innerText=="Show form"? this.innerText="Hide form" : this.innerText="Show form";
    studentForm.classList.toggle('d-none')
})
studentForm.addEventListener('submit',function(e){
    e.preventDefault()
    let student={
        name:this.elements.name.value,
        class:this.elements.class.value,
        age:this.elements.age.value,
        degree:this.elements.degree.value
    }
    students.push(student)
    this.reset()
    this.classList.toggle('d-none')
    showHideBtn.innerText='Show Form'
    showStudent()

})

let addElement=function(eleType,parent,txt='',classes=''){
    ele= document.createElement(eleType)
    if(txt!='') ele.innerText=txt
    if(classes!='')ele.classList=classes
    parent.appendChild(ele)
    return ele
}

let showStudent=function(){
    studentTable.innerText=''
    students.forEach((student,i)=>{
        tr=addElement('tr',studentTable)
        tableHeader.forEach(element=>{
            if(element=='id')txt=i+1
            else if (element=='actions') txt=''
            else if(element=='grade'){
                if(txt>=90 && txt<=100)txt='A'
                else if(txt>=80 && txt<90)txt='B'
                else if(txt>=70 && txt<80)txt='C'
                else if(txt>=60 && txt<70)txt='D'
                else txt='F'
            }
            else txt=student[element]
            td=addElement('td',tr,txt)
        })
        actions.forEach(action=>{
            btn=addElement('button',td,action.txt,action.classes)
            btn.addEventListener('click',function(e){
                if(action.txt=='Edit Degree')editDegree(i)
                else if(action.txt=='Delete')deleteStudent(i)
            })
        })
    })
}
function editDegree(index){
    let degree=prompt('Enter New Degree')
    students[index].degree=degree
    showStudent()

}
function deleteStudent(index){
    students.splice(index,1)
    showStudent()
}
showStudent()