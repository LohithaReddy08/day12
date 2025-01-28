// console.log(window);
// console.log(document);

// let element = document.getElementById("demo");
// element.innerText = "G+"
// console.log(element);

// let ele = document.getElementById("test");
// // ele.innerText= "<h1>Header</h1>"
// ele.innerHTML = "<h1>Header</h1>"
// console.log(ele);

//! 
// let ele = document.getElementsByClassName("test");
// console.log(ele);
// console.log(Array.isArray(ele));
// ele[0].innerText="Hello"
// // ele[0].style.backgroundColor="tomato"

// //!spread operator :- it will takeout each and every value from the original array 
// //! and store it inisde one more new array(pure array).
// //? syntax :- [...variable];
// let x = [...ele];
// // console.log(x , Array.isArray(x));
// x.map(element=>{
//     // console.log(element);
//     element.style.backgroundColor="orange"
// })

//! 

// let ele = document.getElementsByTagName("div");
// console.log(ele);

//! 

// let ele = document.getElementsByName("formData");
// // console.log(ele , Array.isArray(ele));
// [...ele].map(inp=>{
//     console.log(inp.value);
// })

//! 
// let ele = document.querySelector("#mru");
// console.log(ele);

// let ele = document.querySelector(".test");
// console.log(ele);

// let ele = document.querySelectorAll(".test");
// console.log(ele);



// let btn = document.querySelector("#btn");
//! addEventListner("event" ,()=>{})
    // btn.addEventListener("click",()=>{
    //     // console.log("button clicked");
    //     // alert("hi")
    //     document.body.style.backgroundColor="tomato"
    // })

    // let btn = document.querySelector("#btn");
    // btn.addEventListener("dblclick",()=>{
    //     console.log("double clicked");
    // })


    // let divBlock = document.getElementById("divBlock");
    // divBlock.addEventListener("mouseover",()=>{
    //     document.body.style.backgroundColor="yellow"
    //     divBlock.style.backgroundColor="blue"
    // })

    // divBlock.addEventListener("mouseleave",()=>{
    //     document.body.style.backgroundColor="orange"
    //     divBlock.style.backgroundColor="aqua"
    // })


    // let inp =document.getElementById("inp");
    // inp.addEventListener("keydown",()=>{
    //     console.log("keydown");
    // })

    // inp.addEventListener("keyup",()=>{
    //     console.log("keyup");
    // })
    // let ele = document.createElement("hi")
    // ele.innerText = "Dynamic craetion of htm elemn";
    // // ele.setAttribute("id", "demo");
    // ele.id="demo";
    // console.log(ele);
    // let image = document.createElement("img");
    // image.src = "pic1.png";
    // console.log(image);
    // document.body.appendChild(ele);
    // document.body.appendChild(image);
    // let form = document.querySelector("form");
    // let username = document.getElementById("uName");
    // let mail = document.getElementById("uMail");
    // let psw = document.getElementById("uPass");

    // form.addEventListener("submit",(event)=>{
    //     event.preventDefault();
    //     let uname = username.value;
    //     let uemail = mail.value;
    //     let upass = psw.value;
    //     let userDetails={
    //         uname , uemail, upass
    //     }
    //     console.log(userDetails);
    //     localStorage.setItem("userDetails" , JSON.stringify(userDetails))

    // })

    
    // let h1 = document.createElement("h1");
    // h1.setAttribute("id","demo");
    // h1.innerText = ("MRU Batch3");
    // console.log(h1);
    // document.body.appendChild(h1);

    // let mainEle = document.createElement("div");
    // mainEle.setAttribute("id","mainBlock");
    // mainEle.style.border="2px solid red";
    // mainEle.style.width="550px";
    // mainEle.style.height="550px";

    // console.log(mainEle);

    // let topEle = document.createElement("div");
    // topEle.setAttribute("class","topBlock");

    // let image = document.createElement("img");
    // image.src="./photo-cat.jpeg";
    // image.style.width="550px"

    // let bottomEle = document.createElement("div");
    // bottomEle.setAttribute("class","bottomBlock");

    // let h1 = document.createElement("h1");
    // h1.innerText= "CAT";
    // h1.style.textAlign="center"

    // let btn = document.createElement("button");
    // btn.innerText="View More";
    // btn.style.border="none";
    // btn.style.padding="20px";
    // btn.style.backgroundcolor="dodgerblue";
    // btn.style.color="white";

    // bottomEle.appendChild(h1);
    // bottomEle.appendChild(btn);

    // topEle.appendChild(image);
    // mainEle.appendChild(topEle);
    // mainEle.appendChild(bottomEle);
    // document.body.appendChild(mainEle);

    let form = document.querySelector("form");

    let username = document.getElementById("uName");
    let password = document.getElementById("uPass");
    let check = document.getElementById("check");
    let show = document.getElementById("show");
   
    let gender = document.getElementsByName("gender");
       // console.log(gender);   
   check.addEventListener("click",event=>{
       if(event.target.checked == true){
           password.setAttribute("type", "text");
           show.innerText = "hide password";
       }else{
           password.setAttribute("type","password");
           show.innerText = "show password";
       }
   }) 
   
   
   form.addEventListener("submit" , event=>{
       event.preventDefault();
       let un = username.value;
       let up = password.value;
       let gen = gender.value;
   
       console.log(un , up , gen);
       let userDetails={
           username:un,
           password:up,
           gender:gen
       }
       console.log(userDetails);
       sessionStorage.setItem("userData" ,
           JSON.stringify(userDetails)
       )
   })

    


