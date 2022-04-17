let answer = document.getElementById("answer");
inputs = document.querySelectorAll(".button input");

let screenvalue = '';

inputs.forEach(inp => 
    {
    inp.addEventListener("click", (e) =>
     {
        text =e.target.value;

    if(text == "AC")
    {
            screenvalue = '';
            answer.value = screenvalue;
        }
        else if(text == "=")
        {
            answer.value = eval(screenvalue);
        }
        else if(text == "DEL")
        {
            answer.value = answer.value.substr(0, answer.value.length - 1);
            screenvalue = answer.value;
        }
        else
        {
            screenvalue += text;
            answer.value = screenvalue;
            
        }
        
    })
});