const quotes = [
    {
        quote : "The greatest glory in living lies not in never falling, but in rising every time we fall.", 
        author : "Nelson Mandela"
    },
    {
        quote :"In the end, it’s not the years in your life that count. It’s the life in your years.",
        author : " Abraham Lincoln"
    },
    {
        quote :"Many of life’s failures are people who did not realize how close they were to success when they gave up.",
        author : "Thomas A. Edison"
    },
    {
        quote :"Despite the forecast, live like it’s spring.",
        author : "Lilly Pulitzer"
    },
    {
        quote :"Try not to become a man of success but rather try to become a man of value.",
        author : "Albert Einstein"
    },
    {
        quote :"We must believe in luck. For how else can we explain the success of those we don’t like?",
        author : "Jean Cocteau"
    },
    {
        quote :"I find that the harder I work, the more luck I seem to have.",
        author : "Thomas Jefferson"
    },
    {
        quote :"Don’t be afraid to give up the good to go for the great.",
        author : "John D. Rockefeller"
    },
    {
        quote :"All progress takes place outside the comfort zone.",
        author : "Michael John Bobak"
    },
    {
        quote :"Some people dream of success, while other people get up every morning and make it happen.", 
        author : "Wayne Huizenga"
    }
]
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
