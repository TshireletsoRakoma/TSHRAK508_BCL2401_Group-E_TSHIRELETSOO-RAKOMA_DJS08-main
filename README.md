After cloning the repo, run npm install to install the dependencies

### Application Overview

This is a React application that uses React Router for client-side routing. The application has two main sections: a public section and a host section. The public section includes pages for the home, about, vans, and login. The host section includes pages for the dashboard, income, reviews, and van management.

### Folder Structure

pages: Contains all the page components, including Home, About, Vans, VanDetail, Login, Dashboard, Income, Reviews, and NotFound.
components: Contains reusable components, including Layout and HostLayout.
server.js: Not included in the provided code, but presumably contains server-side logic.
Routing

The application uses React Router to define routes for the different pages. The routes are defined in the App.js file and include:

/: Home page
/about: About page
/vans: Vans page
/vans/:id: Van detail page
/login: Login page
/host: Host dashboard page (protected by AuthRequired component)
/host/income: Host income page
/host/reviews: Host reviews page
/host/vans: Host vans page
/host/vans/:id: Host van detail page
/host/vans/:id/pricing: Host van pricing page
/host/vans/:id/photos: Host van photos page
\*: NotFound page (catch-all route)

### Components

Layout: A reusable layout component used for the public section.
HostLayout: A reusable layout component used for the host section.
AuthRequired: A component that protects routes from unauthorized access.

### Getting Started

To get started with this application, clone the repository and run npm install to install the dependencies. Then, run npm start to start the development server. Open http://localhost:3000 in your browser to access the application.
