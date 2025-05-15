  (() => {
    // List of slime image pairs (idle and flash)
    const pairs = [
      { idle: "slime/Slime001.gif", flash: "slime/Slime002.gif" },
      { idle: "slime/Slime003.png", flash: "slime/Slime004.png" },
      { idle: "slime/Slime005.gif", flash: "slime/Slime006.gif" },
      { idle: "slime/Slime007.gif", flash: "slime/Slime008.gif" }
      // Add more if needed
    ];

    const flashDuration = 500; // Duration of flash image in ms
    let count = 0;

    const image = document.getElementById("clickableImage");
    const counter = document.getElementById("counter");

    function currentPair(clickCount) {
      const index = Math.min(Math.floor(clickCount / 100), pairs.length - 1);
      return pairs[index];
    }

    function handleClick() {
      const beforeClickPair = currentPair(count);
      image.src = beforeClickPair.flash;

      count++;
      counter.textContent = count;

      setTimeout(() => {
        const afterClickPair = currentPair(count);
        image.src = afterClickPair.idle;
      }, flashDuration);
    }

    image.addEventListener("click", handleClick);
  })();