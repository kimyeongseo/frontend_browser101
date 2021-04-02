'use strict';
import {Field, itemType } from './field.js';
import * as sound from './sound.js';

export const Reason = Object.freeze({
    win: 'win',
    lose: 'lose',
    cancel: 'cancel',
});

//Builder Pattern
export class GameBuilder {
    withGameDuration(duration){
        this.gameDuration = duration;
        return this;
    }

    withCarrotCount(num){
        this.carrotCount = num;
        return this;
    }

    withBugCount(num){
        this.bugCount = num;
        return this;
    }

    build(){
        return new Game(
            this.gameDuration,
            this.carrotCount,
            this.bugCount
        );
    }
}

class Game{
    constructor(gameDuration, carrotCount, bugCount){
        this.gameDuration = gameDuration;
        this.carrotCount = carrotCount;
        this.bugCount = bugCount;

        this.gameTimer = document.querySelector('.game__timer');
        this.gameScore = document.querySelector('.game__score');
        this.gameBnt = document.querySelector('.game__button');
        this.gameBnt.addEventListener('click', () => {
            if(this.started){
                this.stop(Reason.cancel);
            } else{
                this.strat();
            }
        });

        this.gameField = new Field(carrotCount, bugCount);
        this.gameField.setClickListener(this.onItemClick);

        this.started = false;
        this.score = 0;
        this.timer = undefined;
    }


    setGameStopListener(onGameStop){
        this.onGameStop = onGameStop;
    }
    
    strat(){
        this.started = true;
        this.initGame();
        this.showStopBnt();
        this.showTimerAndScore();
        this.startGameTimer();
        sound.palyBackground();
    }
    
    stop(reason){
        this.started = false;
        this.stopGameTimer();
        this.hideGameBnt();
        sound.stopBackground();
        this.onGameStop && this.onGameStop(reason);
    }

     onItemClick = item => {
        if(!this.started) {
            return;
        }
        if(item === itemType.carrot){
            //당근
            this.score++;
            this.updateScoreBoard();
            if(this.score === this.carrotCount){
                this.stop(Reason.win);
            }
        } else if(item === itemType.bug){
            //bug
            this.stop(Reason.lose);
        }
    };

    

    showStopBnt() {
    const icon = this.gameBnt.querySelector('.fas');
    icon.classList.add('fa-stop');
    icon.classList.remove('.fa-paly');
    this.gameBnt.style.visibility = 'visible';
}

    hideGameBnt(){
    this.gameBnt.style.visibility = 'hidden';
}

    showTimerAndScore() {
    this.gameTimer.style.visibility = 'visible';
    this.gameScore.style.visibility = 'visible';
}

    startGameTimer() {
    let remainingTimeSec = this.gameDuration;
    this.updateTimerText(remainingTimeSec);
    this.timer = setInterval(() => {
        if(remainingTimeSec <= 0) {
            clearInterval(this.timer);
            this.stop(this.carrotCount === this.score? Reason.win : Reason.lose);
            return;
        }
        this.updateTimerText(--remainingTimeSec);
    }, 1000);
}

    stopGameTimer(){
    clearInterval(this.timer);
}

    updateTimerText(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 50;
    this.gameTimer.innerText = `${minutes}:${seconds}`;
}


    initGame(){
        this.score = 0;
        this.gameScore.innerText = this.carrotCount;
        this.gameField.init();
}

    updateScoreBoard(){
        this.gameScore.innerText = this.carrotCount - this.score;
}
}