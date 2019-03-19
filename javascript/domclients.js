//~~~==========  Declares list of Clients  ==========~~~//

const data =
    {clients:
        [
            {name:"Jane", balance:10},
            {name:"Liam", balance:1000},
            {name:"Emma", balance:1330},
            {name:"Olivia", balance:310},
            {name:"Noah", balance:503},
            {name:"William", balance:520},
            {name:"Benjamin", balance:150},
        ]
    };
    

//===~ For each item in "clients", activate function "createCard" ~===//

data.clients.forEach(createCard); 

function createCard(item, index, array) {
    
    //=============================================Creates <p> tag
    
    const p = document.createElement("p");
    
    let i = index;
    
    const name = data.clients[i].name;
    const balance = data.clients[i].balance;
    
    let pTextNode = document.createTextNode(name + ": " + balance);
    p.appendChild(pTextNode);
    //console.log("p:", p);
    
    
    //=============================================Creates <button> tag
    
    const button = document.createElement("button");
    
    let buttonText = document.createTextNode("Delete");
    button.appendChild(buttonText);
    //console.log("Button:", button);
    
    
    //=============================================Creates <div> tag
    
    const div = document.createElement("div");
    div.className = "clientCard";
    div.appendChild(p);
    div.appendChild(button);
    console.log("div:", div);
    
    
    //=============================================Appends all to Body
    
    document.body.appendChild(div);
};


//~~~========== Activates delete function of buttons ==========~~~//

const deleteButtons = document.getElementsByTagName("button");

console.log(deleteButtons);

deleteButtons.forEach(button.addEventListener("click", deleteCard));

//button.addEventListener("click", deleteCard);

//function deleteCard() {
//    dCard = deleteButton.parentNode;
//    console.log(dCard);
//};