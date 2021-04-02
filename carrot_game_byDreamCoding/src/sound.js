
const carrotSound = new Audio('./sound/carrot_pull.mp3');
const bugSound = new Audio('./sound/bug_pull.mp3');
const bgSound = new Audio('./sound/bg.mp3');
const alertSound = new Audio('./sound/alert.wav');
const winSound = new Audio('./sound/game_win.mp3');

export function palyCarrot(){
    palySound(carrotSound);
}

export function palyBug(){
    palySound(bugSound);
}

export function palyAlert(){
    palySound(alertSound);
}

export function palyWin(){
    palySound(winSound);
}

export function palyBackground(){
    palySound(bgSound);
}

export function stopBackground(){
    stopSound(bgSound);
}

function palySound(sound){
    sound.currentTime = 0;
    sound.play();
}

function stopSound(sound){
    sound.pause();
}
