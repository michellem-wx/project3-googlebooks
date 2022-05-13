import renderBooks from "./dom.js";

// FUNCTION: concatenating the search term with the API url
const urlBase = "https://www.googleapis.com/books/v1/volumes?q=";
const getSearchUrl = (searchTerm) => {
    return urlBase + searchTerm;
};

// FUNCTION: Getting data from the API
const getGoogleApi = async (searchQuery) => {
    const requestPromise = fetch(getSearchUrl(searchQuery));
    const response = await requestPromise;
    const searchData = await response.json();

    console.log(searchData);

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
    renderBooks(bookData);
};

// FUNCTION: Listener event on search button
const searchInput = document.getElementById("search_input");
const searchButton = document.getElementById("search-btn");

searchButton.addEventListener("click", () => {
    const removeAllChildren = (parent) => {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    };
    removeAllChildren(document.getElementById("grid"));

    getGoogleApi(searchInput.value);
});
