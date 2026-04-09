function prime(){
    let n=parseInt(document.getElementById("num").value);
    let flag=1;
   let res=document.getElementById("res");
    for(let i=2;i<n;i++){
        if(n%i==0){
            flag=0;
            break;
        }
    } if(flag==1&&n>1){
        res.innerHTML="Prime number";
    } else{
        res.innerHTML="Not prime";
    }
}