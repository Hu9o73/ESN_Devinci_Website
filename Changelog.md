# Changelog

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