# Basic React Calculator 🧮

## Overview
A simple and intuitive web-based calculator application built using React, featuring responsive design and basic arithmetic operations.

![image](https://github.com/user-attachments/assets/4b64121e-14a1-4fb9-9436-923e04dba2e4)


## Features
- Supports addition, subtraction, multiplication, division
- Decimal point input
- Delete (DEL) functionality
- Real-time result preview
- Prevents invalid operator sequences
- Responsive and clean user interface

## Technical Implementation Details
- Utilizes React's `useState` hook for state management
- Dynamic digit generation
- Input validation to prevent invalid calculations
- Displays both ongoing calculation and current result

## Key Components
- State variables: 
  - `calc`: Current calculation string
  - `result`: Calculated result
- Functions:
  - `updateCalc()`: Handles input of digits and operators
  - `createDigits()`: Dynamically generates number buttons
  - `calculate()`: Performs final calculation
  - `deleteLast()`: Removes last entered character

## Technologies Used
- React
- JavaScript (ES6+)
- CSS with custom variables

## Styling Highlights
- Responsive design
- Custom color variables
- Hover effects on buttons
- Flexbox layout
- Box shadow for depth

## Installation 

Clone the repository:
bashCopygit clone https://github.com/itayh2/react-calculator.git

Navigate to the project directory:
cd react-calculator

Install dependencies:
npm install

Start the development server:
npm start

How to Use:

Click numerical buttons to input numbers
Use operation buttons (+, -, ×, ÷) to perform calculations
Press "=" to see the result
Use "AC" to clear the current calculation

## License
This project is open-source and available under the MIT License.
