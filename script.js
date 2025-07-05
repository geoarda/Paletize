function generatePalette() {
  const palette = document.getElementById("palette");
  palette.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    const color = getRandomColor();
    const colorDiv = document.createElement("div");
    colorDiv.style.backgroundColor = color;
    colorDiv.textContent = color;
    colorDiv.onclick = () => {
      navigator.clipboard.writeText(color);
      alert(color + " kopyalandı!");
    };
    palette.appendChild(colorDiv);
  }
}

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
}

function downloadPalette() {
  const colors = Array.from(document.querySelectorAll("#palette div")).map(div => div.textContent);
  const blob = new Blob([JSON.stringify(colors, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "palette.json";
  link.click();
}

window.onload = generatePalette;