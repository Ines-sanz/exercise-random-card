# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32)  Random Card Dealer in Javascript, HTML and CSS

<p align="center">
<img height="200px" src="https://github.com/breatheco-de/exercise-random-card/blob/master/preview.gif?raw=true" />
</p>

In this project you will learn how to change your website styles during the runtime using [VanillaJS](https://stackoverflow.com/questions/20435653/what-is-vanillajs) (plain normal js).

## 📝 Instructions

Create an algorithm that randomly builds a card on every refresh:

1. Every time the website refreshes a new random card needs to show.
2. The card must have one of the possible suits: Hearts, Spades, Clubs and Diamonds.
3. The card value must be one of the following: 1 to 10, King, Queen, Jack or Ace, (no joker).

In the end, the project needs to look similar to [this demo](https://github.com/breatheco-de/exercise-random-card/blob/master/preview.gif?raw=true).

### 💡Hints

- Remember that the first event of a website lifecycle is [onLoad (your code starts running there)](https://www.w3schools.com/jsref/event_onload.asp). You should generate a random number between 1 and 4 to pick a suit and another random number between 0 and 12 to pick a card number.
- Create a general **.card** class that applies the general styles to each card, and one additional CSS class for each suit: .spade, .club, .heart & .diamond.
- Apply the .card class to the entire div but only apply one of the suit classes at a time, depending on what suit you want to apply. For example, a 3 of Hearts will have this HTML declaration:
```
    <div class='card heart'></div>
```
- You can grab the icons from the [https://fontawesome.com/icons?d=gallery](font-awesome font icon gallery)

## 😎 Feeling Confident?

The following requirements are not needed to sucessfully finish this project, but you can try and challenge yourself!

`+1` Add a button that generates a new card when clicked.   
`+1` Add a timer that generates a new card every 10 seconds.   
`+1` Allow the user to specify the card with and height using text inputs.   
