function handleLogin(event) {
    event.preventDefault(); // Prevents the default form submission

    // Get email and password values
    const email = document.getElementById('Email').value;
    const password = document.getElementById('password').value;

    //Validation
    if (email === 'bapnim4@outlook.com' && password === 'njeri1969') {
        // Redirect to the next page
        window.location.href = 'homepage.html'; // Change to your desired page
    } else {
        alert('Invalid login! Please try again.');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggleBtn');
    const sidebar = document.getElementById('sidebar');
    const menuItems = document.querySelectorAll('.menu-item');
    const menuList = document.getElementById('menu-list');

    // Function to toggle the sidebar's collapsed state
    const toggleSidebar = () => {
        sidebar.classList.toggle('collapsed');
        
        // Adjust menu item visibility and toggle button icon
        if (sidebar.classList.contains('collapsed')) {
            toggleBtn.innerText = '☰'; // Collapse icon
            menuList.style.display = 'none';
        } else {
            toggleBtn.innerText = '✖'; // Expand icon
            menuList.style.display = 'block';
        }
    };

    // Event listener for toggle button click
    toggleBtn.addEventListener('click', toggleSidebar);

    // Attach click event to each menu item for showing content
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            const targetId = item.getAttribute('data-target');
            console.log(`Clicked on menu item with target: ${targetId}`); 

            // Hide all menu contents
            document.querySelectorAll('.menu-content').forEach(content => {
                content.style.display = 'none';
            });

            // Show the selected menu content
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.style.display = 'block';
                console.log(`Displaying content for: ${targetId}`); 
            } else {
                console.error(`No content found for ID: ${targetId}`);
            }
        });
    });
});