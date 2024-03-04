// My Profile Dropdown //

function toggleDropdownTwo() {
    var dropdown = document.getElementById("dropdownTwo");
    dropdown.classList.toggle("dropdown-one-show-two");
}

// Close the dropdown if the clicked area is outside of it //

window.onclick = function(event) {
    if (!event.target.matches('.overview-myprofile, .overview-myprofile *')) { 
        var dropdowns = document.getElementsByClassName("dropdown-myprofile");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('dropdown-one-show-two')) {
                openDropdown.classList.remove('dropdown-one-show-two');
            }
        }
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Get the dropdown icon
    var dropdownIcon = document.querySelector('.overview-card-details-icon');
    // Get the dropdown content
    var dropdownContent = document.querySelector('.dropdown-content');

    // Function to toggle dropdown display
    function toggleDropdown(event) {
        // Prevent click inside dropdown from closing it
        event.stopPropagation();
        
        // Toggle display
        if (dropdownContent.style.display === "none" || dropdownContent.style.display === '') {
            dropdownContent.style.display = "block";
        } else {
            dropdownContent.style.display = "none";
        }
    }

    // Clicking the dropdown icon toggles the dropdown
    dropdownIcon.addEventListener('click', toggleDropdown);

    // Clicking anywhere else on the page closes the dropdown
    document.addEventListener('click', function() {
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        }
    });

    // Prevent dropdown menu from closing when clicking inside it
    dropdownContent.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Event listener for hiding the popup when clicking outside of it
    document.addEventListener('click', function (e) {
        var popup = document.getElementById('deletePopup');
        var clickInsidePopup = popup.contains(e.target);
        var clickOnIcon = e.target.classList.contains('bx') || e.target.classList.contains('bx-trash');

        if (!clickInsidePopup && !clickOnIcon && popup.style.display === 'block') {
            hidePopup();
        }
    });
});

function showPopup(element) {
    var popup = document.getElementById("deletePopup");
    popup.style.display = "block";

    // Stop the propagation to prevent the document click listener from immediately hiding the popup
    event.stopPropagation();

    // Store the element to delete if confirmation is given
    popup.elementToDelete = element.closest('.overview-card');
}

function hidePopup() {
    var popup = document.getElementById("deletePopup");
    popup.style.display = "none";
}

function confirmDelete() {
    var popup = document.getElementById("deletePopup");
    if (popup.elementToDelete) {
        // Remove the overview card from the DOM
        popup.elementToDelete.remove();
    }
    hidePopup();
}
document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', function (e) {
        var popup = document.getElementById('deletePopup');
        var popupContent = document.querySelector('.popup-content'); // Get the popup content
        if (popup.style.display === 'block') {
            var clickInsidePopupContent = popupContent.contains(e.target);
            var clickOnIcon = e.target.classList.contains('bx') || e.target.classList.contains('bx-trash');

            if (!clickInsidePopupContent && !clickOnIcon) {
                hidePopup();
            }
        }
    });
});
// The rest of your JavaScript functions (showPopup, hidePopup, confirmDelete) can remain unchanged.

document.getElementById('searchInput').addEventListener('keyup', function() {
    let searchQuery = this.value.toLowerCase();
    let overviewCards = document.querySelectorAll('.overview-card');

    overviewCards.forEach(function(card) {
        let name = card.querySelector('.overview-card-name h2').textContent.toLowerCase();
        if (name.includes(searchQuery)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
});

document.addEventListener('click', function(event) {
    const searchInput = document.getElementById('searchInput');
    // Check if the click was outside the searchInput
    if (!searchInput.contains(event.target)) {
        searchInput.value = ''; // Clear the search input
        let overviewCards = document.querySelectorAll('.overview-card');
        // Show all cards
        overviewCards.forEach(function(card) {
            card.style.display = ''; // Reset any display changes made by search
        });
    }
});

document.getElementById('closeIcon').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput');
    searchInput.value = ''; // Clear the search input
    let overviewCards = document.querySelectorAll('.overview-card');
    // Show all cards
    overviewCards.forEach(function(card) {
        card.style.display = ''; // Reset any display changes made by search
    });
});

document.getElementById('searchInput').addEventListener('focus', function() {
    document.getElementById('closeIcon').style.display = 'block'; // Show the icon when input is focused
});

document.getElementById('searchInput').addEventListener('blur', function() {
    document.getElementById('closeIcon').style.display = 'none'; // Hide the icon when input loses focus
    this.value = ''; // Optionally clear input on blur
    // Reset the visibility of all cards as well, if desired
    document.querySelectorAll('.overview-card').forEach(function(card) {
        card.style.display = ''; // Show all cards when input loses focus
    });
});

// Handling click on the close icon to clear the input and hide itself
document.getElementById('closeIcon').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput');
    searchInput.value = ''; // Clear the search input
    this.style.display = 'none'; // Hide the close icon
    // Optionally, trigger the input's blur event manually to hide all cards
    searchInput.blur();

    // Show all cards
    document.querySelectorAll('.overview-card').forEach(function(card) {
        card.style.display = ''; // Reset any display changes made by search
    });
});

document.getElementById('searchInput').addEventListener('input', function() {
    const closeIcon = document.getElementById('closeIcon');
    if (this.value.length > 0) {
        closeIcon.style.display = 'block'; // Show the icon if there is text
    } else {
        closeIcon.style.display = 'none'; // Hide the icon if the input is empty
    }
});

// Ensure the close icon clears the input and hides itself when clicked
document.getElementById('closeIcon').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput');
    searchInput.value = ''; // Clear the search input
    this.style.display = 'none'; // Hide the icon immediately
    searchInput.focus(); // Optional: bring focus back to the input
});

document.addEventListener('click', function(event) {
    const searchInput = document.querySelector('#searchInput'); // Assuming you have an input with this ID
    const overviewCard = document.querySelector('.overview-card');
    const isClickInsideSearchInput = searchInput.contains(event.target);
    const isClickInsideOverviewCard = overviewCard.contains(event.target);

    if (!isClickInsideSearchInput && !isClickInsideOverviewCard) {
        // Logic to close the search input goes here
        // For example, you might hide the search input or remove text from it
        console.log('Closing search input because click was outside of search input and overview card.');
    } else {
        // If the click is inside the search input or the overview card, do nothing
        console.log('Click was inside search input or overview card. Do not close search input.');
    }
});