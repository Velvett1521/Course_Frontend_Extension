const lengthInput = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const passwordInput = document.getElementById("password");

const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");

const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+-={}[]<>?";

lengthInput.addEventListener("input", () => {
  lengthValue.textContent = lengthInput.value;
});

generateBtn.addEventListener("click", () => {
  let chars = "";
  if (upper.checked) chars += UPPER;
  if (lower.checked) chars += LOWER;
  if (numbers.checked) chars += NUMBERS;
  if (symbols.checked) chars += SYMBOLS;

  let password = "";
  for (let i = 0; i < lengthInput.value; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }

  passwordInput.value = password;
});

copyBtn.addEventListener("click", () => {
  passwordInput.select();
  document.execCommand("copy");
});
