let btn=document.querySelector(".humberger")
let item= document.querySelectorAll(".hide")
let navBar =document.querySelector(".navbar")
let myspan = document.querySelectorAll(".close")

btn.addEventListener("click",function(){
    if(navBar.classList.contains("size")){
        navBar.classList.remove("size")
        navBar.classList.add("size2")
    }
    else{
        navBar.classList.remove("size2")
        navBar.classList.add("size")
    }
    let verify=item[0].classList.contains("hiden");
    myspan.forEach(e=>{e.classList.toggle("open")})    
    if(verify){
        setTimeout(function(){
            item.forEach(e=>{e.classList.remove("hiden")})
        },200)
    }
    else
    setTimeout(function(){
        item.forEach(e=>{e.classList.add("hiden")})
    },400)
        
    
})