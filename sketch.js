var checkedS, checkedH, checkedM;


function preload() {
  csound = loadSound("correct.mp3");
  isound = loadSound("incorrect.mp3");
  wsound = loadSound("win.wav")
}
function setup() {
  createCanvas(1100, 1100)
  welcomeMessage = createElement("h1", "The Jupiter Quiz")
  welcomeMessage.position(0, 0);
  
  nameMessage = createElement("h2", "By Hayden")
  nameMessage.position(0, 50);

  startButton = createButton("Start the quiz!")
  startButton.position(0, 100);
  startButton.mousePressed(start);

  q1iMessage = createElement("h2", "Question 1 incorrect!")
  q1iMessage.position(-500, -500)

  bthsButton = createButton("Back to home")
  bthsButton.position(-500, -500)
  bthsButton.mousePressed(bths)

  question1Message = createElement("h2", "Question 1: What is The Great Red Dot on Jupiter?")
  question1Message.position(-500, -500);

  q1a1 = createButton("A storm made of only hydrogen")
  q1a1.position(-500, -500);
  q1a1.mousePressed(q1i)

  q1a2 = createButton("A storm made of only helium")
  q1a2.position(-500, -500);
  q1a2.mousePressed(q1i)

  q1a3 = createButton("A storm made of hydrogen and helium")
  q1a3.position(-500, -500);
  q1a3.mousePressed(q1c)

  q1a4 = createButton("A decoration")
  q1a4.position(-500, -500)
  q1a4.mousePressed(q1i)

  q1cMessage = createElement("h2", "Question 1 correct!")
  q1cMessage.position(-500, -500)

  q1NextButton = createButton("Go to question 2")
  q1NextButton.position(-500, -500)
  q1NextButton.mousePressed(q1Next)

  question2Message = createElement("h2", "Question 2: How many Earth years does it take for Jupiter to orbit once around the sun?")
  question2Message.position(-500, -500);

  q2a1 = createInput();
  q2a1.position(-500, -500);
  q2a1.input(q2ea)

  q2a1M = createElement("h3", "years");
  q2a1M.position(-500, -500)

  q2a1B = createButton("Submit answer");
  q2a1B.position(-500, -500);
  q2a1B.mousePressed(q2ca)

  q2cMessage = createElement("h2", "Question 2 correct!")
  q2cMessage.position(-500, -500);

  q2iMessage = createElement("h2", "Question 2 incorrect!")
  q2iMessage.position(-500, -500)

  q2NextButton = createButton("Go to question 3")
  q2NextButton.position(-500, -500);
  q2NextButton.mousePressed(q2Next);

  question3Message = createElement("h2", "Question 3: Approximately how many hours, minutes and seconds are there in one day of Jupiter?")
  question3Message.position(-500, -500);

  q3aH = createInput();
  q3aH.position(-500, -500);
  q3aH.input(q3Hea)

  q3aHM = createElement("h3", "hours, ")
  q3aHM.position(-500, -500)

  q3aM = createInput();
  q3aM.position(-500, -500);
  q3aM.input(q3Mea)

  q3aMM = createElement("h3", "minutes and ")
  q3aMM.position(-500, -500);

  q3aS = createInput();
  q3aS.position(-500, -500);
  q3aS.input(q3Sea)
  
  q3aSM = createElement("h3", "seconds.")
  q3aSM.position(-500, -500);

  q3aB = createButton("Submit answer");
  q3aB.position(-500, -500);
  q3aB.mousePressed(q3ca)

  q3iMessage = createElement("h2", "Question 3 incorrect!")
  q3iMessage.position(-500, -500);

  q3cMessage = createElement("h2", "Question 3 correct!");
  q3cMessage.position(-500, -500);

  q3NextButton = createButton("Go to question 4");
  q3NextButton.position(-500, -500);
  q3NextButton.mousePressed(q3Next)

  question4Message = createElement("h2", "What is the average temperature of Jupiter?")
  question4Message.position(-500, -500);

  q4a1 = createInput();
  q4a1.position(-500, -500);
  q4a1.input(q4ea)

  q4a1M = createElement("h3", "°C");
  q4a1M.position(-500, -500);

  q4aB = createButton("Submit answer");
  q4aB.position(-500, -500);
  q4aB.mousePressed(q4ca)

  q4iMessage = createElement("h2", "Question 4 incorrect!");
  q4iMessage.position(-500, -500);

  winMessage = createElement("h2", "Good job, you won!")
  winMessage.position(-500, -500);
}

function draw() {
  background(200);
}

function start() { 
  welcomeMessage.position(-500, -500);
  nameMessage.position(-500, -500);
  startButton.position(-500, -500);

  question1Message.position(0, 0);
  q1a1.position(0, 50);
  q1a2.position(0, 100);
  q1a3.position(0, 150);
  q1a4.position(0, 200)
}

function q1i() {
  q1a1.position(-500, -500);
  q1a2.position(-500, -500);
  q1a3.position(-500, -500);
  q1a4.position(-500, -500);
  question1Message.position(-500, -500);
  q1iMessage.position(0, 0);
  bthsButton.position(0, 50);
  isound.play();
}

function bths() {
  welcomeMessage.position(0, 0);
  nameMessage.position(0, 50);
  startButton.position(0, 100);
  bthsButton.position(-500, 500);
  q1iMessage.position(-500, -500);
  q2iMessage.position(-500, -500);
  q3iMessage.position(-500, -500);
  /*q4iMessage.position(-500, -500);*/
  q2a = '';
  q2a1.value('');
  q3H = '';
  q3aH.value('');
  q3M = '';
  q3aM.value('');
  q3S = '';
  q3aS.value('');
  q4A = '';
  q4a1.value('');
}l

function q1c() {
  question1Message.position(-500, -500);
  q1a1.position(-500, -500);
  q1a2.position(-500, -500);
  q1a3.position(-500, -500);
  q1a4.position(-500, -500);
  q1cMessage.position(0, 0);
  q1NextButton.position(0, 50)
  csound.play();
}

function q1Next() {
  q1cMessage.position(-500, -500);
  q1NextButton.position(-500, -500);
  question2Message.position(0, 0);
  q2a1.position(0, 50);
  q2a1M.position(150, 30);
}

function q2ca() {
  if (q2a == '11.8618') {
    q2c();
  }

  else {
    q2i();
  }
}

function q2ea() {
  q2a = this.value();
  q2a1B.position(0, 100);
}

function q2c() {
  question2Message.position(-500, -500);
  q2a1.position(-500, -500);
  q2a1M.position(-500, -500);
  q2a1B.position(-500, -500);
  q2cMessage.position(0, 0);
  q2NextButton.position(0, 50);
  csound.play();
}

function q2i() {
  question2Message.position(-500, -500);
  q2a1.position(-500, -500);
  q2a1M.position(-500, -500);
  q2a1B.position(-500, -500);
  q2iMessage.position(0, 0);
  bthsButton.position(0, 50);
  isound.play();
}

function q2Next() {
  q2cMessage.position( -500, -500);
  q2NextButton.position(-500, -500);
  question3Message.position(0, 0);
  q3aH.position(0, 50);
  q3aHM.position(150, 30);
  q3aM.position(215, 50);
  q3aMM.position(365, 30);
  q3aS.position(475, 50);
  q3aSM.position(625, 30);
}

function q3Hea() {
  q3H = this.value()
  checkedH = 1;
  if (checkedM == 1 && checkedS == 1) {
    q3aB.position(0, 100);
  }
  console.log(checkedH)
}

function q3Mea() {
  q3M = this.value();
  checkedM = 1;
  if (checkedH == 1 && checkedS == 1) {
    q3aB.position(0, 100);
  }
  console.log(checkedM)
}

function q3Sea() {
  q3S = this.value();
  checkedS = 1;
  if (checkedH == 1 && checkedM == 1) {
    q3aB.position(0, 100);
  }
  console.log(checkedS)
}

function q3ca() {
  if ((q3H == '9' && q3M == '55') && q3S == '30') {
    q3c();
  }
  else {
    q3i();
  }
}

function q3c() {
    question3Message.position(-500, -500);
    q3aB.position(-500, -500);
    q3aH.position(-500, -500);
    q3aHM.position(-500, -500);
    q3aM.position(-500, -500);
    q3aMM.position(-500, -500);
    q3aS.position(-500, -500);
    q3aSM.position(-500, -500);
    q3cMessage.position(0, 0);
    q3NextButton.position(0, 50);
    checkedH = 0;
    checkedM = 0;
    checkedS = 0;
    csound.play();

}

function q3i() {
  question3Message.position(-500, -500);
  q3aB.position(-500, -500);
  q3aH.position(-500, -500);
  q3aHM.position(-500, -500);
  q3aM.position(-500, -500);
  q3aMM.position(-500, -500);
  q3aS.position(-500, -500);
  q3aSM.position(-500, -500);
  q3iMessage.position(0, 0);
  bthsButton.position(0, 50);
  checkedH = 0;
  checkedM = 0;
  checkedS = 0;
  isound.play();
}

function q3Next() {
  q3cMessage.position(-500, -500);
  q3NextButton.position(-500, -500);
  question4Message.position(0, 0);
  q4a1.position(0, 50);
  q4a1M.position(150, 30);
  
}

function q4ea() {
  q4A = this.value();
  q4aB.position(0, 100);
}

function q4ca() {
  if (q4A == '-150') {
    q4c();
  }  

  else {
    q4i();
  }
}

function q4i() {
  question4Message.position(-500, -500);
  q4a1.position(-500, -500);
  q4a1M.position(-500, -500);
  q4aB.position(-500, -500);
  isound.play();
}

function q4c() {
  question4Message.position(-500, -500);
  q4a1.position(-500, -500);
  q4a1M.position(-500, -500);
  q4aB.position(-500, -500);
  winMessage.position(0, 0);
  wsound.play();
}