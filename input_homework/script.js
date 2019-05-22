input = document.querySelector(" #num") ;  
ul = document.querySelector(".item");
button = document.querySelector(".button");





button.addEventListener("click", function () {
    
    if (ul.childElementCount != "") {
        ul.innerHTML = ""
    }
    if(!isNaN(Number(input.value))){
    for (i = 0; i < input.value; i++) {

        var li = document.createElement("li")
        li.classList.add("list-group-item")
        li.innerHtml=(i);
        ul.appendChild(li);
    }
}else{
    alert("Zehmet olmasa eded daxil edin")
}
})