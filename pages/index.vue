<template>
  <section>
    <AppHeading title="Chloé Hopter Designer UI UX" suptitle="Bonjour visiteur de l'internet. Je suis…" button.href="#" button.label="Test" />
    <AppButton href="#" label="Contactez moi !" />
    <AppButton href="#" class="u-color-primary u-background-secondary" label="Contactez moi !" />
    <AppCard link="#" picture="https://via.placeholder.com/350x150" title="Planning Familial" text="Design d'application mobile" />
  </section>
</template>

<script>
import AppHeading from "~/components/heading/index.vue";
import AppButton from "~/components/button/index.vue";
import AppCard from "~/components/card/index.vue";

export default {
  components: {
    AppHeading,
    AppCard,
    AppButton
  }
};
</script>
