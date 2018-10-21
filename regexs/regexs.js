let dateRegex = /[1-9]{2}-(1|0)?[0-9]-2?0?[0-9]{2}/
let someRegex = /[0-9]/
let someDate = "12-01-17"

console.log(dateRegex.test(someDate));
console.log(someRegex.test(1))

let messonRegex = /^[A-Za-zא-ת]{5}[a-zA_Z0-9!-+]{0,7}/
let todoRegex = /^[A-Za-zא-ת]{5}[a-zA_Z0-9!-+]{0,10}$/
console.log(todoRegex.test("skdjlfjlfj"))

let dateINPvalue = document.querySelector("#date").value;
let dateINP = document.querySelector("#date");
let taskINP = document.querySelector("#task").value;
let form = document.querySelector("form")
let p = document.createElement("p");
dateINP.addEventListener("click",(e)=>{
    if (dateRegex.test(e.target.value)){
        p.textContent = "true";
        document.body.appendChild(p);
    }else {
        p.textContent = "false";
        document.body.appendChild(p);
    }
    console.log(
     e.target.value
    )

});