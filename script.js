const container = document.querySelector(".container");
const noButton = document.getElementById("noBtn");
const yesButton = document.getElementById("yesBtn");

const yesAudio = new Audio("audio/waku waku(MP3_160K)_1.mp3");
const noAudio = new Audio("audio/walk(MP3_160K).mp3");

noButton.addEventListener("click", () => {
  const containerRect = container.getBoundingClientRect();
  const buttonRect = noButton.getBoundingClientRect();

  const maxX = containerRect.width - buttonRect.width;
  const maxY = containerRect.height - buttonRect.height;

  const randomPositionX = Math.random() * maxX;
  const randomPositionY = Math.random() * maxY;

  const constrainedX = Math.min(Math.max(randomPositionX, 0), maxX);
  const constrainedY = Math.min(Math.max(randomPositionY, 0), maxY);

  noButton.style.transition = "transform 0.5s ease";
  noButton.style.transform = `translate(${constrainedX}px, ${constrainedY}px)`;


  noAudio.currentTime = 0;
  noAudio.play();
});


noAudio.addEventListener("ended", () => {
  noAudio.currentTime = 0;
});

yesButton.addEventListener("click", () => {

  yesAudio.play();


  Swal.fire({
    title: 'Mas love kita!',
    icon: 'success',
    confirmButtonText: 'Waku waku'
  });
});

const refreshButton = document.getElementById("refreshButton");

refreshButton.addEventListener("click", () => {
  location.reload();
});


