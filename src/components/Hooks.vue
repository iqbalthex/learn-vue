<script>
export default {
  data() {
    return {
      name: "Iqbal",
    };
  },

  beforeCreate() {
    console.clear();
    console.log("`beforeCreate` is called before component create (for initialization)");
    console.log("Nothing from this component is available.");
    console.table({
      refs: this.$refs,
      name: this.name,
    });
    console.log("\n\n");
  },

  created() {
    console.log("`created` is called when component created (after initialization, before html rendered)");
    console.log("`$refs` is still empty, we don't know the html structure yet.");
    console.log("While `name` property is available now.");
    console.table({
      refs: this.$refs,
      name: this.name,
    });
    console.log("\n\n");
  },

  mounted() {
    console.log("`mounted` is called when component mounted (after html rendered)");
    console.log("Now we can access `h1` in `$refs`.");
    console.log("h1:", this.$refs.h1);
    console.log("h1.textContent:", this.$refs.h1.textContent);
  },
}
</script>

<template>
  <div>
    <h1 ref="h1">Hooks</h1>  
  </div>
</template>
