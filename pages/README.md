# Structure

Nuxt 3 uses folder structure to control routing.

<code>/users/login.vue</code> creates a path to '/users/login'

File name with square brackets turned into dynamic route parameter.

A path to 'products/detail-foobar' directs to <code>/products/detail-[id].vue</code> where foobar is the parameter of id


```
├── checkout
│   ├── shipping.vue
├── pages
│   ├── about.vue
│   ├── contact.vue
│   ├── faqs.vue
│   ├── privacy-policy.vue
│   ├── terms-of-service.vue
│   └── terms-of-service.vue
├── products
│   ├── product-[group]
│   │   └── index.vue
│   ├── detail-[id].vue
│   └── index.vue
├── users
│    ├── forgot-password.vue
│    ├── login.vue
│    ├── logout.vue
│    ├── order-status.vue
│    ├── profile.vue
│    ├── returns.vue
│    └── settings.vue
├── cart.vue
└── index.vue
```

# / (root to index.vue)
Home page for the website.

![Screenshot of the home page](../docs/Screenshot%202023-02-25%20at%2011-36-08%20Screenshot.png)

A Navbar at the top and a footer ate the bottom.

A carousel with 4 placeholder image set on auto repeat.

Collection cards same as /product/ listed all group product

# /products/product-[group]

![Screenshot of /products/product-tops](../docs/Screenshot%202023-02-25%20at%2011-36-27%20Screenshot.png)

A dynamic page URL for specific groups. There are:
- product-tops
- product-bottoms
- products-socks
- products-others
  
for valid groups.

Other invalid group gets thrown a 404 error.

Each group displays a list of product in cards.

This page has responsive grid. Resize your window to see the difference.

# /product/detail-[id]

Product details include photos, description and a form for adding item to cart.

![Screenshot of /product/detail-id](../docs/Screenshot%202023-02-25%20at%2011-36-58%20Screenshot.png)

- Page fetches matching-id product from server /api/product. (Currently there is only one product on the server)
- During async fetching, display 'Loading ...' message to website user.(Ugly I know)
- Main components in the page: 
  - [Breadcrumb](https://github.com/drinkthis4me/shopping-w-Tailwind/blob/main/components/PageBreadcrumb.vue) to display current path
  - [Carousel](https://github.com/drinkthis4me/shopping-w-Tailwind/blob/main/components/ProductCarousel.vue) and [Carousel indicator](https://github.com/drinkthis4me/shopping-w-Tailwind/blob/main/components/ProductCarouselIndicator.vue) for product photos
  - Form for cart
  - Toast popup notification when item added to cart successfully
- This page has responsive grid. Resize your window to see the difference.


# /cart

![Screenshot of /cart](../docs/Screenshot%202023-02-25%20at%2011-37-22%20Screenshot.png)

List of items from useCartStore.cart.

If the cart is empty, display message and a button navigate back to home.

useCartStore passes items info as props to <code>Components/CartItem.vue</code>. 

<code>Components/CartItem.vue</code> allows user to change item quantity or delete it from the cart.

A watcher watches whenever cart.items changes and update the new cart to localStorage.

Cart's information are at bottom of the list (or next to the list when using large screen).

The shipping cost is 150 when subtotal is below 3000, otherwise 0.

The check out button direct user to /checkout/shipping.

# /checkout/shipping

![Screenshot of /checkout/shipping](../docs/Screenshot%202023-02-25%20at%2011-37-42%20Screenshot.png)
- A middleware <code>cart-w-items-only.ts</code> checks if there is item in cart before redirect to this page.
- /layouts/checkout.vue is used for this page. (I should probably use layout template for other pages as well.)
- Order summary is stacked and collapsible on small screen, and is displayed as aside on mid to large screen. 
- Inside the form, multiple \<input>s are rendered using <code>components/FormInput.vue</code>

Todo: add [綠界科技 ECPay](https://www.ecpay.com.tw/)'s API to handle payment and logistic information.

# /pages/*
Basic information for website visiters. Filled with lorem ipsum for now.

## Components in this page
- Carousel and Carousel grabbed from daisyUI
- Form has three inputs inside: input[type="radio"] for color; select for size; input[type="number"] for quantity
- On 'Add to cart' click, call useCartStore.addToCart() to update cart and toggle a toast card which close after 5 seconds.

# /product/
A page shows a list of all group.

This page has responsive grid. Resize your window to see the difference.

# /users/*

Authentication for website members.

See [users/Readme.md](https://github.com/drinkthis4me/shopping-w-Tailwind/tree/main/pages/users) for more details.