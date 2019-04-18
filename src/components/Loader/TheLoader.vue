<template>
  <section class="flex flex-column flex-center">
    <span class="block loader"></span>
    <p class="h3">Fetching data...</p>
  </section>
</template>

<style>
/* via https://www.w3schools.com/howto/howto_css_loader.asp */
.loader {
  border: 0.75rem solid var(--grey);
  border-top: 0.75rem solid var(--blue);
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: spin 1.5s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
