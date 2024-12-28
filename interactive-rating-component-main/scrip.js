const submitbtn = document.querySelector(".btnsubmit");
const box = document.querySelector(".box");
const box2 = document.querySelector(".box2");

submitbtn.addEventListener("click",function()
    {


    if (box.style.display !=="none")
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