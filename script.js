let text = document.querySelector(".text-texts");
let button = document.querySelector(".readmore");

const textfull = text.innerHTML;

if (text.innerHTML.length > 20){
    let textless = text.innerHTML.slice(0, 20);
    text.innerHTML = textless + "...";
    button.addEventListener("click", (event) => {

        if (button.innerHTML === "NA SHITAI"){
            text.innerHTML = textfull;
            button.innerHTML = "SHITAT SKOROHENO";

        } 
        if (button.innerHTML === "SHITAT SKOROHENO"){
            text.innerHTML = textless + "...";
            button.innerHTML = "NA SHITAI";
        }

        event.preventDefault();

    });
}
