// Function: concatenating the search term with the API url
const urlBase = "https://www.googleapis.com/books/v1/volumes?q=";
getSearchUrl = (searchTerm) => {
return urlBase + searchTerm;
};

// THINGS TO BUILD - small steps

//SEARCH BAR INPUT

//SET UP API TO FETCH DATA

// RENDER RESULTS FROM API INTO ONE CELL: search function and the return is the search results in object form (i.e. json.)
// Purpose of this function is to get data from a search query
// this function is the result from the API

const getGoogleApi = async (searchQuery) => {
//why async is there is because by default JS is running code synchronously..
const requestPromise = fetch(getSearchUrl(searchQuery)); //a get request
const response = await requestPromise; //executing the line above (green light). oncethe request promise has come through, this is my ACTUAL response (hence response variable)
const searchData = await response.json(); //i want my response to be in the json format

    const bookData = searchData.items.map((x) => {
        // console.log(x.volumeInfo);
        let output = {
            bookTitle: x.volumeInfo.title,
            bookAuthors: [...x.volumeInfo.authors],
            bookDescription: x.volumeInfo.description,
        };

        // Add in placeholder text
        if (x.volumeInfo.imageLinks) {
            output.bookImage = x.volumeInfo.imageLinks;
        } else {
            output.bookImage = "Image thumbnail is not available";
        }

        // if (x.volumeInfo.imageLinks) {
        //     output = {
        //         ...output,
        //         bookImage: x.volumeInfo.imageLinks,
        //     };
        // }

        // let outputTwo = {};
        // outputTwo.author = "something";

        return output;
    });

    console.log(bookData);
    //SEARCH SUBMIT BUTTON || EVENT LISTENER

    //         if (volume.volumeInfo.authors)
    //             output.author = volume.volumeInfo.authors[0];
    //         else output.author = "Unknown";
    //         output.publisher = volume.volumeInfo.publisher;

    // console.log(searchData.items[0].volumeInfo.authors[0]);
    // console.log(searchData.items[0]);
    // return [...searchData.items;

};

// I need to get the text
const searchInput = document.getElementById("search_input");

const searchButton = document.getElementById("search-btn"); // it retrieves the button in my html and puts its in buttonA (the constant)

// this is the buttonA event listener. the function is: retrieving getElementById ("CELL-ONE") and looking for the innerText. and returning "this is the letter A"
searchButton.addEventListener("click", () => {
getGoogleApi(searchInput.value);
// console.log(searchInput.value);
});

// console.log(getGoogleApi("dogs"));

// SYNCHRONOUS
// console.log("first");
// console.log("second");
// setTimeout(() => console.log("i appear 2 seconds later"), 2000);
// console.log("third");
