const teamOneSide = document.getElementById('team-one-side');
const teamTwoSide = document.getElementById('team-two-side');

const teamOneScoreBoard = document.getElementById('team-one-score');
const teamTwoScoreBoard = document.getElementById('team-two-score');

const teamOneDraw = document.getElementById('team-one-draw');
const teamTwoDraw = document.getElementById('team-two-draw');

const teamOneCard = document.getElementById('team-one-card');
const teamTwoCard = document.getElementById('team-two-card');

const teamOnePoints = document.getElementById('team-one-points');
const teamTwoPoints = document.getElementById('team-two-points');

const teamOneQuestion = document.getElementById('team-one-question');
const teamTwoQuestion = document.getElementById('team-two-question');

const teamOneCorrect = document.getElementById('team-one-correct');
const teamOneWrong = document.getElementById('team-one-wrong');

const teamTwoCorrect = document.getElementById('team-two-correct');
const teamTwoWrong = document.getElementById('team-two-wrong');

teamTwoDraw.disabled = true;

var teamOneScore = 0;
var teamTwoScore = 0;

var questions = [
    "Are you from Los Angeles?",
    "Is David Beckhama British soccer player?",
    "Who is your favorite soccer player?",
    "Do you have pizza for dinner on Saturday nights?",
    "Does your best friend like sushi?",
    "What do you and your friends do on Friday nights?",
    "What time is it? 5:45",
    "What time is it? 7:15",
    "What time is it? 8:55",
    "What time is it? 3:00",
    "What time is it? 2:10",
    "Does your father need to get up early on Sundays?",
    "Are you an only child?",
    "Is your family big?",
    "Where are your parents now?",
    "Is your favorite singer from The United States?",
    "What are you wearing now?",
    "Is your teacher wearing jeans today?",
    "Who is wearing a belt in your classroom?",
    "Where does your mom shop for housewares?",
    "When do people wear white in Brazil?",
    "When does your brother/sister have English classes?",
    "What time does your best friend go to school?",
    "What time do you take a shower?",
    "What time does your boyfriend/girlfriend surf the net?",
    "What do you eat for lunch?",
    "Does a slice of pizza have a lot of calories?",
    "What do your parents have for dinner?",
    "When is Father???s Day in the US?",
    "Does your best friend like to go to the movies?",
    "Do you and your parents have dinner at home every day?",
    "Is your teacher using a tablet now?",
    "Are you watching your favorite TV show now?",
    "Who is exercising now?",
    "Do you shop for clothes at an outlet mall?",
    "Does your best friend study English at Fisk?",
    "Does your mom have salad for dinner every day?",
    "Who doesn???t like fi sh in your family?",
    "Do boys need to wear a suit and a tie to go to a prom?",
    "What do girls wear to go to a wedding?",
    "Do you post messages on the Internet every day?",
    "What size are you?",
    "What does your grandma do in the morning?",
    "Do you have a twin brother/sister?",
    "Do you make your breakfast?",
    "What don???t you need to do on Sundays?",
    "What do you like to have for breakfast?",
    "Where does your mom shop for clothes?",
    "When do you get up late?",
    "Do your friends go to the gym in the evening?"
]

const activeTurn = 'active-turn';

var bufferPoints = 0;
var turn = 1;

function willResultZero(teamScore) {
    return (teamScore - bufferPoints) < 0;
}

function changeTurn() {
    teamOneScoreBoard.innerHTML = teamOneScore;
    teamTwoScoreBoard.innerHTML = teamTwoScore;

    if (teamOneScore >= 21) {
        alert('Team One Wins!');
        location.reload();
    }
    if (teamTwoScore >= 21) {
        alert('Team Two Wins!');
        location.reload();
    }

    if (turn == 1) {
        teamOneSide.classList.remove(activeTurn);
        teamTwoSide.classList.add(activeTurn);

        teamTwoDraw.disabled = false;

        teamOneCard.classList.add('invisible');

        turn = 2;
    } else if (turn == 2) {
        teamOneSide.classList.add(activeTurn);
        teamTwoSide.classList.remove(activeTurn);

        teamOneDraw.disabled = false;

        teamTwoCard.classList.add('invisible');

        turn = 1;
    }
}

function create(teamCard) {
    bufferPoints = Math.floor(Math.random() * 4) + 1;

    teamCard.classList.remove('invisible');
}

function getRandomQuestion() {
    position = Math.round(Math.random() * questions.length);

    return questions[position - 1];
}

teamOneDraw.addEventListener('click', () => {
    teamOneDraw.disabled = true;

    create(teamOneCard);

    teamOneQuestion.innerHTML = getRandomQuestion();
    teamOnePoints.innerHTML = bufferPoints;
})
teamOneCorrect.addEventListener('click', () => {
    teamOneScore += bufferPoints;

    changeTurn();
})
teamOneWrong.addEventListener('click', () => {
    if (willResultZero(teamOneScore)) {
        teamOneScore = 0;
    } else {
        teamOneScore -= bufferPoints;
    }

    changeTurn();
})

teamTwoDraw.addEventListener('click', () => {
    teamTwoDraw.disabled = true;

    create(teamTwoCard);

    teamTwoQuestion.innerHTML = getRandomQuestion();
    teamTwoPoints.innerHTML = bufferPoints;
})
teamTwoCorrect.addEventListener('click', () => {
    teamTwoScore += bufferPoints;

    changeTurn();
})
teamTwoWrong.addEventListener('click', () => {
    if (willResultZero(teamTwoScore)) {
        teamTwoScore = 0;
    } else {
        teamTwoScore -= bufferPoints;
    }
    changeTurn();
})