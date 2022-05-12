// FUNCTION: concatenating the search term with the API url
const urlBase = "https://www.googleapis.com/books/v1/volumes?q=";
getSearchUrl = (searchTerm) => {
    return urlBase + searchTerm;
};

// FUNCTION: Getting data from the API

const getGoogleApi = async (searchQuery) => {
    //why async is there is because by default JS is running code synchronously..
    const requestPromise = fetch(getSearchUrl(searchQuery)); //a get request
    const response = await requestPromise; //executing the line above (green light). oncethe request promise has come through, this is my ACTUAL response (hence response variable)
    const searchData = await response.json(); //i want my response to be in the json format

    console.log(searchData);

    const bookData = searchData.items.map((x) => {
        let output = {}; //the empty object, collecting info from the API
        // creating an object for each book
        // bookFrom API - represents one book from the array ==> accesing volume info (that's also an object)

        // TITLE
        if (x.volumeInfo.title) {
            output.title = x.volumeInfo.title;
        } else {
            output.title = "Book title unavailable";
        }

        // Q.1 what is output.:
        // output represents your empty project
        // adding data to that object: containing a key and a value
        // key will be 'book title'
        // use of the dot:
        // 1) objectname.property name (LHS)

        // AUTHORS
        if (x.volumeInfo.authors) {
            output.bookAuthors = x.volumeInfo.authors;
        } else {
            output.bookAuthors = "Author(s) unknown";
        }

        // BOOK DESCRIPTION
        if (x.volumeInfo.description) {
            output.bookDescription = x.volumeInfo.description;
        } else {
            output.bookDescription = "Book description unavailable";
        }

        // IMAGE LINKS
        if (x.volumeInfo.imageLinks) {
            output.bookImage = x.volumeInfo.imageLinks;
        } else {
            output.bookImage = "Image thumbnail is NOT available";
        }

        console.log(output); //the object i created

        return output;
    });

    // I need something where this bookData information needs to be either stored somewhere to execute a function later to render the data on the front end.
    // console.log(bookData[0].bookImage);

    // FUNCTION: Render bookData on the front end

    const myBooks = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let i = 0; i < myBooks.length; i++) {
        let gridCellNum = myBooks[i];
        document.getElementById("title" + gridCellNum).innerText =
            bookData[gridCellNum].bookTitle;

        document.getElementById("author" + gridCellNum).innerText =
            bookData[gridCellNum].bookAuthors;

        document.getElementById("description" + gridCellNum).innerText =
            bookData[gridCellNum].bookDescription;

        // document.getElementById("bookCover" + gridCellNum).innerText =
        //     bookData[gridCellNum].bookImage;

        document.getElementById("bookCover" + gridCellNum).src =
            bookData[gridCellNum].bookImage.thumbnail; //nested objects

        // console.log(bookData[divNum].bookImage.thumbnail); ==> SRC
    }
};

// let test = document.getElementById("bookcover1");
// test.src = bookData[0].bookImage.thumbnail;

// document.getElementById("title1").innerText = bookData[0].bookTitle;
// document.getElementById("author1").innerText = bookData[0].bookAuthors;
// document.getElementById("description1").innerText =
//     bookData[0].bookDescription;

// document.getElementById("title2").innerText = bookData[1].bookTitle;
// document.getElementById("author2").innerText = bookData[1].bookAuthors;
// document.getElementById("description2").innerText =
//     bookData[1].bookDescription;

// const bookGridCell = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// for (let i = 0; i < bookGridCell.length; i++) {
//     const gridCell = bookGridCell[i];

//     document.getElementById("title" + gridCell).innerText =
//         bookData[gridCell].bookTitle;
// }

// console.log(bookData(book.imageLinks));

// document.getElementById("bookImage").src = bookData[0].bookImage;

// document.getElementById("bookImage").innerHTML = (
//     <img src="http://books.google.com/books/content?id=_XbIDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />

// console.log(bookData);

// console.log(getGoogleApi("cats"));

// FUNCTION: Listener event on search button
const searchInput = document.getElementById("search_input"); //text added in search bar

console.log(searchInput);
const searchButton = document.getElementById("search-btn");
searchButton.addEventListener("click", () => {
    getGoogleApi(searchInput.value); //text added in search bar passing through as a parameter in the fetch/promise function (i.e. getGoogleApi)
});

// value will get updated each time the user inputs a search term in the search bar

// JAVASCRIPT DOM REVISION:
// create elements - DIVS will only be created when the user selects the search button
// it will ADD elements to your page (and they DONT exist on the HTML file)
// you still need 1 empty divs and point the created elements on where they need to be displayed
// to do thsi you need append child ^

// APPEND CHILD:
// tells the element where it needs to live
// e.g. telling H1 to live in a specific DIV
