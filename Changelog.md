# Changelog

## V0.0.18
- Frontend 0.0.16 / Backend 0.0.11
- Added SSL certificate support on backend side

## V0.0.17
- Frontend 0.0.16 / Backend 0.0.10
- Added the /api-docs route to the backend to access the API's documentation.
- Added a protected endpoint to retrieve the users, their first and last name, and their role.
- Admins can now access the list of members and see their corresponding id to update their roles easily from their dashboard.
- Commented out the password modification section as it's not a priority at the moment.
- Commented out the alert placeholder on the user's profile.
- Commented out the "I'm interested" button on the cards (until the option is implemented).

## V0.0.16
- Frontend 0.0.15 / Backend 0.0.9
- Added an event list to the bureau dashboard, with an option to delete the event
    - The event isn't deleted from the database but is "inactivated".
    - This means that it don't appear anymore on the homepage, but still exists in the database.
    - The corresponding API routes are, obviously, protected and role-restricted.
- Commented-out the useless "Event" and "Dashboard" tabs on the dashboard navbar.
    - Users are redirected to the "My Profile" page by default.

## V0.0.15
- Frontend 0.0.14 / Backend 0.0.8
- Added the 'events' table to the database.
- Added event model to the backend, for easy management with sequelize.
- Frontend-wise, given the option for admins and board (bureau) members to add events to the event lists shown on the homepage from their private board dashboard.
    - Events require a title and category, and are automatically 'signed' ('/authored') by the user who added it.
    - Image and description are optional.

## V0.0.14
- Frontend 0.0.13 / Backend 0.0.7
- Frontend and backend codes are now formatted according to standards.
- Change of the website name from 'Frontend' to 'ESN Devinci' in the navbars.

## V0.0.13
- Frontend 0.0.12 / Backend 0.0.6
- Deployed to esn.hugobnl.fr
    - Hosted on a VPS, server running on Nginx.
    - Changed the filepaths to access public ressources (adding '/').
    - Removed SSR, to make the deployment easier.

## V0.0.12
- Frontend 0.0.11 / Backend 0.0.5
- Added user profile page.
    - User is now able to modify his personal data (nickname, email, scholarship details)
    - Informations are retrieved by asking the database, imputting your JWT token.
        - This is to ensure that a connected user don't simply change its id in the localStorage to try and access someone else's informations.
        - Using the JWT token ensures heavy security. An attacker would need a valid token to access another user information. (= knowing who generated a token alongside its timestamp).
    - The modifications are done securely:
        - When modifying, the id of the user to modify is retrieved from the JWT token
        - You need to enter your password to confirm changes.
        - Password verification is done by asking the database, using the JWT token. Note: passwords are stored hashed on the database.

## V0.0.11
- Frontend 0.0.10 / Backend 0.0.4
- Added role-limited endpoints (protection regarding the user role to access the endpoint)
- Added a simple put endpoint to modify a given user role
    - Access granted to Admins and President(s)
- Added an interface to access this put endpoint in the Admin Dashboard

## V0.0.10
- Frontend 0.0.9 / Backend 0.0.3
- Added static pages, to make the home page more lively.
    - FAQ
    - What's ESN ?
    - Meet the team
    - How to join us ?

## V0.0.9
- Frontend 0.0.8 / Backend 0.0.3
- Added sub-menus to dashboard with placeholders (not use yet !)
- Ensured the security of the different sub-menus.
    - All sub-menus are children path of /dashboard
        - The protection of /dashboard is thus transposed to its children, as an additional layer.
    - Only admins can see and access the admin page for instance.
    - Only the members part of the bureau can access the bureau page.
    - Done with more Angular Guards and some new functions inside of the auth service.

## V0.0.8
- Frontend 0.0.7 / Backend 0.0.3
- Added Angular Guard.
    - Redirects user to login page when not connected while trying to access a guarded page.
- Added the dashboard component placeholder and guarded route.

## V0.0.7
- Frontend 0.0.6 / Backend 0.0.3
- Small frontend correction : Spaced sign-up/log-in buttons for small screens
- Added protected routes support in the backed. 


## V 0.0.6
- Frontend 0.0.5 / Backend 0.0.2
- Enhanced the error and success messages for user log/sign-in.

## V 0.0.5
- Frontend 0.0.4 / Backend 0.0.2
- Added dotenv, JWT dependencies to the backend
- Working with .env file in the backend, to configure the database mostly
- Added JWT authentication, Middleware, Interceptor (No guards/protected endpoints yet)
- User can Sign up and login from the frontend
- Sessions are persistent for 2 hours
- Added a button to log-out when connected, and to access your personal space (not implemented yet)

## V 0.0.4

- Frontend 0.0.3 / Backend 0.0.1
- Added the backend base

## V 0.0.3

- Added Sign up / Login pages (placeholders for now)
- Added redirection to Error404 page when entering an invalid URL 

## V 0.0.2

- Upgrade of the basic architecture.
    - Before : 1 Page = 1 Component
    - Now : 1 Page = Multiple components working together
    - More versatile and easier page creation
- Added the Home Page.
    - Links towards external websites working (Instagram, Facebook, etc...)
    - App routing not yet implemented !
- Update the navbar to fit ESN needs. 

## V 0.0.1

- Project creation
- Added the navbar