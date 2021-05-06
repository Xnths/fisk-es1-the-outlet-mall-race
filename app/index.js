const teamOneSide = document.getElementById('team-one-side');
const teamTwoSide = document.getElementById('team-two-side');

const activeTurn = 'active-turn';

document.addEventListener('keydown', () => {
    teamOneSide.classList.add(activeTurn);
    teamTwoSide.classList.remove(activeTurn);
});
document.addEventListener('keyup', () => {
    teamOneSide.classList.remove(activeTurn);
    teamTwoSide.classList.add(activeTurn);
});