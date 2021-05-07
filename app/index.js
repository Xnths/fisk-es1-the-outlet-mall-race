const teamOneSide = document.getElementById('team-one-side');
const teamTwoSide = document.getElementById('team-two-side');

const teamOneScoreBoard = document.getElementById('team-one-score');
const teamTwoScoreBoard = document.getElementById('team-two-score');

var teamOneScore = 0;
var teamTwoScore = 0;

const activeTurn = 'active-turn';

document.addEventListener('keydown', () => {
    teamOneSide.classList.add(activeTurn);
    teamTwoSide.classList.remove(activeTurn);

    teamOneScoreBoard.innerHTML = teamOneScore;

    console.log(teamOneScore);

    teamOneScore++;
});
document.addEventListener('keyup', () => {
    teamOneSide.classList.remove(activeTurn);
    teamTwoSide.classList.add(activeTurn);

    teamTwoScoreBoard.innerHTML = teamTwoScore;

    teamTwoScore++;
});