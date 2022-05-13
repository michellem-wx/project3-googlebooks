const renderBooks = (array) => {
    const myBooks = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let i = 0; i < myBooks.length; i++) {
        // let gridCellNum = myBooks[i];

        // console.log(document.getElementById("grid-" + gridCellNum).children);

        const outsideDiv = document.createElement("div");

        // BOOK IMAGE
        const newElementImage = document.createElement("img");
        newElementImage.setAttribute("src", array[resultNumber].Image);
        newElementImage.setAttribute("alt", "na");
        const parentImage = document.getElementById("results" + resultNumber);
        parentImage.appendChild(newElementImage);

        //BOOK TITLE
        const titleElement = document.createElement("h4");
        const titleTextNode = document.createTextNode(array[i].bookTitle);

        titleElement.appendChild(titleTextNode);

        // const addDivBookTitle = document.getElementById("grid");
        // outsideDiv.appendChild(titleTextNode);

        // BOOK AUTHOR
        const authorElement = document.createElement("h5");
        const authorTextNode = document.createTextNode(array[i].bookAuthors);

        authorElement.appendChild(authorTextNode);

        // const addDivBookAuthor = document.getElementById("grid");
        // outsideDiv.appendChild(authorTextNode);

        // BOOK DESCRIPTION

        const descriptionElement = document.createElement("p");
        const descriptionTextNode = document.createTextNode(
            array[i].bookDescription
        );

        descriptionElement.appendChild(descriptionTextNode);

        // const addDivBookDescription = document.getElementById("grid");
        // addDivBookDescription.appendChild(descriptionTextNode);

        // // appending to div
        outsideDiv.appendChild(titleElement);
        outsideDiv.appendChild(authorElement);
        outsideDiv.appendChild(descriptionElement);

        // WHERE WE'RE HOUSING OUR OUTSIDE DIV TO LIVE IN THE HTML/PAGE:
        document.querySelector(".grid").appendChild(outsideDiv);
    }
};

export default renderBooks;

// addDescription.appendChild(descriptionParagraph);

// const addDivBookDescription = document.getElementById("grid");
// addDivBookDescription.appendChild(descriptionParagraph);

// const findDescription = document.getElementById("grid-" + gridCellNum);
// findDescription.appendChild(addDescription);
// const findTitle = document.getElementById("grid-" + gridCellNum);
// findTitle.appendChild(addTitle);

// // Authors
// const addAuthor = document.createElement("h5");
// const authorNames = document.createTextNode(array[i].bookAuthors);

// addAuthor.appendChild(authorNames);

// const addDivBookAuthor = document.getElementById("grid");
// addDivBookAuthor.appendChild(authorNames);

// // const findAuthor = document.getElementById("grid-" + gridCellNum);
// // findAuthor.appendChild(addAuthor);

// // Description

// const addDescription = document.createElement("p");
// const descriptionParagraph = document.createTextNode(
//     array[i].bookDescription
// );

// creating an outside div (box), for the other elements (i.e. h4,h5, p elements). then creating text nodes => likning textnodes with HTML elements => grabbing all HTML elements containing text and APPENDING (Attaching them to the box - the outside DIV)
// the OUTSIDE DIV (containing children) is being displayed in the grid
// the DIV has been created in the DOM ==> needs to point it somwehere on the page
