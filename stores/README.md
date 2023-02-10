# pinia store

## useCartStore.ts
On store registered, create a cart with random id and mark the created time.

In <code>App.vue</code>, check if cart already exists in localStorage by calling <code>useCartStore.getCart()</code>.

<code>function addToCart</code>: create a newItem with relevant info => push newItem to cart => update localStorage

<code>function deleteFromCart</code>: find targetIndex in cart => delete target by array.splice(targetIndex, 1) => update localStorage

## useAuthStore.ts

checkout README.md in [nuxt3-auth](https://github.com/drinkthis4me/Nuxt3-auth)