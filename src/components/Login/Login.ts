import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class Login extends Vue {
  // initial data
  email = '';
  password = '';

  /**
   * Login
   *
   * @memberof Login
   */
  login() {
    this.$store
      .dispatch('login', {
        email: this.email,
        password: this.password
      })
      .then(() => {
        this.$router.push('/list');
      });
  }
}
