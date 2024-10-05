let inputbox=document.getElementById("input-box")
let listContainer=document.getElementById("list-container")




function add(){

    if(inputbox.value==""){
        alert("wrinting something")

    }
    else{
        let li=document.createElement("li")
        li.innerHTML=inputbox.value
        listContainer.appendChild(li)
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
        
    }
    inputbox.value=""
    saveItem()

}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        saveItem()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
        saveItem()
    }
   

},false)

function saveItem(){
    localStorage.setItem("data",listContainer.innerHTML)
}

function showtask(){
    listContainer.innerHTML=localStorage.getItem("data")
}

showtask()

















