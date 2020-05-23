// define the function to operate your button here


/*eventually: create dropdown & button to double & 4x the recipe ingredients.
use an array or object to contain the diff numbers
create array one, then use array[ingredient]*2 (but properly coded)
if (serving=original){ingredientScale=ingredientsOriginal};
else if (servings = doubled){ingredientScale = ingredientsDoubled};
esle if (servings = quintupled){ingredientScale=ingredientsQuintupled};*/


function showOrHide() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementsByClassName("more");//created an array by accessing 2 classes, that does exactly what line 15does.  No change to for loop.
    // var moreText = [ document.getElementById("more"), document.getElementById("signature") ] ;
    var readMoreButtonText = document.getElementById("readMoreButton");

    if (dots.style.display === "none") {
        readMoreButtonText.innerHTML = "Read More";
        //this might be related to a way I can display diff ingredient numbers!!!!
        dots.style.display = "inline";

        for (var i = 0; i < moreText.length; i++) {
            moreText[i].style.display = "none";
        }
    }
    else {
        readMoreButtonText.innerHTML = "Read Less";
        dots.style.display = "none";

        for (var i = 0; i < moreText.length; i++) {
            moreText[i].style.display = "inline";
        }
    }
}


function postComment() {
    console.log(textarea);
    //????? update to "form" vs button later
}
