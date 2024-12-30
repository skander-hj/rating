const btnsubmit = document.querySelector(".btnsubmit");
const box = document.querySelector(".box");
const box2 = document.querySelector(".box2");
let touches = document.querySelectorAll(".bouton");
let msg= document.querySelector(".message");


btnsubmit.addEventListener('click',function()
    {

        console.log("haaaa");
        if (box.style.display !== "none" && msg.innerHTML!=="  You selected <!-- Add rating here --> out of 5")
        {
            box.style.display = "none";
            box2.style.display = "grid";
        }
        else{
            box.style.display = "grid";
            box2.style.display = "none";
        }
    }   
);


touches.forEach(bouton => {
    bouton.addEventListener('click', function(){
        let n= bouton.textContent;
    msg.innerHTML= "You selected " + n+ " out of 5";
})});





    
