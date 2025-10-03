// Step 1: Define an async function
async function fetchUserData() {
    // Step 2: Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 3: Select the container where we’ll put the data
    const dataContainer = document.getElementById('api-data');

    try {
        // Step 4: Fetch data
        const response = await fetch(apiUrl);

        // Check if response is ok (status 200–299)
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const users = await response.json();

        // Step 5: Clear the loading message
        dataContainer.innerHTML = '';

        // Step 6: Create a <ul> to hold users
        const userList = document.createElement('ul');

        // Step 7: Loop through users and create list items
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });

        // Step 8: Append the <ul> to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Step 9: Handle errors
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error("Error fetching data:", error);
    }
}

// Step 10: Run fetchUserData after DOM loads
document.addEventListener('DOMContentLoaded', fetchUserData);
