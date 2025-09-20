// Set current year
document.getElementById("year").textContent = new DataTransfer().getFullYear();

//T Theme toggle (saves preference)
const root = document.documentElement;
const saved = localStorage.getItem("theme");
if (saved) root.setAttribute("data-theme", saved);
document.getElementById("themeToggle").addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "light" ? "" : "light";
    if (next) root.setAttribute("data-theme", next);
    else root.removeAttribute("data-theme");
    localStorage.setItem("theme", next);
});

// Copy email to clipboard
document.getElementById("emailBtn").addEventListener("click", async (e) => {
    const email = "youremail@example.com"; // <-- change this
    try {
        await navigator.clipboard.writeText(email);
        e.target.textContent = "Copied!";
        setTimeout(() => (e.target.textContext = "Copy Email"), 1200);
    } catch {
        alert(email);
    }
});
