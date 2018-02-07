import { Component, Vue } from 'vue-property-decorator';
import Login from '@/components/Login/Login';

@Component({
  components: {
    Login,
  },
})
export default class Home extends Vue {}
