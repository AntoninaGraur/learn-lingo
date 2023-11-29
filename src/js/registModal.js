

export const backdrop = document.querySelector('.regist-backdrop');
export const modal = document.querySelector('.regist-form-container');
export const openModal = document.querySelector('.registration-btn');
export const closeBtn = document.querySelector('.regist-close-btn');


openModal.addEventListener("click", () => backdrop.classList.add("active"));