let p=new Promise((reolve,reject)=>{
    setTimeout(()=>{
        resolve("Success")
    },5000)


})
function demo(){
    console.log("Start");
    let x=p;
    console.log(x);
    console.log("End");
};
demo()

async function  fetchUsers() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data =await response.json();
    console.log(data);
    
}
fetchUsers();