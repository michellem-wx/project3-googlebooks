// FUNCTION: concatenating the search term with the API url
const urlBase = "https://www.googleapis.com/books/v1/volumes?q=";
getSearchUrl = (searchTerm) => {
    return urlBase + searchTerm;
};

// FUNCTION: Getting data from the API
const getGoogleApi = async (searchQuery) => {
    const requestPromise = fetch(getSearchUrl(searchQuery));
    const response = await requestPromise;
    const searchData = await response.json();

    const bookData = searchData.items.map((x) => {
        let output = {};

        if (x.volumeInfo.title) {
            output.bookTitle = x.volumeInfo.title;
        } else {
            output.bookTitle = "Book title unavailable";
        }

        // AUTHORS
        if (x.volumeInfo.authors) {
            output.bookAuthors = x.volumeInfo.authors;
        } else {
            output.bookAuthors = "Author(s) unknown";
        }

        // BOOK DESCRIPTION
        if (x.volumeInfo.description) {
            let truncate = (str, max, suffix) =>
                str.length < max
                    ? str
                    : `${str.substr(
                          0,
                          str.substr(0, max - suffix.length).lastIndexOf(" ")
                      )}${suffix}`;

            output.bookDescription = truncate(
                x.volumeInfo.description,
                300,
                "..."
            );
        } else {
            output.bookDescription = "Book description unavailable";
        }

        // IMAGE LINKS
        if (x.volumeInfo.imageLinks) {
            output.bookImage = x.volumeInfo.imageLinks;
        } else {
            output.bookImage = "Image thumbnail is NOT available";
        }

        return output;
    });

    // FUNCTION: Render bookData on the front end
    // I need something where this bookData information needs to be either stored somewhere to execute a function later to render the data on the front end.
    // console.log(bookData[0].bookImage);

    // DOM FUNCTION HERE - IMPORT

    const myBooks = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let i = 0; i < myBooks.length; i++) {
        let gridCellNum = myBooks[i];

        //Title
        const addTitle = document.createElement("h4");
        const titleName = document.createTextNode(bookData[i].bookTitle);

        addTitle.appendChild(titleName);

        const findTitle = document.getElementById("grid-" + gridCellNum);
        findTitle.appendChild(addTitle);

        // Authors
        const addAuthor = document.createElement("h5");
        const authorNames = document.createTextNode(bookData[i].bookAuthors);

        addAuthor.appendChild(authorNames);

        const findAuthor = document.getElementById("grid-" + gridCellNum);
        findAuthor.appendChild(addAuthor);

        // Description

        const addDescription = document.createElement("p"); //creating a paragraph to house my description
        const descriptionParagraph = document.createTextNode(
            bookData[i].bookDescription
        ); // adding the bookDescription data from the API to be created as text.

        addDescription.appendChild(descriptionParagraph); //add the results of descriptionParagraph (api results) to the addDescription paragraph element

        const findDescription = document.getElementById("grid-" + gridCellNum);
        findDescription.appendChild(addDescription); // shove the element you created in the placeholder of your actual HTML doc
    }

    // const newElement2 = document.createElement("h5");
    // const textNode2 = document.createTextNode(bookData[0].bookAuthors);
    // newElement2.appendChild(textNode2);
    // const findParent2 = document.getElementById("grid-1");
    // findParent.appendChild(newElement2);

    // const newElement3 = document.createElement("p");
    // const textNode3 = document.createTextNode(bookData[0].bookDescription);
    // newElement2.appendChild(textNode3);
    // const findParent3 = document.getElementById("grid-1");
    // findParent.appendChild(newElement3);

    // const newElementAuthors = document.createElement("h5");
    // const textNodeAuthors = document.createTextNode(bookData[0].bookAuthors);
    // newElement.appendChild(textNodeAuthors);

    // const findParent = document.getElementById("grid-1");
    // findParent.appendChild(newElementAuthors);

    // const myBooks = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    // for (let i = 0; i < myBooks.length; i++) {
    //     let gridCellNum = myBooks[i];
    //     document.getElementById("title" + gridCellNum).innerText =
    //         bookData[gridCellNum].bookTitle;

    //     document.getElementById("author" + gridCellNum).innerText =
    //         bookData[gridCellNum].bookAuthors;

    //     document.getElementById("description" + gridCellNum).innerText =
    //         bookData[gridCellNum].bookDescription;

    //     // document.getElementById("bookCover" + gridCellNum).innerText =
    //     //     bookData[gridCellNum].bookImage;

    //     document.getElementById("bookCover" + gridCellNum).src =
    //         bookData[gridCellNum].bookImage.thumbnail; //nested objects

    //     // console.log(bookData[divNum].bookImage.thumbnail); ==> SRC
    // }
};

// FUNCTION: Listener event on search button
const searchInput = document.getElementById("search_input");
const searchButton = document.getElementById("search-btn");
searchButton.addEventListener("click", () => {
    getGoogleApi(searchInput.value);
});
