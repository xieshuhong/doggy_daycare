// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.


let submit_button = document.getElementById('submit-button');
let page_content = document.getElementById('contact-page');
let p_str = '<p>Thank you for your message</p>';
submit_button.addEventListener('click', changeContent);

function changeContent() {
  page_content.innerHTML = p_str;
  page_content.style.fontSize = "24px";
}








