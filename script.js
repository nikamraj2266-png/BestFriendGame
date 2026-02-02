const messageBox = document.getElementById('message-box');
const optionsBox = document.getElementById('options');

let step = 0;

// Define game steps
const gameSteps = [
  {
    message: "Chalo Radhika ji ek game khelte hai...",
    options: [
      { text: "Open.. Chalo khelte hai", nextMsg: "Maja aaayega 😄", nextStep: 1 },
      { text: "Naahi khelna", nextMsg: "Yaree yaar please khelte hai na", nextStep: 0 }
    ]
  },
  {
    message: "Ab aapko 2-3 questions poochunga...",
    options: [
      { text: "Aage badho", nextMsg: "Pehla question: Kya aap mujhe apna best friend maanti hai?", nextStep: 2 }
    ]
  },
  {
    message: "Kya aap mujhe apna best friend maanti hai?",
    options: [
      { text: "Ha manti hai", nextMsg: "Aap ka jawab sahi hai Radhika ji 😊", correct: true, nextStep: 3 },
      { text: "Ji nahi", nextMsg: "Mujhe aapse aisi ummid nahi thi 🥲", correct: false, nextStep: 3 },
      { text: "Bahut maanti hai", nextMsg: "Mujhe aapse aisi ummid nahi thi 🥲", correct: false, nextStep: 3 },
      { text: "Kabhi bhi nahi", nextMsg: "Mujhe aapse aisi ummid nahi thi 🥲", correct: false, nextStep: 3 },
      { text: "Aajtak nahi", nextMsg: "Mujhe aapse aisi ummid nahi thi 🥲", correct: false, nextStep: 3 }
    ]
  },
  {
    message: "Aaj farewell mai pet bhar kr khana khaya na?",
    options: [
      { text: "No", nextMsg: "Sach mai 🥲", correct: false, nextStep: 4 },
      { text: "Ha kha liya", nextMsg: "Okey okey 😅", correct: true, nextStep: 4 },
      { text: "Khana accha nahi tha", nextMsg: "Sach mai 🥲", correct: false, nextStep: 4 },
      { text: "Pet fatne tak khaya", nextMsg: "Okey okey 😅", correct: true, nextStep: 4 }
    ]
  },
  {
    message: "Dopahar mai mujhse baat krne ka mood nahi tha kya?",
    options: [
      { text: "Ha mood tha", nextMsg: "Sach mai 🥲", correct: false, nextStep: 5 },
      { text: "Thoda mood nahi tha", nextMsg: "Sach mai 🥲", correct: false, nextStep: 5 },
      { text: "Nahi mood tha", nextMsg: "Aap ka jawab sahi hai 😊", correct: true, nextStep: 5 }
    ]
  },
  {
    message: "Result aayega...",
    options: [
      { text: "Dekho result", nextMsg: "", nextStep: null }
    ]
  }
];

// Track correct answers
let correctCount = 0;

function showStep(stepIndex) {
  optionsBox.innerHTML = '';
  const stepData = gameSteps[stepIndex];
  messageBox.innerText = stepData.message;

  stepData.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.innerText = opt.text;
    btn.onclick = () => {
      messageBox.innerText = opt.nextMsg;
      if(opt.correct) correctCount++;
      if(opt.nextStep !== null){
        const nextBtn = document.createElement('button');
        nextBtn.innerText = "Aage badho";
        nextBtn.onclick = () => {
          if(stepIndex === 5){ // final step
            if(correctCount === 3) messageBox.innerText = "Aap to bahut hoshiyaar ho Radhika ji 😅";
            else messageBox.innerText = "Better try next time Radhu 😅";
            optionsBox.innerHTML = '';
          } else {
            showStep(opt.nextStep);
          }
        }
        optionsBox.innerHTML = '';
        optionsBox.appendChild(nextBtn);
      }
    };
    optionsBox.appendChild(btn);
  });
}

// Start game
showStep(step);
