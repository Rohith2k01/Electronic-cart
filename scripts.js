// Add an event listener to the form with id 'enquiryForm' to handle form submission
document.getElementById('enquiryForm').addEventListener('submit', function(event) {
    event.preventDefault();     

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('All fields are required.');
        return;
    }

    alert('Form submitted successfully.');
    this.reset();
});
// Function to search products based on user input in the search bar
function searchProducts() {
    const input = document.getElementById('searchInput').value.toLowerCase();     // Get the search input value, convert it to lowercase for case-insensitive matching
    const products = document.getElementsByClassName('product');  // Get all elements with the class 'product', representing product items on the page
    

    for (let i = 0; i < products.length; i++) {  // Loop through each product element
        const productName = products[i].getAttribute('data-name').toLowerCase();  // Get the 'data-name' attribute of the current product and convert it to lowercase
        if (productName.includes(input)) {  // Check if the product name includes the search input string
            products[i].style.display = "";    // If it matches, display the produc
        } else {
            products[i].style.display = "none";   // If it doesn't match, hide the product
        }
    }
}
// Function to toggle the 'Submit' button's disabled state based on the checkbox status
function toggleSubmitButton() {
    const checkbox = document.getElementById('agreeCheckbox');  // Get the checkbox element with id 'agreeCheckbox'
    const submitButton = document.getElementById('submitButton');  // Get the submit button element with id 'submitButton'

    submitButton.disabled = !checkbox.checked;
}

function submitForm() {  // Function to handle form submission after agreeing to the terms and conditions
    alert('Thank you for agreeing to the terms and conditions!');
    window.location.href = 'products.html';  // Redirect the user to the 'products.html' page
}

