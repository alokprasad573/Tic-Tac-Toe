# Tic-Tac-Toe

A simple React-based Tic-Tac-Toe game for two players.

## Features

- Classic 3x3 Tic-Tac-Toe board
- Two-player mode (Player 1: X, Player 2: 0)
- Highlights the winner and displays a message
- Responsive UI with styled components
- Easy to restart by refreshing the page

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/tic-tac-toe.git
    cd tic-tac-toe
    ```

2. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

3. Start the development server:
    ```sh
    npm start
    # or
    yarn start
    ```

4. Open [http://localhost:3000](http://localhost:3000) to play the game.

## Project Structure

- `src/Board.jsx` - Main game logic and board rendering
- `src/components/Square.jsx` - Individual square component

## How to Play

- Players take turns clicking on empty squares.
- Player 1 uses **X** (red), Player 2 uses **0** (green).
- The game announces the winner or a draw.
- Refresh the page to play again.

## License

This project is open source and available under the [MIT License](LICENSE).