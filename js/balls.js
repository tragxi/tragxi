const blueColors = ["#6ac5fe", "#8fd3fe", "#b5e2ff", "#daf0ff", "#45b6fe"];
const numBalls = 50;
const balls = [];

// Create a full-page container for the balls
const container = document.createElement("div");
container.classList.add("balls-container");
document.body.append(container);

for (let i = 0; i < numBalls; i++) {
  const randomBlueColor = blueColors[Math.floor(Math.random() * blueColors.length)];
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = randomBlueColor;
  ball.style.left = `${Math.floor(Math.random() * 90)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 200)}vh`;
  ball.style.transform = `scale(${Math.random() * 3})`;
  ball.style.width = `${Math.random() * 3}em`;
  ball.style.height = ball.style.width;
  ball.style.zIndex = -100;

  balls.push(ball);
  container.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000,
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});
