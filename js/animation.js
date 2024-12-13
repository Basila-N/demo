 // Select all filter menu items
 const filterMenuItems = document.querySelectorAll('.filters_menu li');
 const filterItems = document.querySelectorAll('.grid .col-lg-4');

 // Add click event to each filter menu item
 filterMenuItems.forEach(menuItem => {
   menuItem.addEventListener('click', function () {
     // Remove 'active' class from all menu items
     filterMenuItems.forEach(item => item.classList.remove('active'));
     // Add 'active' class to the clicked menu item
     this.classList.add('active');

     // Get filter value
     const filterValue = this.getAttribute('data-filter');

     // Loop through all items and show/hide based on filter value
     filterItems.forEach(item => {
       if (filterValue === '*' || item.classList.contains(filterValue.substring(1))) {
         item.style.display = 'block'; // Show the item
       } else {
         item.style.display = 'none'; // Hide the item
       }
     });
   });
 });