// // Mock function to get user's country
// function getUserCountry() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             // Randomly return either 'US' or 'DE' for this example
//             resolve(Math.random() > 0.5 ? 'NG' : 'NG');
//         }, 1000);
//     });
// }

// // Function to handle payment
// function handlePayment(method) {
//     alert(`Processing ${method} payment for fuel`);
// }

// // Main function to set up the page
// async function setupPaymentPage() {
//     const locationElement = document.getElementById('location');
//     const paymentButton = document.getElementById('paymentButton');

//     try {
//         const country = await getUserCountry();
//         locationElement.textContent = `Your location: ${country}`;

//         if (country === 'NG') {
//             paymentButton.textContent = 'Fuel Now with Fiat';
//             paymentButton.onclick = () => handlePayment('fiat');
//         } else if (country === 'NG') {
//             paymentButton.textContent = 'Fuel Now with Crypto';
//             paymentButton.onclick = () => handlePayment('crypto');
//         }

//         paymentButton.style.display = 'block';
//     } catch (error) {
//         console.error('Error fetching location:', error);
//         locationElement.textContent = 'Error loading location';
//     }
// }

// // Run the setup when the page loads
// document.addEventListener('DOMContentLoaded', setupPaymentPage);


















// Mock function to get user's country
function getUserCountry() {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Randomly return either 'US' or 'DE' for this example
            resolve(Math.random() > 0.5 ? 'NG' : 'NG');
        }, 1000);
    });
}

// Function to handle payment
function handlePayment(method) {
    alert(`click OK to continue`);
    // Redirect to a different page based on the payment method
    if (method === 'fiat') {
        window.location.href = 'paystack.html'; // Replace with your actual URL
    } else if (method === 'crypto') {
        window.location.href = 'https://example.com/crypto-payment'; // Replace with your actual URL
    }
}

// Main function to set up the page
async function setupPaymentPage() {
    const locationElement = document.getElementById('location');
    const paymentButton = document.getElementById('paymentButton');

    try {
        const country = await getUserCountry();
        locationElement.textContent = `Your location: ${country}`;

        if (country === 'NG') {
            paymentButton.textContent = 'Fuel Now with Fiat';
            paymentButton.onclick = () => handlePayment('fiat');
        } else if (country === 'NG') {
            paymentButton.textContent = 'Fuel Now with Crypto';
            paymentButton.onclick = () => handlePayment('crypto');
        }

        paymentButton.style.display = 'block';
    } catch (error) {
        console.error('Error fetching location:', error);
        locationElement.textContent = 'Error loading location';
    }
}

// Run the setup when the page loads
document.addEventListener('DOMContentLoaded', setupPaymentPage);
