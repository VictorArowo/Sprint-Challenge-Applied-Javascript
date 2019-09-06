// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then(res => {
        res.data.topics.forEach(topic => {
            let div = document.createElement("div");
            div.classList.add("tab");
            div.textContent = topic;
            // div.setAttribute("data-category", topic);
            
            div.addEventListener("click", () => {
                let cards = document.querySelectorAll(".card");
                Array.from(cards).forEach(card =>{
                    card.dataset.category === topic || (card.dataset.category + ".js" === topic)  ? card.style.display = "flex" :card.style.display = "none";
                })
            })

            document.querySelector(".topics").append(div);

        })
    });