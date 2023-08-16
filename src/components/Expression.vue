<script>
export default {
  data() {
    return {
      name: "Iqbal",
      age: 22,
      hobbies: [
        "reading",
        "swimming",
        `<span class="red">
          watching film
        </span>`,
      ],
      contact: {
        email: "iqbalariem232@gmail.com",
        whatsapp: "0812313630159",
        instagram: `<span style="color: magenta">
          iqbalariem451
        </span>`,
      },
    };
  },
}
</script>

<template>
  <h1>Basic - Variable/Property and Javascript Expression</h1>

  <h2>1. Accessing primitive variable</h2>

  <p>Hello, my name is <span v-text="name"></span>. <b>(Use v-text directive)</b></p>
  <p>I'm {{ age }} years old. <b>(Use double curly brackets, string literal like expression)</b></p>

  <h2>2. Accessing array elements</h2>

  <p>I have some hobbies:</p>
  <ul>
    <li v-text="hobbies[0]"></li>
    <li>{{ hobbies[1] }}</li>
    <li>
      <span v-html="hobbies[2]"></span>.
      <b>(Use v-html directive)</b>
    </li>
  </ul>

  <h2>3. Accessing object properties</h2>

  <p>Feel free to contact me at:</p>
  <ul>
    <li>
      Email:
      <span
        v-text="contact.email">
      </span>
    </li>
    <li>
      Whatsapp:
      {{ contact.whatsapp }}
    </li>
    <li>
      Instagram:
      <span
        v-html="contact.instagram">
      </span>
    </li>
  </ul>

</template>
