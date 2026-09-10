# React Number Guessing Game

A simple number guessing game built with React and Vite.

The player has to guess a randomly generated number between 1 and 100. After each attempt, the application tells the player whether the guess is too high or too low.

## Features

* Generates a random number between 1 and 100
* Checks the player's guess
* Shows whether the guess is too high or too low
* Counts the number of attempts
* Keeps a history of previous guesses
* Displays a success message when the number is guessed
* Allows the player to start a new game
* Responsive and simple user interface

## Example

The game might look like this:

```text
Number Guessing Game

Guess the number between 1 and 100

[ 50 ] [ Guess ]

Too high! ⬇️

Attempts: 2

Previous guesses:
75 · 50
```

When the correct number is guessed:

```text
Congratulations! You guessed the number 🎉

Attempts: 5

[ New Game ]
```

## Technologies

* React
* Vite
* JavaScript
* ESLint
* Git
* GitHub Pages

## Getting Started

Clone the repository:

```bash
git clone https://github.com/thinkphp/react-number-guessing.git
```

Navigate to the project:

```bash
cd react-number-guessing
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## Build

To create a production build:

```bash
npm run build
```

The production files will be generated in the `dist/` directory.

## Deployment

The application is deployed to GitHub Pages using `gh-pages`.

To deploy the latest version:

```bash
npm run deploy
```

The deployment process builds the application and publishes the `dist/` directory to the `gh-pages` branch.

## Live Demo

The application is available here:

https://thinkphp.github.io/react-number-guessing/

## What I Practiced

This project was created as a React practice project.

It helped practice:

* `useState`
* Handling user input
* Button events
* Conditional rendering
* Random number generation
* Arrays and array methods
* Updating state
* Game logic
* Git and GitHub
* Deployment with GitHub Pages

## Future Improvements

Possible improvements for the game:

* Add difficulty levels
* Add a maximum number of attempts
* Add a scoring system
* Add a timer
* Add a best-score system
* Add different number ranges
* Add keyboard support for the Enter key

## License

This project is for educational and practice purposes.
