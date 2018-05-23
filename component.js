let cardNum = 0;

document.querySelector("#createBtn").addEventListener("click", function(){
    cardNum++;

    let changeBackColor = () => {
        event.target.parentNode.style.backgroundColor = event.target.value;
        }
    let changeFontColor = () => {
        event.target.parentNode.style.color = event.target.value;
    }

    let mainDiv = document.createElement("div");
    mainDiv.className = "card";
    
    let input1 = document.createElement("input");
    input1.className = "backColor";
    input1.type = "color";
    input1.name = "color1";
    input1.addEventListener("change", changeBackColor);

    let input2 = document.createElement("input");
    input2.className = "fontColor";
    input2.type = "color";
    input2.name = "color2";
    input2.addEventListener("change", changeFontColor);

    let deleteButton = document.createElement("button");
    deleteButton.className = "deleteBtn";
    deleteButton.textContent = "Delete Card";
    deleteButton.addEventListener("click", function (){
        event.target.parentNode.remove();
    });

    let cardDiv = document.createElement('div');
    cardDiv.id = `${cardNum}`;
    cardDiv.textContent = `${document.querySelector("#createInput").value}`;

    document.querySelector("#cardSpot").appendChild(mainDiv).appendChild(input1);
    mainDiv.appendChild(input2);
    mainDiv.appendChild(deleteButton);
    mainDiv.appendChild(cardDiv);

});