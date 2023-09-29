<script setup>

import { ref } from 'vue';

const navbarHidden = ref(false);
const activeLink = ref('home');

function changeActive(id) {
  activeLink.value = id;
}

function toggleNavbar() {
  navbarHidden.value = !navbarHidden.value;
}

</script>

<template>

<header class="w-full px-4 py-3 lg:flex justify-stretch lg:pr-6 bg-violet-400 lg:justify-end">
  <button @click="toggleNavbar" type="button" class="inline-flex p-2 text-gray-500 rounded-md lg:hidden hover:bg-purple-300 focus:outline-none focus:ring focus:ring-purple-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" /></svg>
  </button>

  <nav :class="[ navbarHidden ? 'h-0' : 'h-full' ]"
    class="w-full overflow-hidden lg:w-auto lg:h-full">
    <ul class="gap-4 mt-4 lg:flex lg:mt-0">
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