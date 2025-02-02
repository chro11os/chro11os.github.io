let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");
let gifContainer = document.getElementById("gifContainer");
let noGif = document.getElementById("noGif");
let videoContainer = document.getElementById("videoContainer");
let loveVideo = document.getElementById("loveVideo");

let yesSize = 20;  // Initial font size
let noSize = 20;   // Initial font size
let noOpacity = 1; // Initial opacity

noBtn.addEventListener("click", () => {
    // Make the "Yes" button bigger
    yesSize += 10;
    yesBtn.style.fontSize = yesSize + "px";
    yesBtn.style.padding = yesSize / 2 + "px";
    
    // Make the "No" button smaller
    noSize -= 3;
    noOpacity -= 0.1;
    noBtn.style.fontSize = noSize + "px";
    noBtn.style.padding = noSize / 2 + "px";
    noBtn.style.opacity = noOpacity;

    // Show GIF when "No" is clicked
    gifContainer.style.display = "block";

    // Hide the "No" button when too small
    if (noSize <= 5) {
        noBtn.style.display = "none";
    }
});

yesBtn.addEventListener("click", () => {
    // Expand the "Yes" button to full screen
    yesBtn.style.position = "fixed";
    yesBtn.style.top = "50%";
    yesBtn.style.left = "50%";
    yesBtn.style.transform = "translate(-50%, -50%)";
    yesBtn.style.fontSize = "50px";
    yesBtn.style.padding = "50px 100px";
    yesBtn.innerText = "Yay! 🎉";

    // Show video
    videoContainer.style.display = "block";
    loveVideo.play();
});
