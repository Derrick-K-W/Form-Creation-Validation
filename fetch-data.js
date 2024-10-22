// Define an asynchronous function to fetch and display user data
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Select the container where the data will be displayed
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create an unordered list to hold user names
        const userList = document.createElement('ul');

        // Loop through the users and create list items for each user's name
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the list to the data container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Clear the loading message and display an error message
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Run the function when the DOM content has fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
