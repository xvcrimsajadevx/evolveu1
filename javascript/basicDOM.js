console.log("Hello world from basicDOM.js");
console.log("Document:", document);

//------------------------------------------Functions
//On Button Push
function onButtonPushed(){
    //console.log("I am in the function");
    
    //if (idH1.textContent==="Hello World!") {
        //idH1.textContent = "Hello Universe!";
    //}
    //else {
        //idH1.textContent = "Hello World!";
    //}
    
    idH1.textContent = "Hello World!";
    idH3.textContent = "Hello Alberta!";
    idH4.textContent = "Hello Calgary!";
    
};

//On Header Push
function onHeaderPush(){
    if (idH1.textContent==="Hello World!") {
        idH1.textContent = "Hello Universe!";
    }
    else {
        idH1.textContent = "Hello World!";
    }
};

//On Header Mouseover
function onH3Mouseover(){
    idH3.textContent = "Hello Saskatchewan!";
}

function onH3Mouseout(){
    idH3.textContent = "Hello Alberta!";
}

//On Header Mouseout
function onH4Mouseout(){
    idH4.textContent = "Hello Saskatoon!";
}

function onH4Mouseover(){
   idH4.textContent = "Hello Calgary!";
}


//------------------------------------------Event Listeners
//Button Push
const idBtnPushed = document.getElementById("idBtnPush");
//console.log("Button:", idBtnPushed);

idBtnPushed.addEventListener("click", onButtonPushed,);
console.log("Header1:", idH1);


//H1 Push
const idH1Push = document.getElementById("idH1");
console.log(idH1Push);

idH1Push.addEventListener("click", onHeaderPush,);


//H3 Mouseover
const idH3Mouse = document.getElementById("idH3");
console.log(idH3Mouse);

idH3Mouse.addEventListener("mouseover", onH3Mouseover,);
//idH3Mouse.addEventListener("mouseout", onH3Mouseout,);


//H4 Mouseout
const idH4Mouse = document.getElementById("idH4");
console.log(idH4Mouse);

idH4Mouse.addEventListener("mouseout", onH4Mouseout,);
//idH4Mouse.addEventListener("mouseover", onH4Mouseover,);