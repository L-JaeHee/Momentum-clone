const quotes = [
  "\" The way to get started is to quit talking and begin doing.\" - Walt Disney",
  "\" Life is what happens when you're busy making other plans.\" - John Lennon",
  "\" Positive anything is better than negative nothing.\" - Elbert Hubbard",
  "\" Miracles happen to those who believe in them.\" - Bernhard Berenson",
  "\" Believe you can and you’re halfway there.\" - Teddy Roosevelt"
]

const quote = document.querySelector("#quote");

const currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = currentQuote;