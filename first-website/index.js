// define the function to operate your button here 


/*eventually: create dropdown & button to double & 4x the recipe ingredients.
use an array or object to contain the diff numbers
create array one, then use array[ingredient]*2 (but properly coded)
if (serving=original){ingredientScale=ingredientsOriginal};
else if (servings = doubled){ingredientScale = ingredientsDoubled};
esle if (servings = quintupled){ingredientScale=ingredientsQuintupled};*/


function showOrHide(){
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var readMoreButtonText = document.getElementById("readMoreButton");

    if (dots.style.display==="none"){
        dots.style.display="inline";
        moreText.style.display="none";
        readMoreButtonText.innerHTML="Read Less";
        //this might be related to a way I can display diff ingredient numbers!!!!
    } 
    else{
        dots.style.display="none";
        moreText.style.display="inline";
        readMoreButtonText.innerHTML="Read More";
    }
}


function postComment() {
    console.log(textarea);
    //????? update to "form" vs button later
}
