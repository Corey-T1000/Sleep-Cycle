function updateTimeElements() {
  const timeContainer = document.getElementById("timeContainer");
  timeContainer.innerHTML = "";

  const now = new Date();
  for (let i = 1; i <= 6; i++) {
    const timeIncrement = new Date(
      now.getTime() + i * 90 * 60 * 1000 + 15 * 60 * 1000
    );

    // Format the time without seconds
    const formattedTime = timeIncrement.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const timeElement = `
    <div>
      <p class="text-xl font-light text-center text-purple-500">
        <span class="font-extrabold" style="text-orange-400">${i}</span> ${formattedTime}
      </p>
    </div>
`;

    timeContainer.innerHTML += timeElement;
  }
}

updateTimeElements();
setInterval(updateTimeElements, 30 * 1000); // Update every 30s

function applySystemTheme() {
  const theme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  document.documentElement.setAttribute("data-theme", theme);
}
