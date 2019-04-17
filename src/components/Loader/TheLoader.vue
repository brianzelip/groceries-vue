<template>
  <section class="flex justify-center">
    <p class="loading h3">Fetching data&nbsp;</p>
  </section>
</template>

<style>
/* via https://stackoverflow.com/a/54349616/2145103 */
.loading:after {
  content: "\00a0\00a0\00a0";
  animation: progress-ellipsis 500ms infinite;
}

@keyframes progress-ellipsis {
  0% {
    content: "\00a0\00a0\00a0";
  }
  30% {
    content: ".\00a0\00a0";
  }
  60% {
    content: "..\00a0";
  }
  90% {
    content: "...";
  }
}

/* 
via https://codepen.io/thetallweeks/pen/yybGra

.loading:after {
  overflow: hidden;
  display: inline-block;
  vertical-align: bottom;
  animation: ellipsis steps(4, end) 900ms infinite;
  content: "\2026"; /* ascii code for the ellipsis character */ /*
  width: 0px;
}

@keyframes ellipsis {
  to {
    width: 1.25em;
  }
}

.loading:after {
  content: "\00a0\00a0\00a0";
  animation: progress-ellipsis 500ms infinite;
}

@keyframes progress-ellipsis {
  0% {
    content: "\00a0\00a0\00a0";
  }
  30% {
    content: ".\00a0\00a0";
  }
  60% {
    content: "..\00a0";
  }
  90% {
    content: "...";
  }
}

*/
</style>
