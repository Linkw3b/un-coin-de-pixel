<template>
  <div>
    <AppHeader label="Header" />
    <main class="o-main">
      <nuxt/>
    </main>
    <AppFooter label="Footer" />
  </div>
</template>


<script>
import AppHeader from "~/components/header/index.vue";
import AppFooter from "~/components/footer/index.vue";

export default {
  components: {
    AppHeader,
    AppFooter
  }
};
</script>
