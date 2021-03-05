const contactsUl = document.querySelector(".contacts");
const addBtn = document.querySelector(".add");
const popup = document.querySelector(".popup");
const addBtnOuter = document.querySelector(".add-contact");
const parentContainer = document.querySelector(".container");
const topEl = document.querySelector(".top");
const contactNameInput = document.querySelector(".contact-name");
const contactPhoneInput = document.querySelector(".contact-phone");

addBtnOuter.addEventListener("click", () => {
  showPopup();
});

addBtn.addEventListener("click", () => {
  closePopup();
  createContact();
});

function showPopup() {
  popup.classList.remove("hidden");
  parentContainer.classList.add("hidden");
  topEl.classList.add("hidden");
}

function closePopup() {
  popup.classList.add("hidden");
  parentContainer.classList.remove("hidden");
  topEl.classList.remove("hidden");
}

function createContact() {
  const contactDiv = document.createElement("div");
  contactsUl.appendChild(contactDiv);
  contactDiv.classList.add("contact");

  const contactNameLi = document.createElement("li");
  contactNameLi.classList.add("name");
  contactNameLi.innerText = contactNameInput.value;
  contactDiv.appendChild(contactNameLi);

  const contactPhoneLi = document.createElement("li");
  contactPhoneLi.classList.add("phone");
  contactPhoneLi.innerText = contactPhoneInput.value;
  contactDiv.appendChild(contactPhoneLi);
}
