Codewriting

Write a function to capitalize every word of the given string and return the results.

[execution time limit] 4 seconds (js)

[input] string sentence

[output] string

String with capitalized words


function capitalizeWords(sentence) {
    words = sentence.split(" ") ;
    for (let i = 0 ; i < words.length ; i++ ) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(" ") ;
}
 console.log(capitalizeWords("sentence"))
