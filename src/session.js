const sessionInfo = {
    goal: "",
    pomodoroLength: 25,
    shortBreakLength: 5,
    longBreakLength: 15,
    sessionNumber: 4,
  };

const sessionState = {
    cycle: 0,
    mode: 0,
    order: 0,
    isPaused: false,
    nextMode: 1,
    timeLeft: sessionInfo.pomodoroLength,
}

const sessionMode = [
    {
        name: "pomodoro",
        length: sessionInfo.pomodoroLength,
        theme: "pomodoro-mode",
        content: `Pomodoro : session ${sessionState.cycle} of ${sessionInfo.sessionNumber}`
    },
    {
        name: "short-break",
        length: sessionInfo.shortBreakLength,
        theme: "short-break-mode",
        content: `Short break : session ${sessionState.cycle} of ${sessionInfo.sessionNumber}`
    },
    {
        name: "long-break",
        length: sessionInfo.longBreakLength,
        theme: "long-break-mode",
        content: `Long break : cycle done 🙌`

    },
]

// isPaused: True이면 정상적으로 실행 False이면 중단 후 1초후 체크해보고 재개

function runTimer() {
    //mode 별 시간을 받아옵니다.
    const timeLeftSec = "";
    if (sessionState.mode=0) {
        timeLeftSec=sessionInfo.pomodoroLength*60;
    } else if (sessionState.mode=1) {
        timeLeftSec=sessionInfo.shortBreakLength*60;
    } else if (sessionState.mode=2) {
        timeLeftSec=sessionInfo.longBreakLength*60;
    } else {
        console.log("mode error");
    };
    //분과 초를 구분하여 표시합니다.
    const min = "";
    const sec = "";

    const timerCore = setInterval(() => {
        min = parseInt(timeLeftSec/60);
        sec = timeLeftSec%60;
        // 남은 초가 한자리수일 경우 앞에 0을 붙여줍니다
        if(sec<10) {sec=`0${sec}`;}

        console.log(`${rm}:${rs}`);
        // document.querySelector("time-left")
        timeLeftSec--;
        // 남은 시간 0일 때 종료
        if(timeLeftSec=0) {clearInterval(timerCore)};
    }, 1000);



}