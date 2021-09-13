const roles = [
    "Princess Daisy beating you in Mario Kart", "up way past my bedtime redoing my neocities site again", "an illustrator studying web development", "an Online girl with a Personality", "exploring possibilities of presentation and communication on the web", "ready to create value for your company!", "just here to have fun", "now taking commissions"
];
const btn = document.getElementById("btn");
const role = document.querySelector(".role");


function getRandomNumber() {
  return Math.floor(Math.random() * roles.length);
}

function rollDescription() {
  const randomNumber = getRandomNumber();
  role.textContent = roles[randomNumber]; 
  console.log('test');
}

rollDescription();

btn.addEventListener("click", function () {
  rollDescription();
});