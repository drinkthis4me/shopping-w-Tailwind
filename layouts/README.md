# layouts

## default.vue
A <code>Navbar</code> at the top and a <code>Footer</code>

- components/Navbar.vue
  - Product group show on large screen, hide on small screen
  - Search icon toggle search bar below the navbar
  - Cart icon direct to /cart
  - Profile icon direct to /users/login if not logged in yet, otherwise show a dropdown list.

- components/Footer.vue
  - All paths for the website map.
  - A form for subscribing. On subscribe click, call [jsonplaceholder](https://jsonplaceholder.typicode.com/)'s testing API.

## errorLayout.vue
Layout for <code>error.vue</code>.

A error title and a button for going back to home (/).

Todo: add error messages explain what went wrong.