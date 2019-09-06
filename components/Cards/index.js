// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

let cardNames = [];
let cardArrays = [];
axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(res => {
        cardNames.push(Object.keys(res.data.articles));
        cardArrays.push(res.data.articles);
    })
    .then(() => {
        cardNames[0].forEach(elem => {
            let currentArray = cardArrays[0][`${elem}`]
            currentArray.forEach(item => {
                let card = articleCreator(item);
                card.setAttribute("data-category", elem);
                document.querySelector(".cards-container").append(card);
            })
        })
    });


articleCreator = ({headline, authorPhoto, authorName}) => {
    const cardDiv = document.createElement("div");
    const headlineDiv = document.createElement("div");
    const authorDiv = document.createElement("div");
    const imgDiv = document.createElement("div");
    const img = document.createElement("img");
    const span = document.createElement("span");

    cardDiv.classList.add("card");
    headlineDiv.classList.add("headline");
    authorDiv.classList.add("author");
    imgDiv.classList.add("img-container");

    img.setAttribute("src", authorPhoto);

    headlineDiv.textContent = headline;
    span.textContent = `By ${authorName}`;

    imgDiv.append(img);
    authorDiv.append(imgDiv);
    authorDiv.append(span);
    headlineDiv.append(authorDiv);
    cardDiv.append(headlineDiv);

    return cardDiv;
}