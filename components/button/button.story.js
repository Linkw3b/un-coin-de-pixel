import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
// import { addonNotes } from '@storybook/addon-notes';
// import { addonKnobs, text, number, boolean, array, select, color, date } from '@storybook/addon-knobs';
import Button from './index.vue';

storiesOf('Button', module)
  // Works if Vue.component is called in the config.js in .storybook
  .add('href', () => ({
    components: { Button },
    template: '<Button href="#" />',
  }))
