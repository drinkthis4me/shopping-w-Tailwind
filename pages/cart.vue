<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl px-5 py-10">
      <!-- Title -->
      <h2 class="text-2xl font-bold">Cart</h2>
      <!-- Items -->
      <div class="mt-5 border-y-2">
        <ul class="divide-y">
          <li class="py-5">
            <div class="flex">
              <div class="mr-5 shrink-0 self-center bg-white">
                <NuxtLink to="/">
                  <img
                    src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt="White shirt on gray wall"
                    class="h-20 w-20 object-cover object-center hover:opacity-75 sm:h-24 sm:w-24" />
                </NuxtLink>
              </div>
              <div class="flex flex-grow flex-col">
                <NuxtLink to="/">
                  <h3 class="hover:text-primary text-lg font-medium">
                    Item #1
                  </h3>
                </NuxtLink>
                <p class="hidden text-sm text-slate-500 sm:inline-block">
                  Item description Lorem ipsum dolor sit, amet consectetur
                </p>
                <div class="flex flex-wrap sm:space-x-1">
                  <div class="flex">
                    <label for="size" class="label">
                      <span class="label-text">size</span>
                    </label>
                    <select name="size" id="size" class="bg-white pl-1 text-sm">
                      <option value="XS">XS</option>
                    </select>
                  </div>
                  <div class="flex">
                    <label for="color" class="label">
                      <span class="label-text">color</span>
                    </label>
                    <select
                      name="color"
                      id="color"
                      class="bg-white pl-1 text-sm">
                      <option value="white">white</option>
                    </select>
                  </div>
                  <div class="flex">
                    <label for="quantity" class="label">
                      <span class="label-text">Quantity</span>
                    </label>
                    <select
                      name="quantity"
                      id="quantity"
                      class="bg-white pl-1 text-sm">
                      <option value="1">1</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="flex flex-col items-center justify-between">
                <div class="block text-lg font-medium">NT$4,000</div>
                <a href="#">
                  <svg
                    class="hover:text-secondary"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9M7 6h10v13H7V6m2 2v9h2V8H9m4 0v9h2V8h-2Z" />
                  </svg>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- Info -->
      <div class="mt-5 flex flex-col space-y-3">
        <div class="flex justify-between">
          <p class="font-medium">
            Subtotal
            <button
              class="h-3 w-3 rounded-full bg-slate-800 text-xs text-white">
              <svg
                class="h-3 w-3"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M11.07 12.85c.77-1.39 2.25-2.21 3.11-3.44c.91-1.29.4-3.7-2.18-3.7c-1.69 0-2.52 1.28-2.87 2.34L6.54 6.96C7.25 4.83 9.18 3 11.99 3c2.35 0 3.96 1.07 4.78 2.41c.7 1.15 1.11 3.3.03 4.9c-1.2 1.77-2.35 2.31-2.97 3.45c-.25.46-.35.76-.35 2.24h-2.89c-.01-.78-.13-2.05.48-3.15zM14 20c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2z" />
              </svg>
            </button>
          </p>
          <span class="">NT$ 4,000</span>
        </div>
        <div class="flex justify-between">
          <p class="font-medium">Estimated shipping and fee</p>
          <span class="">0</span>
        </div>
        <div class="flex justify-between border-y py-4">
          <p class="font-medium">Total</p>
          <span class="">NT$ 4,000</span>
        </div>
        <div class="form-control">
          <button class="btn btn-primary rounded">Check Out</button>
          <a
            href="#"
            class="link link-hover hover:text-primary mt-2 text-center"
            >Continue shopping</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
