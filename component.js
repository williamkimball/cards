//when the create button is pressed in the html, this block of code will run, creating a card and populating it with the various elements in order to make it able to dynamically change colors, and show text input.
document.querySelector("#createBtn").addEventListener("click", function(){

    //function for changing the background color
    let changeBackColor = () => {
        event.target.parentNode.style.backgroundColor = event.target.value;
        }
    
    //function for changing the font color
    let changeFontColor = () => {
        event.target.parentNode.style.color = event.target.value;
    }

    //create the wrapper div
    let mainDiv = document.createElement("div");
    mainDiv.className = "card";
    
    //function for creating the first color input element
    function input1()  {
        let input1 = document.createElement("input");
        input1.className = "backColor";
        input1.type = "color";
        input1.name = "color1";
        input1.addEventListener("change", changeBackColor);
        return input1;
    }
    //function for creating the second color input element
    function input2() {
        let input2 = document.createElement("input");
        input2.className = "fontColor";
        input2.type = "color";
        input2.name = "color2";
        input2.addEventListener("change", changeFontColor);
        return input2;
    }

    //function for creating the delete button
    function deleteButton() {
        let deleteButton = document.createElement("button");
        deleteButton.className = "deleteBtn";
        deleteButton.textContent = "Delete Card";
        deleteButton.addEventListener("click", function (){
            event.target.parentNode.remove();
        });
        return deleteButton;
    }
    //function for creating the inner text content of the card
    function cardDiv() {
        let cardDiv = document.createElement('div');
        cardDiv.textContent = `${document.querySelector("#createInput").value}`;
        return cardDiv;
    }

    //go through and append each element in the proper place to show up correctly in the DOM
    document.querySelector("#cardSpot").appendChild(mainDiv);
    mainDiv.appendChild(input1());
    mainDiv.appendChild(input2());
    mainDiv.appendChild(deleteButton());
    mainDiv.appendChild(cardDiv());

});