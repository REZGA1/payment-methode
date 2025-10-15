const radios = document.querySelectorAll('input[name="method"]');
const ibanSection = document.getElementById("ibanSection");
const payseraSection = document.getElementById("payseraSection");
const ccpSection = document.getElementById("ccpSection");

const toggleBtn = document.getElementById("toggleBtn");
const details = document.getElementById("details");
const copyBtn = document.getElementById("copyBtn");
const ccpNumber = document.getElementById("ccpNumber");

// زر إظهار تفاصيل IBAN
toggleBtn.addEventListener("click", () => {
  const isVisible = details.classList.toggle("show");
  toggleBtn.textContent = isVisible ? "Hide Details" : "Show Details";
});

// تبديل بين IBAN / Paysera / CCP
radios.forEach(radio => {
  radio.addEventListener("change", (e) => {
    const value = e.target.value;
    ibanSection.classList.add("hidden");
    payseraSection.classList.add("hidden");
    ccpSection.classList.add("hidden");

    if (value === "iban") ibanSection.classList.remove("hidden");
    else if (value === "paysera") payseraSection.classList.remove("hidden");
    else ccpSection.classList.remove("hidden");
  });
});

// زر النسخ في CCP
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(ccpNumber.textContent);
  copyBtn.textContent = "Copied!";
  setTimeout(() => {
    copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i> Copy';
  }, 2000);
});
