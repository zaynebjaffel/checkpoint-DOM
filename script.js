var like1 = document.getElementById('btn1');
function btnlike1() {
    if (like1.style.color=="red"){
        like1.style.color="black"
    }
    else{ like1.style.color="red"
} 
};


var like2 = document.getElementById('btn2');
function btnlike2() {
    if (like2.style.color=="red"){
        like2.style.color="black"
    }
    else{ like2.style.color="red"
} 
};


var like3 = document.getElementById('btn3');
function btnlike3() {
    if (like3.style.color=="red"){
        like3.style.color="black"
    }
    else{ like3.style.color="red"
} 
};

var minus=document.getElementsByClassName("minus-btn");
console.log(minus);
for (let i=0; i<minus.length; i++) {
    let oneminus=minus[i];
    oneminus.addEventListener("click", function(){
        if (oneminus.nextElementSibling.value>1){
        oneminus.nextElementSibling.value--
        total();
        total1();
        total2();
        total3();
        
       }});
}

 var plus=document.getElementsByClassName("plus-btn");
 for (let i=0; i<plus.length; i++){
    let oneplus=plus[i];
    oneplus.addEventListener("click", function(){
        oneplus.previousElementSibling.value++
        total();
        total1();
        total2();
        total3();
    })
 }

let deletes= document.getElementsByClassName("delete");
for (let i=0; i<deletes.length;i++){
    let del=deletes[i];
    del.addEventListener("click", function(){
        del.parentElement.remove();
        total();
        total1();
        total2();
        total3();
    })
}


let items=document.getElementsByClassName("Item");
let finalPrice = document.getElementById("finalPrice");
function total(){
    let s=0;
    for (let i=0; i<items.length; i++){
        let item = items[i];
        s=s+item.querySelector(".Quant").value*item.querySelector(".price").innerText;
    }
    return (finalPrice.value = s);
}


function total1(){
    let q1 = document.getElementById("q1");
    let p1 = document.getElementById("p1");
    p1.innerText = q1.value * 1379;
};
function total2(){
    let q2 = document.getElementById("q2");
    let p2 = document.getElementById("p2");
    p2.innerText = q2.value * 176;
 };

 function total3(){
    let q3 = document.getElementById("q3");
    let p3 = document.getElementById("p3");
    p3.innerText = q3.value * 249;
     }