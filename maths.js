var score=0;
var answer;
var backgroundImages=[];
function nextQuestion(){
     const n1 = Math.floor(Math.random() * 5);
     document.getElementById('n1').innerHTML = n1;
     const n2 = Math.floor(Math.random() * 6);
     document.getElementById('n2').innerHTML = n2;
     answer = n1+ n2;
}
function checkAnswer(){
    const prediction = predictImage();
    console.log(`answer: ${answer}, prediction: ${prediction}`);
    if(prediction == answer){
        score++;
        console.log(`Correct. Score ${score}`);
        if(score < 7){
        backgroundImages.push(`url('images/background${score}.svg')`);
        document.body.style.backgroundImage = backgroundImages;
    }else{
        alert('Well done!Want to try again?');
        score=0;
        backgroundImages=[];
        document.body.style.backgroundImage = backgroundImages;
    }

}
    else{
        if( score >0){
        score--;
    }
        console.log(`Incorrect. Score ${score}`);
        alert('Check answer and try to write a neat script!');
        setTimeout(function(){
            backgroundImages.pop();
            document.body.style.backgroundImage = backgroundImages;
        }, 1000);

    }
}