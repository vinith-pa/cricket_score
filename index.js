const teamARuns = document.getElementById("teamARuns");
const teamAWickets = document.getElementById("teamAWickets");
const teamAOvers = document.getElementById("teamAOvers");
const recent = document.getElementById("recent");

let runs = 0;
let wickets = 0;
let balls = 0;
const updateRuns = (run) => {
  runs = runs + run;
  console.log(runs);
  teamARuns.innerText = `${runs}`;
};

const updateWicket = () => {
  wickets += 1;
  teamAWickets.innerText = wickets;
};

const updateBalls = () => {
  balls += 1;
  teamAOvers.innerText = `${Math.floor(balls / 6)}.${balls % 6}`;
};

const updateRecent = (run) => {
  let seperator = isNaN(run) || balls % 6 != 0 ? "." : "|";
  recent.append(`${run}${seperator}`);
};

const runsButton = document.querySelectorAll("[data-runs]");
const extrasButton = document.querySelectorAll("[data-extras]");
const wicketButton = document.querySelector("[data-wicket]");

runsButton.forEach((button) => {
  button.addEventListener("click", () => {
    let run = Number(button.innerText);
    updateRuns(run);
    updateBalls();
    updateRecent(run);
  });
});

extrasButton.forEach((button) => {
  button.addEventListener("click", () => {
    updateRuns(1);
    let extras = button.innerText;
    updateRecent(extras);
  });
});

wicketButton.addEventListener("click", () => {
  updateWicket();
  updateBalls();
  updateRecent("W");
});

// window.onbeforeunload = function (e) {
//   var e = e || window.event;
//   if (e) {
//     e.returnValue = `Leaving the page`;
//   }
//   return `Leaving the page`;
// };
