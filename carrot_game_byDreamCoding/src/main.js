'use strict';
import PopUp from './popup.js';
import * as sound from './sound.js';
import {GameBuilder, Reason } from './game.js';

const gameFinishBanner = new PopUp();
const game = new GameBuilder()
.withGameDuration(5)
.withCarrotCount(5)
.withBugCount(5)
.build();

game.setGameStopListener(reason => {
    let message;
    switch(reason) {
        case Reason.cancel:
        message = 'Replay?';
        sound.palyAlert();
        break;
        case Reason.win:
        message = 'YOU WON!';
        sound.palyWin();
        break;
        case Reason.lose:
        message = 'YOU LOST';
        sound.palyBug();
        break;
        default:
        throw new Error('not valid reason');
    }
    gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(()=> {
    game.strat();
});