# Unit Converter Web Application

This is a simple Node.js web server for a **Unit Converter** application. The application provides an interface for converting between different units of **Length**, **Weight** and **Temperature**. This README will help you understand the project, its setup, and usage.

It is inspired from the [Unit-Converter](https://roadmap.sh/projects/unit-converter) project featured in the [Backend Roadmap](https://roadmap.sh/backend) from [roadmap.sh](https://roadmap.sh/).

## Features
- Convert between different units of **Length** (e.g., meters, feet).
- Convert between different units of **Weight** (e.g., kilograms, pounds).
- Convert between different units of **Temperature** (e.g., Celsius, Fahrenheit).
- Simple HTML interface for user interaction.

## Project Structure
```
your-project-folder/
├── public/
│   ├── js/
│   │   └── script.js             # Client-side JavaScript for form handling
│   ├── css/
│   │   └── style.css             # CSS for styling the pages
├── utils/
│   └── conversions.js            # Conversion functions for length, weight, and temperature
├── views/
│   ├── length.html               # HTML page for length conversion
│   ├── weight.html               # HTML page for weight conversion
│   └── temperature.html          # HTML page for temperature conversion
├── index.js                      # Main server file (Node.js server)
├── package.json                  # Node.js dependencies and scripts
└── README.md                     # Project documentation
```

## Getting Started

### Prerequisites
- **Node.js**: Ensure that Node.js is installed. You can download it from [Node.js official website](https://nodejs.org/).

### Installation
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd your-project-folder
   ```

2. **Install dependencies**:
   There are no dependencies to install, but you can use `npm init` to create `package.json` and start managing the project.

### Running the Server
- Start the server by running:
  ```bash
  node index.js
  ```
- The server will run at `http://localhost:3000`.

## Usage
- **Length Conversion**: Navigate to `/length.html` to convert between length units.
- **Weight Conversion**: Navigate to `/weight.html` to convert between weight units.
- **Temperature Conversion**: Navigate to `/temperature.html` to convert between temperature units.

You can interact with the form on each page to perform conversions.

### Example URLs
- [Length Conversion Page](http://localhost:3000/length.html)
- [Weight Conversion Page](http://localhost:3000/weight.html)
- [Temperature Conversion Page](http://localhost:3000/temperature.html)

### Example Images
![image](https://github.com/user-attachments/assets/a60d78aa-34d9-4223-a1af-34136ee929ce)
![image](https://github.com/user-attachments/assets/19cf9691-3d22-4d3f-a4da-668218b01f4a)

## Conversion Logic
The conversion logic is handled using the functions located in `utils/conversions.js`. This file exports three conversion functions:
- `convertLength(fromType, toType, value)`
- `convertWeight(fromType, toType, value)`
- `convertTemperature(fromType, toType, value)`

These functions are called based on the request URL (e.g., `/convertLength`, `/convertWeight`, `/convertTemperature`) to provide the correct converted value.

## Technologies Used
- **Node.js**: For server-side logic.
- **HTML, CSS, JavaScript**: For the front-end.

## Improvements & Future Work
- Add a **user-friendly UI** for better usability.
- Implement a **REST API** to handle conversions for external clients.
- Add **unit tests** for conversion functions.
- Improve **error handling** for invalid input values.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Contact
If you have any questions, feel free to contact me at dima2191@gmail.com.

