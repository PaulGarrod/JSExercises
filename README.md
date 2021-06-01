<!-- HTML CSS Question -->
Html elements are contained within a box. The box is made up of different parts / wrappers. From the inside out, the box is made up of the elements content (center) which has a padding around it, which then has a border and finally a margin is the outer most part. 

As an example, consider yourself the contents, your clothes the padding, your rain jacket the border and your social distance the margin. Or think of it as a pass the parcel, with 3 layers around the prize.

These parts which make up the box can be manipulated using CSS, making them larger, smaller, colored and so on to help your design needs. 

Using CSS you can also change the properties of the box - some are block elements (these start on a new line, and take up the full width of their container), others are inline elements which remain on the same line and take up only the space the content needs. CSS allows you to change these properties if you need to. 

<!-- JavaScript Exercise -->
<!-- challenge 1 -->
sumOfPrice = (arr) => {
    return arr.map(a => a.price).reduce((a, b) => a + b);
};
sumOfPrice(sales);

<!-- challenge 2 -->
dateSold = (date) => {
    const itemsSold = sales.filter(a => a.dateSold.includes(date))
    return itemsSold.map(a => a.itemSold);
}
dateSold(2017);

<!-- challenge 3 -->
sortAlphabetically = (arr) => {
    return arr.map(i => i.itemSold).sort();
}
sortAlphabetically(sales);

<!-- challenge 4 -->
const itemMatched = (id, arr) => {
    const index = arr.findIndex(i => i.id === id);
    return arr[index];
};
itemMatched("j_456", sales);

<!-- Project README.md -->
Created with React and SCSS.

Attempted to keep the design and layout as similar to the brief as possible.

Following the brief closely, I attempted to use SCSS for the project - this is my first experience with SCSS. Previously I have created similar projects with just CSS, utilizing CSS Grid and CSS Flexbox.

Fonts included from GoogleFonts.
Icon included from Font Awesome.

Components include a;
Header Component- incorporating a title and search bar with icon button. 
Made responsive using flexbox and flex-grow on the title.

Content Component - body of the website containing two components. 
Responsive layout created using CSS Grid.
    Main Component (first column) contains the main content of the webpage. 
    (With more time I would have created aditional components such as cards or sections to be reused within the Main Component.)
    Sidebar Component (second column) contains the sites navigation (as there isnt one in the header). 
    Using array.map to create an array of li's which I inserted into the JSX.
    On smaller screen sizes the Content Components CSS Grid is changed to FlexBox stacking the Main and Sidebar Components for better viewing on mobile. At this point list items are seperated into two columns using CSS for better viewing on mobile.

Additional responsiveness include, 
Adjusting the Grid Column sizes for larger screens and,
Removing the padding-left and padding-right on smaller screens to utilize the whole screen on smaller screen sizes.