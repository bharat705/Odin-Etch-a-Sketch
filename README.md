# Etch-a-Sketch

This project is a browser-based sketchpad that allows users to draw, erase, and experiment with various pen modes. It has been designed as part of [The Odin Project's curriculum](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/etch-a-sketch-project) to practice DOM manipulation skills and JavaScript event handling. You can toggle between different pen modes, use randomized colors, and apply various effects like progressive darkening.

## Table of Contents

- [Etch-a-Sketch](#etch-a-sketch)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Usage](#usage)
  - [How to Run](#how-to-run)
  - [Future Enhancements](#future-enhancements)
  - [Credits](#credits)

## Features

- **Grid Customization**: User-defined grid sizes, ranging from 1x1 to 100x100, allowing for flexible sketching areas.
- **Pen Mode**: Sketch using different pen colors chosen by the user.
- **Random Color Mode**: Option to randomize RGB values on every grid interaction.
- **Eraser Mode**: A dedicated eraser tool to clear individual grid squares.
- **Progressive Darkening Effect**: Each interaction with a grid square darkens it by 10% until it reaches black.
- **Progressive Opacity**: Each stroke gradually increases the opacity of the pen color.
- **Border Toggle**: Toggle the grid square borders on and off with the press of a button.

## Technologies Used

- **HTML5**: For structuring the webpage.
- **CSS3**: For styling the page and making the UI visually appealing.
- **JavaScript (ES6+)**: For DOM manipulation, event handling, and dynamic grid creation.
- **Flexbox**: For layout and positioning of elements on the page.
- **Git**: For version control.
- **GitHub**: For hosting the project repository.

## Usage

1. **Select Grid Size**: Use the range input to specify the number of squares per side for the grid.
2. **Toggle Borders**: Use the 'Show Borders' button to toggle the grid square borders on or off.
3. **Select Pen Color**: Choose a color from the color picker to set the pen color.
4. **Random Colors**: Activate random colors by clicking the 'Random Color' button.
5. **Eraser**: Use the eraser button to erase specific squares.
6. **Reset Sketch**: Use the 'Reset' button to clear the entire sketchpad and start over.
7. **Darkening Mode**: Activate darkening mode to gradually darken squares with each mouseover.

## How to Run

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/etch-a-sketch.git
   ```
2. Open `index.html` in your preferred browser to start drawing.

## Future Enhancements

- Option to save the sketch as an image.
- Adding keyboard shortcuts for quick access to tools like the eraser and random color.

## Credits

This project is part of [The Odin Project](https://www.theodinproject.com/), an open-source curriculum designed to teach full-stack web development.
