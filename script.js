
/*
This is the code from the video sample which i tried to understand but couldnt
let count = 0;

const value = document.getElementById('value')
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
        }
        else if(styles.contains("increase")){
            count++;
        }
        else{
            count = 0;
        }


        if (count > 0) {
            value.style.color = "green";
        }

        if (count < 0) {
            value.style.color = "red";
        }

        if (count === 0) {
            value.style.color = "black";
        }

    value.textContent = count;
    });
 
});

*/
//Understood this code better, I wrote with more understanding from online research
let value = 0;
const valueElement = document.getElementById("value");

function updateValue() {
    valueElement.textContent = value;

if (value < 0) {
    valueElement.style.color = "red";
} 

else if (value > 0) {
    valueElement.style.color = "green";
}

else if(value === 0) {
    valueElement.style.color = "black";
} 

}
function decrease() {
value--;
updateValue();
}

function reset(){
    value = 0;
    updateValue();
}

function increase(){
    value++;
    updateValue();
}