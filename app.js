let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click",function(){
    let item=document.createElement("li");    
    item.innerText=inp.value;
    
    let delBtn=document.createElement("button");
    delBtn.innerText="Delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    console.log(inp.value);
    inp.value="";
});
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON")
    {
        let listItem=event.target.parentElement;
        console.log(listItem);
        listItem.remove();
        console.log("item deleted");
    }
    else
    console.log("don't delete");
})

//Event Delegation is Used
// let delBtns=document.querySelectorAll(".delete");
// for(delBtn of delBtns)
// {
//     delBtn.addEventListener("click",function(){
//         console.log("Element Deleted");
//         let par=delBtn.parentElement;
//         console.log(par);
//         par.remove();
//     })
// } 