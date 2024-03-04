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

// Adding this to ensure clicks on the dropdown do not close it

document.getElementById("dropdownTwo").addEventListener('click', function(event) {
    event.stopPropagation();
});

// Plans Tabs //
let sectionFourTabs = document.querySelectorAll(".sectionFourTabs li");
let sectionFourTabsArray = Array.from(sectionFourTabs);

let sectionFourDivs = document.querySelectorAll(".section-four-content > div");
let sectionFourDivsArray = Array.from(sectionFourDivs);

const sectionFourButton = document.querySelector(".section-four-card.two h3 span");

sectionFourTabs.forEach((ele) => {
    ele.addEventListener("click" , function (e) {
        sectionFourTabs.forEach((ele) => {
            ele.classList.remove("sectionFourActive");
        });
        e.currentTarget.classList.add("sectionFourActive");
        sectionFourDivs.forEach((div) => {
            div.style.display = "none";
        });
        let price = (e.currentTarget.dataset.content === ".featuresOne") ? "5.00" : "50.00";
        sectionFourButton.innerText = price;
        document.querySelector(e.currentTarget.dataset.content).style.display = "block";
    });
});