const username = document.getElementById("username")
const saveScoreBtn = document.getElementById("save-score-btn")
const finalScore = document.getElementById("final-score") 
const mostRecentScore = localStorage.getItem("mostRecentScore")
finalScore.innerText = mostRecentScore; 
const MAX_HIGH_SCORE = 5;
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

username.addEventListener("keyup" , ()=>{
    saveScoreBtn.disabled = !username.value;

})
console.log(highScores);
saveHighScore = e =>{
    console.log("clicked on save btn");
    e.preventDefault();
    
    
const score = {
    score:mostRecentScore,
    name:username.value
}
highScores.push(score)

localStorage.setItem("highScores", JSON.stringify(highScores))
window.location.assign("/")

highScores.sort((a,b)=>{
    return b.score - a.score;
})
highScores.splice(5)
console.log(highScores);

}
