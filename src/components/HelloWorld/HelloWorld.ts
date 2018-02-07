import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  // @Prop() private msg: string;
}

Vue.component('hello-world', HelloWorld);
