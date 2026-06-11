const ratings = document.querySelectorAll(".rating-btn");
const submitBTN = document.getElementById("submit-btn");

let selectedRating = null;

ratings.forEach(rating => {
    rating.addEventListener("click", () => {

        // Clears selection
        ratings.forEach(btn => {
            btn.classList.remove("selected");
        });

        rating.classList.add("selected");

        // store the rating
        selectedRating = rating.dataset.rating;
    });
});

submitBTN.addEventListener("click", () => {

    if (!selectedRating) {
        alert("Please select a rating first!");
        return;
    }

    document.querySelector(".card").innerHTML = `
        <div class="thank-you">
            <h2>Thank You!</h2>
            <p>You selected ${selectedRating} out of 5</p>
            <p>
                We appreciate you taking the time to give a rating.
                If you ever need more support, don't hesitate to get in touch!
            </p>
        </div>
    `;
});