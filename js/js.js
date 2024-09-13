let died =1;
// set categories
const categories = {
    sports: ["foot ball","basket ball","volly ball","tennis"],
    series: ["breacking bad","better call saul","narcos","game of throne"],
    movies: ["angrey men","bat man","super man","spider man"],
    players: ["messi","ronaldo","inesta","neymar"]
}
let category =Object.keys(categories);
// get kind of category
let kind = document.querySelector(".kind").innerHTML=category[Math.floor(Math.random() * category.length)];
// get value of kind
let values = `${categories[kind][Math.floor(Math.random() * categories[kind].length)]}`;
console.log(values);
// set choosen word
let letters = document.querySelector(".letters");
for(i=0;i<values.length;i++){
    let div = document.createElement("div");
    div.classList.add("letter");
    let span =document.createElement("span");
    div.appendChild(span);
    letters.appendChild(div);
}
// set space letter
space();
// get key board
let keyboard = Array.from(document.querySelectorAll(".keyboard span"));
keyboard.forEach((e)=>{
    e.addEventListener("click",function(){
        e.classList.add("active");
        check(e);
    })
});
let arr=[]; 
// set win function
for(j=0;j<values.length;j++){
    if(values[j] == " "){
        arr.push("-");
    }
}
// check function
function check(e){
    let letter = document.querySelectorAll(".letters span");
            if(values.includes(e.innerHTML) == true){
                for(i=0;i<values.length;i++){
                    if(values[i] == e.innerHTML){
                        letter[i].innerHTML = e.innerHTML;
                        arr.push(letter[i].innerHTML);
                        if(arr.length == values.length){
                            document.querySelector(".winner").classList.add("display");
                            document.querySelector(".win").play();
                        }
                        document.querySelector(".correct").play();
                    }
                }
                console.log(arr.length);
            }else{
                document.querySelector(".wrong").play();
                document.querySelector(".draw").classList.add(`wrong-${died}`);
                died++;
                GameOver(died);
            }
}
// space letter
function space(){
    let spaceSpan =document.querySelectorAll(".letters span");
    for(i=0;i<values.length;i++){
        if(values[i] == " "){
            spaceSpan[i].innerHTML="_";
        }
    }
}
// set gameover function
function GameOver(died){
    if(died == 9){
        document.querySelector(".loser").classList.add("display");
        document.querySelector(".lose").play();
    }
}
