let cardNum = 0;

document.querySelector("#createBtn").addEventListener("click", function(){
    cardNum++;
    document.querySelector("#cardSpot").innerHTML += `<div class="card"><input type="color" name="color1" class="backColor"><input type="color" name="color2" class="fontColor"><button class="deleteBtn">Delete</button><div class='card' id='${cardNum}'>${document.querySelector("#createInput").value}</div></div>`;
 
    let changeBackColor = () => {
            document.querySelector(".card").style.backgroundColor = event.target.value;
    }
    let changeFontColor = () => {
        document.querySelector(".card").style.color = event.target.value;
}

    document.querySelectorAll(".backColor").forEach(function(element){
        element.addEventListener("change", changeBackColor);
    }
    )
             
    document.querySelectorAll(".fontColor").forEach(function(element){
        element.addEventListener("change", changeFontColor)
    }
             );
    


    document.querySelectorAll(".deleteBtn").forEach(function(element){
        element.addEventListener("click", function (){
                event.target.parentNode.innerHTML = "";
             });
    }
);
})