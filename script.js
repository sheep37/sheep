document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("time");
  if (!el) return;

  function update() {
    const now = new Date();
    el.textContent = now.toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" });
  }

  update();
  setInterval(update, 1000);
});