let add = document.getElementById("add");
let sub = document.getElementById("sub");
let para = document.getElementById("para");
let buy = document.getElementById("buy");
let count = 0;

add.addEventListener("click",function(){
    count = count + 1;
    para.textContent = count;
});

sub.addEventListener("click",function(){
   if(count<=0){
    para.textContent = 0;
   }
   else{
    count = count - 1;
    para.textContent = count;
   }
});
buy.addEventListener("click",function(){
let value = para.textContent;
localStorage.setItem("value", value);
});