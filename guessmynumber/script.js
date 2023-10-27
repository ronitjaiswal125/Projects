'use strict';

const number = Math.trunc(Math.random() *20)+1;


let score =20;
let highsocre=0;

document.querySelector('.check').addEventListener
('click',function () {

    const guess =Number(document.querySelector('.guess').value);
    if(!guess){

        document.querySelector('.message').textContent='no number';
        
    }
    else if(guess===number){
        document.querySelector('.message').textContent='you won !! correct number';
        document.querySelector('.number').textContent=number;
        score++;
        document.querySelector('.score').textContent=score;
        if(score>highsocre){
            highsocre=score;
            document.querySelector('.highscore').textContent=highsocre;

        }

    }
    else if(guess>number){
        if(score>1){
        document.querySelector('.message').textContent='too high';
        score--;
        document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.score').textContent=0;
            document.querySelector('.message').textContent='you loose';

        }
    }
    else if(guess<number){
        if(score>1){
            document.querySelector('.message').textContent='too low';
            score--;
            document.querySelector('.score').textContent=score;
            }
            else{
                document.querySelector('.score').textContent=0;
                document.querySelector('.message').textContent='you loose';
    
            }
        
    }

})
document.querySelector('.again').addEventListener
('click',function () {

    document.querySelector('.score').textContent=0;
    document.querySelector('.guess').value='';




}
)
