<script setup>

import { ref } from 'vue';

const activeLink = ref('home');

function changeActive(id) {
  activeLink.value = id;
}

</script>

<template>

<header class="w-full px-4 flex justify-stretch lg:pr-6 bg-violet-400 lg:justify-end">
  <nav class="hidden w-full py-3 lg:w-auto">
    <ul class="block lg:flex gap-4">
      <li>
        <a :class="{ active: activeLink === 'home' }"
          @click="changeActive('home')"
          href="#home" class="link group">
          Home
          <span class="bottomline lg:group-hover:border-b-2"></span>
        </a>
      </li>
      <li>
        <a :class="{ active: activeLink === 'about' }"
          @click="changeActive('about')"
          href="#about" class="link group">
          About
          <span class="bottomline lg:group-hover:border-b-2"></span>
        </a>
      </li>
      <li>
        <a :class="{ active: activeLink === 'tech' }"
          @click="changeActive('tech')"
          href="#tech" class="link group">
          Tech Stack
          <span class="bottomline lg:group-hover:border-b-2"></span>
        </a>
      </li>
      <li>
        <a :class="{ active: activeLink === 'projects' }"
          @click="changeActive('projects')"
          href="#projects" class="link group">
          Projects
          <span class="bottomline lg:group-hover:border-b-2"></span>
        </a>
      </li>
    </ul>
  </nav>
</header>

</template>

<style scoped>

.link {
  @apply relative block py-1 pl-2 text-gray-700 text-lg font-semibold border-b border-purple-200 lg:border-0 lg:p-0 transition
    hover:bg-purple-300 lg:hover:bg-transparent;
}

.link .bottomline {
  @apply w-full h-2 m-0 absolute bottom-0 left-0 border-cyan-200;
}

.link.active {
  @apply text-violet-700 font-bold;
}

.link.active .bottomline {
  @apply lg:border-b-2;
}

</style>