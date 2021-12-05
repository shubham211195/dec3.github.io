var flag=0;
function counter(){
    let e=document.getElementById("count");
         flag=flag+1;
        e.innerText=flag;
}
function dislike(){
    let f=document.getElementById("count");
        flag=flag-1;
        f.innerText=flag;
}
