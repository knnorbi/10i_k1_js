var reviews = [
    {text: "Good", rating: 0 },
    {text: "Bad", rating: 0 }
];

displayReviews();

function saveReview() {
    var reviewString = document.getElementById("review").value;
    var reviewJSON = {text: reviewString, rating: 0};
    reviews.push(reviewJSON);
    
    displayReviews();
    document.getElementById("review").value = "";
    document.getElementById("review").focus();
}

function displayReviews() {
    var tmp = "";
    
    for(var i = 0; i < reviews.length; i++) {
        tmp += '<div class="row ';
        if (reviews[i].rating < -5) {
            tmp += "bad";
        }
        else if(reviews[i].rating < 5) {
            tmp += "ok";
        }
        else {
            tmp += "good";
        }
        tmp +='">';
        tmp += '<div class="col-sm-6">' + reviews[i].text + '</div>';
        tmp += '<div class="col-sm-2">' + reviews[i].rating + '</div>';
        tmp += '<div class="col-sm-2"><button class="btn btn-success" onclick="incRating(' + i + ')">+</button></div>';
        tmp += '<div class="col-sm-2"><button class="btn btn-danger" onclick="decRating(' + i + ')">-</button></div>';
        tmp += '</div>';
    }
    
    document.getElementById("reviews").innerHTML = tmp;
}

function incRating(idx) {
    reviews[idx].rating++;
    displayReviews();
}

function decRating(idx) {
    reviews[idx].rating--;
    displayReviews();
}