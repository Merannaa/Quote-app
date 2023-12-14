var quotes = [
    {
        quote:"Doesn’t it feel so good to be bad?",
        author:" — Scarlet"
    },
    {
        quote:"Gentlemen do not steal ladies’ crowns!",
        author:" — Queen Elizabeth"
    }, 
    {
        quote:"No, no, no! Hey, a piñata!",
        author:" — Minions"
    }, 
    {
        quote:"Work for me, and all this will be yours: respect, power …",
        author:" — Scarlet Overkill"
    }, 
    {
        quote:"Mind the gap! Mind the gap! Mind the gap!",
        author:" — Minions, Bob, Stuart and Kevin"
    }
]

var quoteId = document.getElementById('randomQuote')
var authorId = document.getElementById('randomName')
var prev = null


function getIndex(){
    var nextIndex = Math.floor(Math.random() * quotes.length)
    if (nextIndex === prev){
        return getIndex();
    }
    prev = nextIndex;
    return prev;
}

function getQuote(){
    var r = getIndex()
    quoteId.innerHTML = quotes[r].quote
    authorId.innerHTML = quotes[r].author
    console.log(r);
}






