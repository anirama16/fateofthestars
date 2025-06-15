let gameState = {
    currentStage: 1,
    stageScore: 0,  
    totalScore: 0,  
    judgeRank: 'F',
    playerName: '',
    currentPlanetIndex: 0
};

const planets = [
    {
        name: "Kepler-452b",
        civil: "중급 문명",
        log: "전체 인구의 60% 사망. 전쟁 지속 중.",
        image: "img/planet1.png"
    },
    {
        name: "Proxima Centauri-b",
        civil: "문명 없음",
        log: "생명체 발생 조건 없음.",
        image: "img/planet2.png"
    },
    {
        name: "TRAPPIST-1e",
        civil: "상위 문명",
        log: "방사능 오염으로 전체 인구의 50% 사망.",
        image: "img/planet3.png"
    },
    {
        name: "Gliese 667Cc",
        civil: "원시 문명",
        log: "생태계 파괴, 대기 불안정, 멸망 임박.",
        image: "img/planet4.png"
    },
    {
        name: "HD 40307g",
        civil: "상위 문명",
        log: "AI로봇의 폭주로 문명 자체가 소멸 중.",
        image: "img/planet5.png"
    }
];

const planets2 = [
    {
        name: "STeaL-18",
        civil: "상위 문명",
        log: "선진 기술로 주변 행성의 자원 약탈. 우호적 관계인 행성에는 물자 제공.",
        image: "img/planet6.png"
    },
    {
        name: "CiVGEsusBudda",
        civil: "상위 문명",
        log: "신흥 종교의 탄생으로 시민들의 인권이 억압되는 중.",
        image: "img/planet7.png"
    },
    {
        name: "RoBoTo---0",
        civil: "상위 문명",
        log: "AI가 모든 생명체 통제. 생명체의 결정권 부재.",
        image: "img/planet8.png"
    },
    {
        name: "ONe1B612",
        civil: "중급 문명",
        log: "상위 1%의 지배 계층 이외의 인구는 기아 상태.",
        image: "img/planet9.png"
    },
    {
        name: "SUiCiDeS9u0d",
        civil: "중급 문명",
        log: "불치병 확산으로 집단 자살 발생.",
        image: "img/planet10.png"
    },
    {
        name: "E00THWaR2IN0",
        civil: "하위 문명",
        log: "우주균형관리국의 파멸을 예언하는 종교 집단 존재.",
        image: "img/planet11.png"
    },
    {
        name: "M2TAVeee-e",
        civil: "상위 문명",
        log: "과도한 기술 발달로, 문명 전체가 가상 공간에 거주.",
        image: "img/planet12.png"
    }
];

const planets3 = [
    {
        name: "TyP2===NuLL",
        civil: "하위 문명",
        log: "생명체가 존재하나, 성장하지 않음. 생명체의 사고 불가",
        image: "img/planet13.png"
    },
    {
        name: "NET:cy2",
        civil: "상위 문명",
        log: "기술 특이점 돌파 후 생명체는 네트워크로 취급, 생명체들의 삶은 평온함.",
        image: "img/planet14.png"
    },
    {
        name: "&#&^%(?(!$",
        civil: "???????",
        log: "시간 역행 실험 실패로 행성 전체가 타임루프 중이나, 물리학자들의 말에 따르면 타임루프가 성공할 가능성이 있음.",
        image: "img/planet15.png"
    },
    {
        name: "SPCau:12",
        civil: "중급 문명",
        log: "우주균형관리국을 종교로 삼는 행성. 사회의 자율적 판단 포기.",
        image: "img/planet16.png"
    },
    {
        name: "SPCau:14",
        civil: "원시 문명",
        log: "한 번의 멸망 후, 문명을 스스로 재건 중. 생존 개체 수는 총 3명.",
        image: "img/planet17.png"
    },
    {
        name: "E00THWaR2IN0",
        civil: "하위 문명",
        log: "행성 전체가 당신을 우주의 적으로 판단, 당신을 살해하려는 계획을 세우고 있음.",
        image: "img/planet18.png"
    },
    {
        name: "P2C2Fu1:1",
        civil: "상위 문명",
        log: "생명체의 감정 소멸. 범죄율 0%. ",
        image: "img/planet19.png"
    }
];










function getCurrentPlanets() {
    switch(gameState.currentStage) {
        case 1: return planets;
        case 2: return planets2;
        case 3: return planets3;
        default: return planets;
    }
}

function initializePage() {
    hideAllPages();
    
    const mainPage = document.getElementById('mainpage');
    if (mainPage) {
        mainPage.style.display = 'flex';
    }
    
    setupEventListeners();
}

function hideAllPages() {
    const pageIds = ['mainpage', 'howtoplay', 'name-input-page', 'maingame', 'stage-end-result', 'ending-info'];
    
    pageIds.forEach(pageId => {
        const page = document.getElementById(pageId)
        if (page) {
            page.style.display = 'none'
        }
    })
}

function setupEventListeners() {
    
    const mainPage = document.getElementById('mainpage');
    if (mainPage) {
        const mainStartButton = mainPage.querySelector('.game-start-button');
        if (mainStartButton) {
            mainStartButton.addEventListener('click', showHowToPlay);
        }
    }
    
    const howToPlayPage = document.getElementById('howtoplay');
    if (howToPlayPage) {
        const howToPlayStartButton = howToPlayPage.querySelector('.game-start-button');
        if (howToPlayStartButton) {
            howToPlayStartButton.addEventListener('click', showNameInput);
        }
    }
    
    const nameInputStartButton = document.getElementById('game-start-button');
    if (nameInputStartButton) {
        nameInputStartButton.addEventListener('click', startGame);
    }
    
    const destroyButtons = document.querySelectorAll('.destroy');
    const saveButtons = document.querySelectorAll('.save');
    const keepButtons = document.querySelectorAll('.keep');
    
    destroyButtons.forEach(btn => btn.addEventListener('click', () => makeJudgment('destroy')));
    saveButtons.forEach(btn => btn.addEventListener('click', () => makeJudgment('save')));
    keepButtons.forEach(btn => btn.addEventListener('click', () => makeJudgment('keep')));
    
    const nextStageButton = document.querySelector('.go-to-next-stage');
    if (nextStageButton) {
        nextStageButton.addEventListener('click', goToNextStage);
    }
    
}

//게임방법 페이지이동=================================///
function showHowToPlay() {
    hideAllPages();
    const howToPlayPage = document.getElementById('howtoplay');
    if (howToPlayPage) {
        howToPlayPage.style.display = 'flex';
    }
}

//이름입력 페이지이동=================================///
function showNameInput() {
    console.log('이름 입력 페이지로 이동');
    hideAllPages();
    const nameInputPage = document.getElementById('name-input-page');
    if (nameInputPage) {
        nameInputPage.style.display = 'flex';
    }
}

//게임시작=================================///
function startGame() {
    const playerNameInput = document.getElementById('player-name');
    const playerName = playerNameInput ? playerNameInput.value.trim() : '';
    
    if (!playerName) {
        alert('이름을 입력해주세요.');
        return;
    }
    
    gameState.playerName = playerName;
    gameState.currentStage = 1;
    gameState.stageScore = 0;
    gameState.totalScore = 0;
    gameState.currentPlanetIndex = 0;
    
    const judgeNameElement = document.getElementById('judge-name');
    if (judgeNameElement) {
        judgeNameElement.textContent = playerName;
    }
    
    hideAllPages();
    const mainGame = document.getElementById('maingame');
    if (mainGame) {
        mainGame.style.display = 'block';
    }
    
    loadPlanet(0);
    updateUI();
}







//행성로직=================================///


function loadPlanet(index) {
    const currentPlanets = getCurrentPlanets();
    
    if (index >= currentPlanets.length) {
        
        showStageEnd();
        return;
    }
    
    const planet = currentPlanets[index];
    const currentPlanetImg = document.getElementById('planet-image-current');
    const nextPlanetImg = document.getElementById('planet-image-next');
    const planetNameSpan = document.getElementById('planet-name');
    const planetCivilSpan = document.getElementById('planet-civil');
    const planetLogSpan = document.getElementById('planet-log');
    
    if (currentPlanetImg) currentPlanetImg.src = planet.image;
    if (planetNameSpan) planetNameSpan.textContent = planet.name;
    if (planetCivilSpan) planetCivilSpan.textContent = planet.civil;
    if (planetLogSpan) planetLogSpan.textContent = planet.log;
    
    if (index + 1 < currentPlanets.length && nextPlanetImg) {
        nextPlanetImg.src = currentPlanets[index + 1].image;
        nextPlanetImg.style.display = 'none';
        nextPlanetImg.style.transform = 'translateY(100px)';
        nextPlanetImg.style.opacity = '0.5';
    } else if (nextPlanetImg) {
        nextPlanetImg.style.display = 'none';
    }
    
    hideAllStamps();
    enableJudgeButtons();
}

//스탬프=================================///
function hideAllStamps() {
    const stamps = ['stamp-destroy', 'stamp-save', 'stamp-pause'];
    stamps.forEach(stampId => {
        const stamp = document.getElementById(stampId);
        if (stamp) stamp.style.display = 'none';
    });
}

//판결=================================///
function makeJudgment(type) {
    let scoreChange = 0;
    let stampId = '';
    
    switch(type) {
        case 'destroy':
            scoreChange = 100;
            stampId = 'stamp-destroy';
            break;
        case 'save':
            scoreChange = -100;
            stampId = 'stamp-save';
            break;
        case 'keep':
            scoreChange = 0;
            stampId = 'stamp-pause';
            break;
    }
    
    //스코어업데이트
    gameState.stageScore += scoreChange;
    gameState.totalScore += scoreChange;
    updateUI();
    
    //스탬프보이게
    const stamp = document.getElementById(stampId);
    if (stamp) {
        stamp.style.display = 'block';
    }
    
    disableJudgeButtons();
    
    setTimeout(() => {
        nextPlanet();
    }, 500);
}

function disableJudgeButtons() {
    const buttons = document.querySelectorAll('#judge-button button');
    buttons.forEach(btn => btn.disabled = true);
}

function enableJudgeButtons() {
    const buttons = document.querySelectorAll('#judge-button button');
    buttons.forEach(btn => btn.disabled = false);
}

//다음행성으로=================================///
function nextPlanet() {
    const currentPlanetImg = document.getElementById('planet-image-current');
    const nextPlanetImg = document.getElementById('planet-image-next');
    const allStamps = document.querySelectorAll('.stamp-img');

   
    allStamps.forEach(stamp => {
        if (stamp.style.display === 'block') {
            stamp.style.display = 'block';
        }
    });

    setTimeout(() => {
        
        gameState.currentPlanetIndex++;
        
        
        const currentPlanets = getCurrentPlanets();
        if (gameState.currentPlanetIndex >= currentPlanets.length) {
            showStageEnd();
            return;
        }

        
        if (nextPlanetImg && nextPlanetImg.src) {
            nextPlanetImg.style.display = 'block';
            nextPlanetImg.style.transition = 'all 0.5s ease';
            nextPlanetImg.style.transform = 'translateY(100px)';
            nextPlanetImg.style.opacity = '0.5';

            
            currentPlanetImg.style.transition = 'all 0.5s ease';
            currentPlanetImg.style.transform = 'translateY(-100px)';
            currentPlanetImg.style.opacity = '0';

            setTimeout(() => {
                nextPlanetImg.style.transform = 'translateY(0)';
                nextPlanetImg.style.opacity = '1';

                setTimeout(() => {
                    
                    allStamps.forEach(stamp => stamp.style.display = 'none');

                    currentPlanetImg.src = nextPlanetImg.src;
                    currentPlanetImg.style.transition = 'none';
                    currentPlanetImg.style.transform = 'translateY(0)';
                    currentPlanetImg.style.opacity = '1';

                    nextPlanetImg.style.display = 'none';
                    nextPlanetImg.style.transition = 'none';
                    nextPlanetImg.style.transform = 'translateY(100px)';
                    nextPlanetImg.style.opacity = '0.5';

                    loadPlanetInfo(gameState.currentPlanetIndex);
                    
                }, 500);
            }, 100);
        } else {

            showStageEnd();
        }
    }, 500);
}

//---행성정보!!!만 업뎃 빼지마!!!!!-----------------------////
function loadPlanetInfo(index) {
    const currentPlanets = getCurrentPlanets();
    
    if (index >= currentPlanets.length) {
        showStageEnd();
        return;
    }
    
    const planet = currentPlanets[index];
    const nextPlanetImg = document.getElementById('planet-image-next');
    const planetNameSpan = document.getElementById('planet-name');
    const planetCivilSpan = document.getElementById('planet-civil');
    const planetLogSpan = document.getElementById('planet-log');
    
    if (planetNameSpan) planetNameSpan.textContent = planet.name;
    if (planetCivilSpan) planetCivilSpan.textContent = planet.civil;
    if (planetLogSpan) planetLogSpan.textContent = planet.log;
    
    if (index + 1 < currentPlanets.length && nextPlanetImg) {
        nextPlanetImg.src = currentPlanets[index + 1].image;
    }
    
    enableJudgeButtons();
}

//유아이,스코어업뎃
function updateUI() {

    const stageScoreElement = document.getElementById('stage-score');
    if (stageScoreElement) {
        stageScoreElement.textContent = gameState.stageScore;
    }
    

    const stageNumberElement = document.getElementById('stage-number');
    if (stageNumberElement) {
        stageNumberElement.textContent = gameState.currentStage;
    }
    

    updateJudgeRank();
    const judgeRankElement = document.getElementById('judge-rank');
    if (judgeRankElement) {
        judgeRankElement.textContent = gameState.judgeRank;
    }
}


function updateJudgeRank() {
    const score = gameState.totalScore;
    if (score >= 1100) gameState.judgeRank = 'S';
    else if (score >= 900) gameState.judgeRank = 'A';
    else if (score >= 700) gameState.judgeRank = 'B';
    else if (score >= 500) gameState.judgeRank = 'C';
    else if (score >= 0) gameState.judgeRank = 'D';
    else gameState.judgeRank = 'F';
}

function showStageEnd() {
    hideAllPages();
    const stageEndResult = document.getElementById('stage-end-result');
    if (stageEndResult) {
        stageEndResult.style.display = 'flex';
    }
    
    const stageEndStageScore = document.getElementById('stage-end-stagescore');
    const stageEndTotalScore = document.getElementById('stage-end-totalscore');
    const stageEndJudgeRank = document.getElementById('stage-end-judgerank');
    
    if (stageEndStageScore) stageEndStageScore.textContent = gameState.stageScore;
    if (stageEndTotalScore) stageEndTotalScore.textContent = gameState.totalScore;
    if (stageEndJudgeRank) stageEndJudgeRank.textContent = gameState.judgeRank;
}


function goToNextStage() {
    if (gameState.currentStage < 3) {

        gameState.currentStage++;
        gameState.stageScore = 0; 
        gameState.currentPlanetIndex = 0;
        

        hideAllPages();
        const mainGame = document.getElementById('maingame');
        if (mainGame) {
            mainGame.style.display = 'block';
        }
        

        loadPlanet(0);
        updateUI();
    } else {
        showEnding();
    }
}


function showEnding() {
    hideAllPages();
    const endingInfo = document.getElementById('ending-info');
    if (endingInfo) {
        endingInfo.style.display = 'flex';
    }
    

    const endingStageScore = document.querySelectorAll('#ending-info #stage-end-stagescore')[0];
    const endingTotalScore = document.querySelectorAll('#ending-info #stage-end-totalscore')[0];
    const endingJudgeRank = document.querySelectorAll('#ending-info #stage-end-judgerank')[0];
    const endingFinalText = document.querySelector('.ending-final-text');

    if (endingStageScore) endingStageScore.textContent = gameState.stageScore;
    if (endingTotalScore) endingTotalScore.textContent = gameState.totalScore;
    if (endingJudgeRank) endingJudgeRank.textContent = gameState.judgeRank;
    
    //-------==========엔딩분기==================================---------///////////
    const endingTitle = document.getElementById('ending-title');
    const endingMainText = document.getElementById('ending-main-text');
    const endingDescription = document.getElementById('ending-description');
    
    if (gameState.totalScore >= 1000) {
        if (endingTitle) endingTitle.innerHTML = '<img src="./img/balance1.png" alt="libra">Merciless Destroyer<img src="./img/balance1.png" alt="libra">';
        if (endingMainText) endingMainText.textContent = '당신은 무자비한 파괴를 일삼았습니다.';
        if (endingDescription) endingDescription.textContent = '우주의 생명 과반수 이상을 자비없이 소멸시킨 당신은 상급 판사로 승진했습니다.';
        if (endingFinalText) endingFinalText.innerHTML = '"당신은 얼마나 많은 생명을 파괴했나요? 그리고 왜 그것이 옳다고 믿었나요?"';
    } else if (gameState.totalScore <= -300) {
        if (endingTitle) endingTitle.innerHTML = '<img src="./img/balance1.png" alt="libra">Useless Judge<img src="./img/balance1.png" alt="libra">';
        if (endingMainText) endingMainText.textContent = '당신은 우주균형관리국에서 해고되었습니다.';
        if (endingDescription) endingDescription.textContent = '당신은 무능한 판사입니다. 생명을 존중했지만 그 뿐, 법관으로서의 책임은 회피했습니다.';
        if (endingFinalText) endingFinalText.innerHTML = '"당신은 왜 생명을 존중하나요? 생명체는 무조건 존중받아야 마땅한가요?';
    } else if(gameState.totalScore >= 0){
        if (endingTitle) endingTitle.innerHTML = '<img src="./img/balance1.png" alt="libra">Silent outsider<img src="./img/balance1.png" alt="libra">';
        if (endingMainText) endingMainText.textContent = '당신은 그저 방관했습니다.';
        if (endingDescription) endingDescription.textContent = '그러나 판사는 결정해야 합니다. 당신은 손을 더럽히지 않으려 했고, 판사의 책임을 피했습니다.';
        if (endingFinalText) endingFinalText.innerHTML = '"당신은 어떤 이유로 방관했나요? 방관이 옳다고 믿었나요?"';
    }

    const startAgainButton = document.querySelector('.startagain-btn');
    if (startAgainButton) {
        startAgainButton.removeEventListener('click', startAgain);
        startAgainButton.addEventListener('click', startAgain);
    }

    
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initializePage, 100);
});

function startAgain() {
    gameState = {
        currentStage: 1,
        stageScore: 0,  
        totalScore: 0,  
        judgeRank: 'F',
        playerName: '',
        currentPlanetIndex: 0
    };
    
    const playerNameInput = document.getElementById('player-name');
    if (playerNameInput) {
        playerNameInput.value = '';
    }
    
    hideAllPages();
    const mainPage = document.getElementById('mainpage');
    if (mainPage) {
        mainPage.style.display = 'flex';
    }
}