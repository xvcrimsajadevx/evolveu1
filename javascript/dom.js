//----------------------------------------Working with Cards

//~~~==========  Counter  ==========~~~//
let counter = 0;
//console.log(counter);


//~~~==========  Add Card Button  ==========~~~//
const addCardButton = document.getElementById("addCardButton");
addCardButton.addEventListener("click", addCard);

function addCard() {
    //console.log("I am in the function");
    
    counter = Number(counter + 1);
    console.log(counter);
    
    const leftPanelID = document.getElementById("leftPanelID");
    const newCardNode = (createCard(counter));
    
    leftPanelID.appendChild(newCardNode);
    
    return counter;
};


//~~~==========  Creates New Card  ==========~~~//

function createCard (num){
    
    //==========  Creates Button Array  ==========//
    
    const buttons = ["Add Before", "Add After", "Delete"];
    const buttonClassName = ["addBeforeButton", "addAfterButton", "deleteButton"];
    
    buttons.forEach(createButtons);
    
    function createButtons(item, index, array) {
        const button = document.createElement("button");
        
        let i = index;
        let node = document.createTextNode(buttons[i]);
        button.className = buttonClassName[i];
        //console.log(node);
        
        item = button;
        console.log(item);
        
        item.appendChild(node);
        
        buttons[i] = item;
        
    }
    
//    console.log("Buttons:", buttons);
//    console.log("Button[0]:", buttons[0]); //addBeforeButton
//    console.log("Button[1]:", buttons[1]); //addAfterButton
//    console.log("Buttons[2]:", buttons[2]); //deleteButton
    
    
    //==========  Creates Card Title  ==========//
    const cardTitle = document.createElement("p");
    const titleNode = document.createTextNode("Card " + num);
    
    cardTitle.appendChild(titleNode);
//    console.log("Card Title", cardTitle);
    
    
    //==========  Builds Card HTML  ==========//
    const newCard = document.createElement("div");
    const br1 = document.createElement("br");
    const br2 = document.createElement("br");
    
    newCard.className = "card";
    
    newCard.appendChild(cardTitle);
    newCard.appendChild(br1);
    newCard.appendChild(buttons[0]); //Add Before Button
    newCard.appendChild(buttons[1]); //Add After Button
    newCard.appendChild(br2);
    newCard.appendChild(buttons[2]); //Delete Button
    
    
    //==========  Adds Event Listeners to Buttons  ==========//
    buttons[0].addEventListener("click", addBefore);
    buttons[1].addEventListener("click", addAfter);
    buttons[2].addEventListener("click", deleteCard);
    
    
    //==========  Logs and Returns newCard  ==========//
    console.log("New Card:", newCard)

        return newCard;
};  

//~~~==========  Add Before Button  ==========~~~//

function addBefore() {
    console.log("I am in the Add Before function");
};


//~~~==========  Add After Button  ==========~~~//

function addAfter() {
    console.log("I am in the Add After function");
};


//~~~==========  Delete Card Button  ==========~~~//

function deleteCard() {
    console.log("I am in the Delete Card function");
};


//--------------------------------------------Pre-Assignment

////-Div click event
//    const divBody = document.getElementById("divBody");
////        console.log("Div:", divBody);
//    
////    divBody.addEventListener("click", function(e) {
////        console.log("Event Parameters:", e);
////    })
//    
//    //-Show button click event
//    const showButton = document.getElementById("showButton");
//    var ol = document.querySelector("ol");
////        console.log("Show Button:", showButton);
////        console.log("Ordered List", ol);
//    
////    console.log("List Length:", ol.children.length);
//    
//    showButton.addEventListener("click", function() {
//        for (i=0; i < ol.children.length; i++){
//        console.log(ol.children[i].outerHTML);
//        }
//    });
//    
//    //-Add button click event
//    const addButton = document.getElementById("addButton");
//        console.log("Add Button:", addButton);
//    
//    addButton.addEventListener("click", function() {
//        let newItem = prompt("Add an item to the list:");
////        console.log(newItem);
//        
//        const li = document.createElement("li");
//        li.textContent = newItem;
////        console.log(li);
//        
//        ol.appendChild(li);
//    });
//    
//    //-Add Start button click event
//    const addStartButton = document.getElementById("addStartButton");
//        console.log("Add Start Button:", addStartButton);
//    
//    addStartButton.addEventListener("click", function() {
//        let newItem = prompt("Add an item to the list:");
////        console.log(newItem);
//        
//        const li = document.createElement("li");
//        li.textContent = newItem;
////        console.log(li);
//        
//        ol.insertBefore(li, ol.children[0]);
//    });
//    
//    //-Delete button click event
//    const deleteButton = document.getElementById("deleteButton");
//        console.log("Delete Button:", deleteButton);
//    
//    deleteButton.addEventListener("click", function() {
//        let index = Number(prompt("which item would you like to delete?"))-1;
//        
//        //console.log("Item Number:", index);
//        
//        ol.children[index].remove();  
//    });