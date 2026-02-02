const messageBox = document.getElementById('message-box');
const optionsBox = document.getElementById('options');
const container = document.querySelector('.container');

let step = 0;
let correctCount = 0;

const gameSteps = [
  // Step 0 - Start
  {
    message: "Chalo Radhika ji ek game khelte hai....",
    options: [
      { text: "Open.. Chalo khelte hai", nextMsg: "Maja aaayega 😄", nextStep: 1 },
      { text: "Naahi khelna", nextMsg: "Yaree yaar please khelte hai na... par agar nahi to 'aap busy ho' 😅", nextStep: 0 }
    ]
  },
  // Step 1 - Intro
  {
    message: "Ab mai tumse 2-3 questions poochunga 😉",
    options: [
      { text: "Aage badho", nextMsg: "Pehla question: Kya aap mujhe apna best friend maanti hai..?", nextStep: 2 }
    ]
  },
  // Step 2 - Question 1
  {
    message: "Kya aap mujhe apna best friend maanti hai..?",
    options: [
      { text: "Ha manti hai", nextMsg: "Aap ka jawab sahi hai Radhika ji 😊", correct: true, nextStep: 3 },
      { text: "Ji nahi", nextMsg: "Mujhe aapse aisi ummid nahi thi 🥲", correct: false, nextStep: 3 },
      { text: "Kabhi bhi nahi", nextMsg: "Mujhe aapse aisi ummid nahi thi 🥲", correct: false, nextStep: 3 },
      { text: "Aajtak nahi", nextMsg: "Mujhe aapse aisi ummid nahi thi 🥲", correct: false, nextStep: 3 }
    ]
  },
  // Step 3 - Question 2
  {
    message: "Aaj farewell mai pet bhar kr khana khaya na..?",
    options: [
      { text: "No", nextMsg: "Sach mai 🥲", correct: false, nextStep: 4 },
      { text: "Ha kha liya", nextMsg: "Okey okey 😅", correct: true, nextStep: 4 },
      { text: "Khana accha nahi tha", nextMsg: "Sach mai 🥲", correct: false, nextStep: 4 },
      { text: "Pet fatne tak khaya", nextMsg: "Okey okey 😅", correct: true, nextStep: 4 }
    ]
  },
  // Step 4 - Question 3
  {
    message: "Dopahar mai mujhse baat krne ka mood nahi tha kya?",
    options: [
      { text: "mood nahi tha bolne ka", nextMsg: "Sach mai 🥲", correct: false, nextStep: 5 },
      { text: "mujhe baat hi nahi karni thi", nextMsg: "Sach mai 🥲", correct: false, nextStep: 5 },
      { text: "bolne ka mood tha", nextMsg: "Aap ka jawab sahi hai 😊", correct: true, nextStep: 5 },
      { text: "mai tumhe ignore kr rahi hu", nextMsg: "Sach mai 🥲", correct: false, nextStep: 5 }
    ]
  },
  // Step 5 - Result
  {
    message: "Result aayega...",
    options: [
      { text: "Dekho result", nextMsg: "", nextStep: null, isResult: true }
    ]
  }
];

function showStep(stepIndex) {
  optionsBox.innerHTML = '';
  const stepData = gameSteps[stepIndex];
  messageBox.innerText = stepData.message;

  stepData.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.innerText = opt.text;

    btn.onclick = () => {
      if(opt.isResult){ // Show result directly
        optionsBox.innerHTML = '';
        if(correctCount === 3){
          container.style.backgroundColor = "#d4edda"; // light green
          messageBox.innerText = "Aap to bahut hoshiyaar ho Radhika ji 😅";
        } else {
          container.style.backgroundColor = "#f8d7da"; // light red
          messageBox.innerText = "Better try next time Radhu 😅";
        }
        return; // stop further action
      }

      // Normal option clicked
      messageBox.innerText = opt.nextMsg;
      if(opt.correct) correctCount++;

      if(opt.nextStep !== null){
        const nextBtn = document.createElement('button');
        nextBtn.innerText = "Aage badho";
        nextBtn.onclick = () => {
          showStep(opt.nextStep);
        };
        optionsBox.innerHTML = '';
        optionsBox.appendChild(nextBtn);
      }
    };

    optionsBox.appendChild(btn);
  });
}

// Start the game
showStep(step);
