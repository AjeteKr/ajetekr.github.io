import React from "react";
import TicTacToeImage from "../../assets/images/projects/tictactoeimage.png";
import GameplayImage from "../../assets/images/projects/gameplay.png";
import WinImage from "../../assets/images/projects/win.png";
import DrawImage from "../../assets/images/projects/draw.png";

const TicTacToePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-700 via-purple-900 to-gray-900 p-6">
      <h1 className="text-7xl font-extrabold text-white text-center mb-6">Tic Tac Toe Project</h1>
      <img src={TicTacToeImage} alt="Tic Tac Toe Project" className="w-full max-w-3xl rounded-lg shadow-lg mb-6" />
      <p className="text-lg text-white text-center mb-4">Classic Tic Tac Toe game built with React for fun gameplay experience.</p>
      <p className="text-md text-white text-center mb-8">Date: 2024-10-14</p>
      <div className="bg-gray-800 shadow-2xl rounded-lg p-8 w-full max-w-3xl">
        <h2 className="text-4xl font-semibold text-white mb-4">Project Description</h2>
        <p className="text-white mb-6">The Tic Tac Toe game lets you challenge your friends or an AI opponent in a simple yet strategic board game experience. You can play as "X" or "O" and aim to align three of your symbols horizontally, vertically, or diagonally.</p>
        <h3 className="text-2xl font-semibold text-white mb-2">Key Features:</h3>
        <ul className="list-none mb-4 text-white space-y-8">
          <li className="mb-8">
            <span className="text-white">🎮 Simple Gameplay: Just click on the board to make your move.</span>
            <img src={GameplayImage} alt="Gameplay" className="w-full mt-4 rounded-lg" />
          </li>
          <li className="mb-8">
            <span className="text-white">🏆 Winning Logic: The game detects when a player wins or when the game ends in a draw.</span>
            <img src={WinImage} alt="Win Condition" className="w-full mt-4 rounded-lg" />
          </li>
          <li className="mb-8">
            <span className="text-white">🤝 Draw Condition: If neither player wins, the game ends in a draw.</span>
            <img src={DrawImage} alt="Draw Condition" className="w-full mt-4 rounded-lg" />
          </li>
          <li className="mb-8">
            <span className="text-white">🔄 Play Again: Easily restart the game for another round of fun.</span>
          </li>
        </ul>
        <h3 className="text-2xl font-semibold text-white mb-2">How to Play:</h3>
        <ul className="list-disc list-inside mb-4 text-white">
          <li className="mb-2 text-white">👀 Open the game board and choose between "X" or "O".</li>
          <li className="mb-2 text-white">👉 Click on an empty square to place your symbol.</li>
          <li className="mb-2 text-white">🎯 Align three symbols in a row to win, or keep playing if it's a draw.</li>
          <li className="mb-2 text-white">🔄 Click "Restart" to start a new game.</li>
        </ul>
        <h3 className="text-2xl font-semibold text-white mb-2">Technologies Used:</h3>
        <ul className="list-disc list-inside text-white">
          <li className="mb-2 text-white">⚛️ ReactJS: For rendering the game and managing state.</li>
          <li className="mb-2 text-white">🎮 Tailwind: For game board design and animations.</li>
        </ul>
      </div>
      <div className="text-center mt-6">
        <a href="https://github.com/AjeteKr/TicTacToe" className="text-blue-400 hover:underline text-lg">View on GitHub</a>
      </div>
    </div>
  );
};

export default TicTacToePage;
