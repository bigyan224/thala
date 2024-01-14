let status=false;
var inputValue;
let myVideo = document.getElementById('myVideo');
let result=document.getElementById("result")
let idea=document.querySelector("#idea")
document.querySelector("#icon").addEventListener("click",function(){
        if(status==false){
        idea.innerText="enter anything whose length or sum = 7";
        status=!status;
        }
        else{
            idea.innerText="";
        status=!status;
        }
}
)
let sum;

document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the value entered in the text input
    inputValue = document.getElementById('textInput').value;

    // Check if the entered value is a valid number
    if (!isNaN(inputValue) && !isNaN(parseInt(inputValue))) {
        var stringValue = inputValue.toString();

        // Calculate the sum of each digit
        sum = 0;
        for (var i = 0; i < stringValue.length; i++) {
            sum += parseInt(stringValue[i]);
        }
    }

    if (inputValue.length == 7 || sum == 7) {
        myVideo.style.display="block";
        myVideo.play();
        result.innerText="Thala for a reason";
        idea.innerText=`${inputValue} = 7`
    } else {
        idea.innerText=`${inputValue} is not equal to 7`
    }
});