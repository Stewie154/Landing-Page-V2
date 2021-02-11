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
populateNavItems(sections);