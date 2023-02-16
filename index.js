let ans = document.querySelector("#ans");
let num = document.querySelectorAll(".num");
let resetBtn = document.querySelector("#resetBtn")
let result = document.querySelector("#result")

for(let i=0; i<num.length; i++){
    num[i].addEventListener("click", displayNum);
}

// Display numbers
function displayNum(event){
    ans.value = ans.value + event.target.innerHTML;
}

// Clear everything
resetBtn.addEventListener("click", function(event){
    ans.value = "";
})

// Perform operations
result.addEventListener("click", function(event){
   ans.value = eval(ans.value);
})
