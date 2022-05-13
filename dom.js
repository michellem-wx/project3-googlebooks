const renderBooks = (array) => {
    const myBooks = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let i = 0; i < myBooks.length; i++) {
        const outsideDiv = document.createElement("div");

        // BOOK IMAGE
        const imageElement = document.createElement("img");
        imageElement.src = array[i].bookImage.thumbnail;

        //BOOK TITLE
        const titleElement = document.createElement("h3");
        const titleTextNode = document.createTextNode(array[i].bookTitle);

        titleElement.appendChild(titleTextNode);

        // BOOK AUTHOR
        const authorElement = document.createElement("h4");
        const authorTextNode = document.createTextNode(array[i].bookAuthors);

        authorElement.appendChild(authorTextNode);

        // BOOK DESCRIPTION

        const descriptionElement = document.createElement("p");
        const descriptionTextNode = document.createTextNode(
            array[i].bookDescription
        );

        descriptionElement.appendChild(descriptionTextNode);

        // APPENDING ALL CHILD ELEMENTS TO THE OUTSIDE DIV:
        outsideDiv.appendChild(titleElement);
        outsideDiv.appendChild(authorElement);
        outsideDiv.appendChild(descriptionElement);
        outsideDiv.appendChild(imageElement);

        // WHERE WE'RE HOUSING OUR OUTSIDE DIV TO LIVE ON THE HTML/PAGE:
        document.querySelector(".grid").appendChild(outsideDiv);
    }
};

export default renderBooks;
