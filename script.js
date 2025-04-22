const buttons = document.querySelectorAll('.emoji');
const feedbackBox = document.createElement('div');
feedbackBox.classList.add('feedback-box');
document.body.appendChild(feedbackBox);

const feedback = {
  happy: "Yay! Spread that positivity today! 🌈",
  calm: "Peaceful minds are powerful minds 🧘",
  neutral: "Balance is good. Keep going! ⚖️",
  sad: "It's okay to feel down. Take a break 🌧️",
  crying: "Sending virtual hugs 🤗 You're not alone."
};

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const mood = btn.dataset.mood;
    feedbackBox.textContent = feedback[mood];
    feedbackBox.classList.add('show');
  });
});
