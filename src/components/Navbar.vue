<script setup>

import { ref } from 'vue';

const navbarHidden = ref(true);
const activeLink = ref('home');

function changeActive(id) {
  activeLink.value = id;
}

function toggleNavbar() {
  navbarHidden.value = !navbarHidden.value;
}

</script>

<template>

<header class="w-full px-4 py-3 justify-stretch bg-violet-400 sticky top-0 lg:flex lg:pr-6 lg:justify-end dark:bg-gray-800" style="z-index: 100">
  <button @click="toggleNavbar" type="button" class="inline-flex p-2 text-gray-500 rounded-md lg:hidden hover:bg-purple-300 focus:outline-none focus:ring focus:ring-purple-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" /></svg>
  </button>

  <nav :class="[ navbarHidden ? 'h-0 lg:h-full' : 'h-full' ]"
    class="w-full overflow-hidden lg:w-auto">
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
        <a :class="{ active: activeLink === 'certificate' }"
          @click="changeActive('certificate')"
          href="#certificate" class="link group">
          Certificate
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
      <li>
        <a :class="{ active: activeLink === 'contact' }"
          @click="changeActive('contact')"
          href="#contact" class="link group">
          Contact
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
  @apply text-cyan-300 font-bold lg:text-violet-700;
}

.link.active .bottomline {
  @apply lg:border-b-2;
}

</style>