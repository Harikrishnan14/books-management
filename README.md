# Getting Started
# Initial Setup:

1. **Install Node.js :** Node.js is an open-source, cross-platform JavaScript runtime environment. You can download Node.js from the official website at https://nodejs.org/en/download/ or use your system's package manager.

   Check Node.js and npm Installation:
   Open a terminal ( or command prompt on Windows ) and run the following command to ensure Node.js is installed correctly:

   ![Image](https://github.com/user-attachments/assets/5b6a1362-a3a7-4997-a2ef-9d83be414541)

   [ NOTE : npm comes with Node.js by default, you don't have to install it separately ]

2. **Clone or Download the Code :**

   Clone the repository using the following command:
   ### `git clone https://github.com/Harikrishnan14/books-management.git`

   Then, navigate into the project folder:
   ### `cd books-management`

   Or alternatively, download the ZIP file from GitHub and extract it.

5. **Install Dependencies :**
   1. Open the terminal ( or command prompt on Windows ) ( or if you are using VS Code, you can use its terminal ) from the root folder and run the following command to install all the dependencies needed to run the application [ Don't close this terminal we will be using this later] :
      ### `npm i`
      
# Starting the Application:

1. On the terminal which you used to install the dependencies for the application, run the following command to start the application :
   ### `npm run dev`
   
2. After this, Go to 'http://localhost:5173'
3. If you want to see the hosted website, Go to 'https://books-management-hari14.vercel.app'

# Packages Used:

1. **Tailwind CSS :** Used for responsive design. It offers utility classes to quickly style elements without writing custom CSS from scratch. It's flexible and easy to customize.
2. **Material UI :** A React UI framework that provides pre-built, customizable components based on Google’s Material Design. It helps build responsive and modern interfaces quickly.
3. **Axios :** A promise-based HTTP client used to make API requests. It simplifies sending asynchronous requests to servers and handling responses or errors.
4. **Formik :** A form management library for React that simplifies handling form state, validation, and submission. It reduces boilerplate code and makes working with complex forms easier.
5. **Yup (used with Formik) :** A JavaScript schema builder for value parsing and validation. It's often used with Formik to define and enforce validation rules in a declarative way.
6. **react-router :** A standard library for routing in React applications. It enables navigation between different components/pages while keeping the UI in sync with the URL.
7. **react-toastify :** A lightweight and customizable library for displaying toast notifications in React. It’s easy to integrate and supports features like auto-dismiss, theming, and positioning.