## NyumbaHub MERN Application

##### This is the ReadMe for the overall application

NyumbaHub is a vacant houses finding service based in Kenya. It includes a non-relational database MongoDB, Node/Express.js RESTful API hosted as a serverless function, and a React frontend where the house properties data is served to.

#### Backend

The API employs the MVC design pattern and it includes a UI where users can interact with it efficiently, [see the UI here](https://nyumbahub.netlify.app).

With the help of mongoose ODM(Object-Data Modelling), schemas for the 4 models used throughout the application are defined. Logic and functionality for the views are implemented in the controllers dir with a folder for each group namely user, property, type and category controllers. - MVC

The backend has public routes that are accessible by the public and private routes which are protected by JSON Web Token (JWT) and are accessed either after signing in or can only be accessed by privileged users.

Images are uploaded to cloudinary. Thanks to multer, the image files(maximum is 10) are received and stored in multer storage with a formatted name(request fieldname + time now + 8 random numbers) and file type(.jpg). They are then fetched and resized to 400 X 400 by sharp one at a time. Upon successful upload to cloudinary, the image url is appended to the image urls array for that property and the multer stored's image is deleted.

The backend also accepts URL query from a request to query the database and return filtered and/or sorted response data, or select the fields to return in a response.

More about the backend [see the NyumbaHub API's readMe](https://github.com/pptrgi/nyumbahub_api_serverless_function)

#### Frontend

The application's frontend includes an aesthetic, functional and easy to use fully responsive UI employing code-splitting and lazy loading to boost performance.

With a defined layout for all pages in this application, React Router handles routing, helps pass state via a route in some parts of the application, and, not forgetting page scrolling.

For navigation, the application includes a number of options including breadcrumbs, hamburger menu for smaller devices, header section for bigger breakpoints and paginated properties.

There's a green dot on the user's avatar that appears when the user is currently signed in to their account. The account panel provides easy access to user-related operations including signin, register, manage account page links and signout button. What shows on the panel depends on the user's current state(are they signed in or not).

The application goes beyond filtering and sorting with url query. That means there's filtering and sorting of backend's response properties on the frontend side for select pages including sorting found results in searchResults page, and filter and sort in SingleType and SingleCategory pages.

Some routes are accessed conditionally. As a result, the frontend has open and private routes. Open routes are accessible when the user isn't or needs to signin or register, for instance, if they're already signed in, they can't access signin and register pages.

Private routes are protected and they need you to be signed in to access them, such routes include the wishlist page and pages to manage user account.

User experience is key. Putting that in mind, NyumbaHub has included URL encoded Whatsapp texts, and subject and body for emails to make it easier for users who are contacting us to enquire or make their property interests known to us.

Dealing with forms(strictly auth-related forms), the NyumbaHub frontend has created a template for input fields and employed Yup to create form schemas then Formik to consume the defined schemas and manage the form operations.

Making API calls without visually showing it on a page can be confusing for users. For this reason, the frontend uses react-spinners library to show loading state when api requests are made.

The application includes horizontal scrolling for properties on Featured, New Listings and Randomly Selected sections of the home page. Horizontal sliding also comes in handy in compare page when the user is comparing different properties.

With Redux and redux toolkit the application is able to manage the state effectively, thanks to createAsyncThunk() the frontend can make API calls and handle loading, success and error states in async operations.

Also included in the application is the well-outlined terms of service in the Terms of Service page and privacy policy in the Privacy Policy page

##

### Main Features of the overall application include:

**Backend Features**

- Serverless
- Authentication and authorization
- Protected routes with JSON Web Token (JWT)
- Access token regeneration with a refresh token stored in a cookie
- MongoDB database connection
- User reset forgotten password
- Images upload
- User interface

**Frontend Features**

- Code-splitting and Lazy loading
- State management
- Fully responsive
- Private and open routes
- Pagination
- Breadcrumbs
- Horizontal scrolling
- Dynamic pages titling
- Privacy Policy
- Terms of Service
- URL encoded Whatsapp text and email subject/body
- Open Graph meta tags

**Others**

- Filter and sort
- Routing
- Admin dashboard in the works

##

### Overall Technologies Used

| Frontend Technologies | Backend Technologies |
| :-------------------- | :------------------- |
| React                 | NodeJS               |
| React Router          | Express.js           |
| Tailwind CSS          | Mongoose             |
| React Redux           | MongoDB              |
| Redux Toolkit         | Cloudinary           |
| React Icons           | Multer               |
| EmailJS               | Nodemailer           |
| React Paginate        | JWT                  |
| React Helmet          | Serverless-http      |
| React Toastify        | Cors                 |
| Axios                 | Cookie-parser        |
| Yup                   | Netlify-cli          |
| Formik                | Sharp                |
| React Persist         |
| React Spinners        |

##

### Installation

[Refer to the backend readme for backend installation](https://github.com/pptrgi/nyumbahub_api_serverless_function#installation)

For the frontend,

1. Clone the repository `https://github.com/pptrgi/nyumbahub-frontend.git`
2. Then navigate to the cloned project's dir `cd nyumbahub-frontend`
3. Run `npm install` to install all dependencies
4. Start the development server with `npm start`

##

### Usage

Once you have cloned, installed and successfully started your dev server you can modify the application to your liking.

##

### Contributing

To contribute to this project, open a pull request

##

### Acknowledments

Special thanks to [Unsplash](https://unsplash.com) and [Perfect Hideaways Invest](https://perfecthideawaysforsale.co.za) for the images used in this application.

I want to exclusively and abundantly thank all the creators of the packages that this application depend on to make it work, as their creations have brought NyumbaHub to life. Thank you.
