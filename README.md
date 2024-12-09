# Basic React Calculator 🧮

## Overview
A simple and intuitive web-based calculator application built using React, featuring responsive design and basic arithmetic operations.

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

## License
This project is open-source and available under the MIT License.
