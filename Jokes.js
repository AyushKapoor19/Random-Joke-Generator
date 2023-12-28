/*Author: Ayush Kapoor 
File Name: jokes.html 
Date Created: September 29, 2023
Description: JavaScript function displays random jokes on button click.*/
// Array containing some light-hearted jokes with authors
const jokesArray = [
    {
        "joke": "Why don't scientists trust atoms? Because they make up everything!",
       
        "author": "Anonymous"
    },
    {
        "joke": "Why did the scarecrow win an award? Because he was outstanding in his field!",
        
        "author": "John Doe"
    },
    {
        "joke": "What do you call fake spaghetti? An Impasta!",
        
        "author": "Jane Smith"
    },
    {
        "joke": "Why was the math book sad? Because it had too many problems.",
        
        "author": "Math Enthusiast"
    },
    {
        "joke": "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
        
        "author": "Golf Lover"
    },
    {
        "joke": "Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.",
       
        "author": "Farm Fanatic"
    },
    {
        "joke": "What do you get when you cross a vampire and a snowman? Frostbite.",
        
        "author": "Monster Mixer"
    },
    {
        "joke": "How do you organize a space party? You planet.",
     
        "author": "Space Enthusiast"
    },
    {
        "joke": "Why did the bicycle fall over? Because it was two-tired!",
        
        "author": "Bike Rider"
    },
    {
        "joke": "What do you call a bear with no teeth? A gummy bear!",
       
        "author": "Nature Lover"
    },
    {
        "joke": "If I have three bottles in one hand and two in the other hand, what do I have? A drinking problem",
       
        "author": "Laugh Factory"
    },
    {
        "joke": "What does a writer hope to get in a Christmas cracker? A Pull-it-surprise!",
       
        "author": "Funny Weather Jokes"
    },
    {
        "joke": "How does a Buzzfeed writer catch fish? Clickbait",
       
        "author": "Funny Fish Jokes"
    },
    {
        "joke": "What’s the best college degree to become a successful fiction writer? Journalism",
       
        "author": "Funny College Jokes"
    },
    {
        "joke": "What do you call an uncredited writer in urban northwest Pennsylvania? An Erie ghostwriter",
       
        "author": "Funny USA Jokes"
    }  
];
function getJokes() {
    let arrayNum = Math.floor(Math.random() * jokesArray.length);
    let joke = jokesArray[arrayNum].joke;
    let author = jokesArray[arrayNum].author;

    document.getElementById("jokeText").innerText = joke;
    document.getElementById("author").innerText = "-" + author;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("getJokeButton").addEventListener("click", getJokes);
    getJokes();
});

