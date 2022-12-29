<template>
  <div class="container m-10 mx-auto flex flex-col items-center">
    <header class="mb-5 text-4xl">Member Center</header>
    <section class="mb-5">
      <div class="tabs">
        <a class="tab tab-bordered text-lg">Sign Up</a>
        <a class="tab tab-bordered tab-active text-lg">Log In</a>
      </div>
    </section>
    <section class="mb-5">
      <form>
        <div class="formInput flex flex-col">
          <label for="user-email">Email</label>
          <input
            id="user-email"
            type="email"
            placeholder="foobar@example.com"
            class="input input-bordered mb-2 w-full max-w-xs" />
          <label for="user-password">Password</label>
          <input
            id="user-password"
            type="password"
            class="input input-bordered w-full max-w-xs" />
        </div>
        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text">Remember me</span>
            <input type="checkbox" class="checkbox" />
          </label>
          <a>Forgot your password?</a>
          <button class="btn">Log In</button>
        </div>
      </form>
    </section>
  </div>
</template>
<script lang="ts">
export default defineComponent({})
</script>
<style lang=""></style>
