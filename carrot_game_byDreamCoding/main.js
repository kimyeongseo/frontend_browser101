'use strict'
const CARROT_SIZE = 80;
const CARROT_COUNT = 15;
const BUG_COUNT = 20;
const GAME_DURATION_SEC = 10;

const field = document.querySelector('.game__field');
const fieldReck = field.getBoundingClientRect();
const gameBnt = document.querySelector('.game__button');
const gameTimer = document.querySelector('.game__timer');
const gameScore = document.querySelector('.game__score');

const popUp = document.querySelector('.pop-up');
const popUpText = document.querySelector('.pop-up__message');
const popUpRefresh = document.querySelector('.pop-up__refresh');

const carrotSound = new Audio('./sound/carrot_pull.mp3');
const bugSound = new Audio('./sound/bug_pull.mp3');
const bgSound = new Audio('./sound/bg.mp3');
const alertSound = new Audio('./sound/alert.wav');
const winSound = new Audio('./sound/game_win.mp3');

//이해가 필요한 변수선언 부분
let started = false;
let score = 0;
let timer = undefined;

field.addEventListener('click', onFieldClick);

gameBnt.addEventListener('click', () => {
    if(started){
        stopGame();
    } else{
        stratGame();
    }
});

popUpRefresh.addEventListener('click', () => {
    stratGame();
    hidePopUp();
})

function stratGame(){
    started = true;
    initGame();
    showStopBnt();
    showTimerAndScore();
    startGameTimer();
    palySound(bgSound);
}

function stopGame(){
    started = false;
    stopGameTimer();
    hideGameBnt();
    showPopUpWithText('REPLAY?');
    palySound(alertSound);
    stopSound(bgSound);
}

function finishGame(win){
    started = false;
    hideGameBnt();
    if(win){
        palySound(winSound);
    }else{
        palySound(bugSound);
    }
    stopGameTimer();
    stopSound(bgSound);
    showPopUpWithText(win? 'YOU WON!' : 'YOU LOST');
}

function showStopBnt() {
    const icon = gameBnt.querySelector('.fas');
    icon.classList.add('fa-stop');
    icon.classList.remove('.fa-paly');
    gameBnt.style.visibility = 'visible';
}

function hideGameBnt(){
    gameBnt.style.visibility = 'hidden';
}

function showTimerAndScore() {
    gameTimer.style.visibility = 'visible';
    gameScore.style.visibility = 'visible';
}

function startGameTimer() {
    let remainingTimeSec = GAME_DURATION_SEC;
    updateTimerText(remainingTimeSec);
    timer = setInterval(() => {
        if(remainingTimeSec <= 0) {
            clearInterval(timer);
            finishGame(CARROT_COUNT === score);
            return;
        }
        updateTimerText(--remainingTimeSec);
    }, 1000);
}

function stopGameTimer(){
    clearInterval(timer);
}

function updateTimerText(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 50;
    gameTimer.innerText = `${minutes}:${seconds}`;
}

function showPopUpWithText(text) {
    popUpText.innerText = text;
    popUp.classList.remove('pop-up--hide');
}

function hidePopUp() {
    popUp.classList.add('pop-up--hide');
}

function initGame(){
    score = 0;
    field.innerHTML = '';
    gameScore.innerText = CARROT_COUNT;
    // 벌레와 당근을 생선한 뒤 field에 추가해줌
    addItem('carrot', CARROT_COUNT, 'img/carrot.png');
    addItem('bug', BUG_COUNT, 'img/bug.png');
}

function onFieldClick(event){
    if(!started) {
        return;
    }
    const target = event.target;
    if(target.matches('.carrot')){
        //당근
        target.remove();
        score++;
        palySound(carrotSound);
        updateScoreBoard();
        if(score === CARROT_COUNT){
            finishGame(true);
        }
    } else if(target.matches('.bug')){
        //bug
        finishGame(false);
    }
}

function palySound(sound){
    sound.currentTime = 0;
    sound.play();
}

function stopSound(sound){
    sound.pause();
}

function updateScoreBoard(){
    gameScore.innerText = CARROT_COUNT - score;
}

function addItem(className, count, imgPath){
    const x1 = 0;
    const y1 = 0;
    const x2 = fieldReck.width - CARROT_SIZE;
    const y2 = fieldReck.height - CARROT_SIZE;

    for(let i = 0; i < count; i++){
        const item = document.createElement('img');
        item.setAttribute('class', className);
        item.setAttribute('src', imgPath);
        item.style.position = 'absolute';
        const x = randomNumber(x1, x2);
        const y = randomNumber(y1, y2);
        item.style.left = `${x}px`
        item.style.top = `${y}px`
        field.appendChild(item);
    }
}

function randomNumber(min, max){
    return Math.random() * (max - min) + min;
}

