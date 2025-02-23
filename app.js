let input = document.querySelector("#input1");
let list = document.querySelector(".list");
let btn1 = document.querySelector(".btn1");
 
 
btn1.addEventListener("click",()=>{
     
    if( document.getElementById('input1').value ===''){
                  alert('enter item please');
    }
    else{
        const div = document.createElement("div");
        div.textContent = document.getElementById('input1').value;
        div.classList.add("div");
        const btn = document.createElement("button");
        btn.innerText ="Remove";
        btn.classList.add("btn");

        const  li = document.createElement("li");
        
        btn.addEventListener("click",()=>{
                li.remove();
        });

    li.classList.add("li");
    li.appendChild(div);
    li.appendChild(btn);

        list.appendChild(li);

        document.getElementById('input1').value = '';
    }
        
});



 

 

