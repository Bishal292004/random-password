# Random Password Generator

A simple vanilla JavaScript web app that generates a random password and lets the user copy it to the clipboard. This project is part of a "100 Days, 100 Webpages" practice series.

## Try it here

https://randomstrongpassword1.netlify.app/

## Features

- Generates a password with a random length between 6 and 12 characters.
- Includes at least one uppercase letter, lowercase letter, number, and symbol.
- Shuffles the generated characters so the password pattern is less predictable.
- Displays the generated password in an input field.
- Provides a copy button for quick clipboard copying.
- Uses only HTML, CSS, and JavaScript.

## Preview

The page contains a centered password generator panel with:

- A title: `Generate a Random Password`
- A password display field
- A copy icon
- A generate button with an icon

## Project Structure

```text
.
|-- index.html
|-- style.css
|-- script.js
|-- images/
|   |-- copy.png
|   `-- generate.png
```

## How It Works

The app defines character sets for uppercase letters, lowercase letters, numbers, and symbols. When the user clicks **Generate Password**, the script:

1. Chooses a random password length from 6 to 12 characters.
2. Adds one character from each required character group.
3. Fills the remaining length with random characters from all groups.
4. Shuffles the final password.
5. Displays it in the password input field.

The copy icon selects the password field and copies its current value to the clipboard.

## Getting Started

No build tools or dependencies are required.

1. Clone this repository:

```bash
git clone <repository-url>
```

2. Open the project folder.

3. Open `index.html` in your browser.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Files

- `index.html` - Defines the page structure.
- `style.css` - Handles layout, colors, typography, and button styling.
- `script.js` - Contains password generation, shuffling, display, and copy logic.
- `images/` - Stores the copy and generate button icons.

## Notes

This is a front-end learning project. For production-grade password generation, use the browser's Web Crypto API instead of `Math.random()`.
