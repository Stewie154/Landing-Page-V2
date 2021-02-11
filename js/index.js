//console.log('file is linked'); (checked to see file is linked correctly)

//container where links will be populated
const navItemsContainer = document.getElementById('navbar__list');

//grab each section
const sections = document.getElementsByTagName('section');

//function for populating navItemsContainer
const populateNavItems = (sects) => {
    //counter will be used to name each section incrementally / give correct href to each section
    let counter = 0;
    //loop through each section
    for (i=0; i < sects.length; i++) {
        counter ++;
        //create a tag for link
        aTag = document.createElement('a');
        //give a tag href for each section
        aTag.setAttribute('href', '#section' + counter.toString());
        //create li element 
       const navItem = document.createElement('li');
       //give li element class
       navItem.setAttribute('class', 'menu__link');
       //add text
        let text = document.createTextNode('Section ' + counter.toString());
        navItem.appendChild(text);
        //put nav link inside a tags eg <a><li>Section 1</li></a>
        aTag.appendChild(navItem);
        //add a tag (with link inside) to nav container
       navItemsContainer.appendChild(aTag);
    }
}


//function to check where element is on the page
const highlightActive = (sects) => {
    //loop through all sections
    for(sect of sects) {
        //store position properties for section via getBoundingClientRect
        const posElements = sect.getBoundingClientRect();
        //store distance of bottom of section to top of viewport
        const bottom = posElements.bottom;
        //console log used to see which range of numbers for bottom value would be a suitable cut off point for adding active class 
        //console.log('bottom value is: ' + bottom);
        //Ternary operator checks if the bottom value is between 600 & 1300. If so, the section is in view for the user and the 'your-active-class' is added to make it stand out. If not, the class is removed to make sure the section isn't being highlighted.
        bottom > 600 && bottom < 1300 ? sect.classList.add('your-active-class') : sect.classList.remove('your-active-class');
    }
}

//call function to populate navbar
populateNavItems(sections);
//call highlightActive function when user scrolls, to keep checking which section needs the class
document.addEventListener('scroll', function() {
    highlightActive(sections);
})
