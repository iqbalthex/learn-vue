<script setup>

import { ref } from 'vue';

import certificates from '../../certificates.json';


function atMouseMove(index, e) {
  const { clientWidth, clientHeight } = e.target;

  const posX = (e.offsetX / clientWidth)  * 100;
  const posY = (e.offsetY / clientHeight) * 100;

  const wrapper = document.querySelector(`[data-wrapper="${index}"]`);

  wrapper.style.setProperty('--x', `${posX}`);
  wrapper.style.setProperty('--y', `${posY}`);
}

</script>

<template>
  <section id="certificate" class="flex flex-col min-h-screen p-4 pt-16 items-center bg-gray-200 lg:px-8 dark:bg-gray-800">
    <h2 class="text-4xl font-bold">Certificates</h2>
    <p class="text-xl">These are certified knowledge I have</p>
    <ul class="w-full flex flex-col gap-4 mt-4">
      <li v-for="certificate, index in certificates"
        class="flex flex-col justify-center items-center gap-x-12 gap-y-4 p-4 mb-4 md:flex-row">
        <div :class="{ 'md:order-2': index % 2 === 0 }"

        class="certificate-wrapper relative p-0.5 overflow-hidden rounded-xl md:w-[500px]" :data-wrapper="index">
          <img :src="certificate.img"
            :alt="certificate.title"
            class="relative shadow-md rounded-xl cursor-pointer transition duration-300 hover:shadow-xl"
            style="z-index: 10"
            @mousemove="atMouseMove(index, $event)" />
        </div>
        <div :class="{ 'md:text-right': index % 2 === 0 }"
          class="md:w-[400px]">
          <h4 class="mb-4 text-2xl font-semibold">
            {{ certificate.platform }}: {{ certificate.title }}
          </h4>
          <p class="text-lg">
            <b class="font-medium">{{ certificate.tagline }}</b>
          </p>
          <p class="text-gray-500">{{ certificate.description }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>

.certificate-wrapper:hover::before {
  --w: 150px;
  --h: 150px;
  content: '';
  background: #d7d7d7;
  position: absolute;
  top: calc((var(--y) * 1%) - (var(--h) / 2));
  left: calc((var(--x) * 1%) - (var(--w) / 2));
  width: var(--w);
  height: var(--h);
  border-radius: 60%;
  z-index: 5;
}

</style>