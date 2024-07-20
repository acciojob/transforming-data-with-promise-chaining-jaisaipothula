// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('ip');
    const output = document.getElementById('output');
    const btn = document.getElementById('btn');

    // Event listener for button click
    btn.addEventListener('click', function() {
        const inputValue = parseInt(input.value);

        // Validate input
        if (isNaN(inputValue)) {
            output.textContent = 'Please enter a valid number.';
            return;
        }

        // Step 1: Create a promise that resolves after 2 seconds with the input number
        const step1Promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(inputValue);
            }, 2000);
        });

        // Print initial message
        output.textContent = 'Calculating...';

        // Step 2: Chain the first promise to print the initial result
        step1Promise.then((result) => {
            output.textContent = `Result: ${result}`;
            return result;
        })
        // Step 3: Chain a second promise that multiplies the number by 2
        .then((result) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(result * 2);
                }, 1000);
            });
        })
        .then((result) => {
            output.textContent = `Result: ${result}`;
            return result;
        })
        // Step 4: Chain a third promise that subtracts 3 from the number
        .then((result) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(result - 3);
                }, 1000);
            });
        })
        .then((result) => {
            output.textContent = `Result: ${result}`;
            return result;
        })
        // Step 5: Chain a fourth promise that divides the number by 2
        .then((result) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(result / 2);
                }, 1000);
            });
        })
        .then((result) => {
            output.textContent = `Result: ${result}`;
            return result;
        })
        // Step 6: Chain a fifth promise that adds 10 to the number
        .then((result) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(result + 10);
                }, 1000);
            });
        })
        .then((result) => {
            // Final result
            output.textContent = `Final Result: ${result}`;
        })
        // Handle errors or rejections
        .catch((error) => {
            console.error('Error:', error);
            output.textContent = 'An error occurred. Please try again.';
        });
    });
});
