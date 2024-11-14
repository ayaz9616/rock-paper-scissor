let userScore=0;
let compScore=0;

let choice=document.querySelector(".choices");

const generateCompChoice=()=>{
    const  options=["Rock","Paper","Scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx]; 
}

let winner="none";
playGame=(userChoice)=>{
    console.log("USER CHOICE:"+userChoice);
    const compChoice=generateCompChoice();
    console.log("COMP CHOICE:"+compChoice);
    
    let statement=document.getElementById("message");

    if(compChoice===userChoice){
        console.log("! GAME WAS A DRAW !");
        winner="draw";
        statement.innerText="User Choice:"+userChoice +"  ;  "+ "Computer Choice:"+compChoice+"  =>  "+ "! GAME WAS A DRAW !";
        statement.style.fontSize="24px";
        statement.style.backgroundColor="purple";
        
    }
    else if(compChoice==="Rock" && userChoice==="Paper" || compChoice==="Paper" && userChoice==="Scissor" || compChoice==="Scissor" && userChoice==="Rock"){
        winner="user";
        console.log("! YOU WON !");
        statement.innerText="User Choice:"+userChoice +" ;  "+ "Computer Choice"+compChoice+" =>  "+"! YOU WON !";
        statement.style.fontSize="24px";
        statement.style.backgroundColor="green";
    }
    
    else{
        winner="comp";
        console.log("! YOU LOST !");
        statement.innerText="User Choice:"+userChoice +" ;  "+ "Computer Choice"+compChoice+" =>  "+"! YOU LOST !";
        statement.style.fontSize="24px";
        statement.style.backgroundColor="red";       
    }
    scoreUpdater(winner);
}

const choices=document.querySelectorAll(".img1")
choices.forEach(choice => {
    choice.addEventListener("click",()=>{
        const uChoice=choice.getAttribute("id");
        playGame(uChoice);
    });
});

let us=0;
let cs=0;
let user1=document.querySelector(".player-score");
let user2=document.querySelector(".computer-score");
let scoreUpdater=(winner)=>{
    if(winner==="user"){
        
        us++;
        user1.innerText=us;
    }
    if(winner==="comp"){
       
        cs++;
        user2.innerText=cs;
    }
}





