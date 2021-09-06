const inputArea = document.getElementById("text-input");
const wordCount = document.getElementById("word");
const charCount = document.getElementById("char");
console.log("working");
inputArea.oninput = ()=>{
    let text = inputArea.value;
    charCount.innerText = text.length;
    // word count
     wordCount.innerText = wordCounter(text);
}

function wordCounter(text){
    let count = 1;
    for(let i=0;i<text.length;i++){
        if(text.charAt(i) == " ")
            count++;
    }
    return count;
}