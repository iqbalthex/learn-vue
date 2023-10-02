<script setup>

import GmailIcon    from './icons/GmailIcon.vue';
import WhatsappIcon from './icons/WhatsappIcon.vue';
import GithubIcon   from './icons/GithubIcon.vue';

</script>

<template>
  <section id="contact" class="flex flex-col min-h-screen p-4 pt-16 items-center bg-gray-200 lg:px-8 dark:bg-gray-800">
    <h2 class="text-4xl font-bold">My Contact</h2>
    <div class="flex justify-center gap-x-20 py-4">
      <div class="">
        <h3 class="text-xl">Feel free to contact me</h3>
        <ul class="mt-2 space-y-2">
          <li>
            <a href="mailto:iqbal.thex@gmail.com" target="_blank" class="inline-flex items-center gap-x-2">
              <Gmail-Icon class="w-8 h-8 rounded-full" />
              Iqbal Arie M
            </a>
          </li>
          <li>
            <a href="https://wa.me/6281231360159" target="_blank" class="inline-flex items-center gap-x-2">
              <Whatsapp-Icon class="w-8 h-8 rounded-full" />
              +6281231360159
            </a>
          </li>
          <li>
            <a href="https://github.com/iqbalthex" target="_blank" class="inline-flex items-center gap-x-2">
              <Github-Icon class="w-8 h-8 rounded-full" />
              iqbalthex
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
