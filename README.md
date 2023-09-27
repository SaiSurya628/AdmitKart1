AdmitKart1 - Mobile Verification App
AdmitKart1 is a simple mobile verification app built using React for the frontend and Node.js with SQLite for the backend. It allows users to enter their mobile number, receive an OTP (One-Time Password), and verify their mobile number.
TO See the Screens ==>
https://admit-kart1.vercel.app/login.png.png
https://admit-kart1.vercel.app/otp.png.png
https://admit-kart1.vercel.app/success.png.png

Table of Contents
Prerequisites
Getting Started
Project Structure
Usage
API Endpoints
Contributing
Prerequisites
Before you start, make sure you have the following prerequisites installed on your system:

Node.js (for both frontend and backend)
npm (Node Package Manager)
SQLite (for the backend)
Getting Started
Follow these steps to get the AdmitKart1 app up and running:

Clone the repository to your local machine:

bash
Copy code
git clone https://github.com/SaiSurya628/AdmitKart1.git
Navigate to the project directory:

bash
Copy code
cd AdmitKart1
Backend Setup
Navigate to the backend directory:

bash
Copy code
cd Server
Install the backend dependencies:

bash
Copy code
npm install
Initialize the SQLite database:

bash
Copy code
npm run init-db
Start the backend server:

bash
Copy code
npm start
The backend server will run on port 5000.

Frontend Setup
Open a new terminal window and navigate to the frontend directory:

bash
Copy code
cd frontend
Install the frontend dependencies:

bash
Copy code
npm install
Start the frontend development server:

bash
Copy code
npm start
The frontend development server will run on port 3000 by default. You can access the app in your web browser at http://localhost:3000.

Project Structure
The project is organized into two main directories:

frontend: Contains the React-based frontend code.
Server: Contains the Node.js-based backend code.
Usage
Open the AdmitKart1 app in your web browser at http://localhost:3000.

On the landing page, enter your mobile number and click "Sign in with OTP."

An OTP will be sent to your mobile number, and you will be redirected to the OTP verification page.

Enter the OTP received on popup alert in the provided input fields and click "Verify."

If the OTP is correct, you will be redirected to the success page, indicating that you have successfully logged in.

You can log out by clicking the "Log Out" button on the success page.

API Endpoints
/mobile (POST): Sends an OTP to the provided mobile number for verification.

/otp (PUT): Verifies the OTP entered by the user against the OTP sent to their mobile number.

Contributing
If you would like to contribute to this project, please follow these steps:

Fork the repository.

Create a new branch for your feature or bug fix:

bash
Copy code
git checkout -b feature/your-feature-name
Make your changes and commit them:

bash
Copy code
git add .
git commit -m "Add your commit message here"
Push your changes to your forked repository:

bash
Copy code
git push origin feature/your-feature-name
Create a pull request from your forked repository to the original repository.



Feel free to customize this README to include any additional information about your project or specific instructions for users or contributors.
