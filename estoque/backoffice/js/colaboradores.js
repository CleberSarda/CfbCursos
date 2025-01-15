const endpoint_todoscolaboradores=`http://127.0.0.1:8080/todosusuarios`;
fetch(endpoint_todoscolaboradores)
.then(res=>res.json())
.then(res=>{
    console.log(res);
})