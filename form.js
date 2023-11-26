document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector('.submit button');
    submitButton.addEventListener('click', async () => {
        const firstName = document.querySelector('.left1x input').value;
        const lastName = document.querySelector('.right1x input').value;
        const email = document.querySelector('.emailx input').value;
        const message = document.querySelector('.leavex input').value;

        const data = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            message: message
        };

        try {
            const response = await fetch('https://northwind.vercel.app/api/categories', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const jsonResponse = await response.json();
                console.log('Response:', jsonResponse);

            } else {
                console.log('Network response was not ok.');

            }
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    });
});

// fu