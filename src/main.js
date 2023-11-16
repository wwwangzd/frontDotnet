import {
    createApp
} from 'vue';
import App from './App';
import router from './routers';
import components from './components';
import Antd from 'ant-design-vue';
import "@/assets/css/bootstrap.min.css";
// import 'ant-design-vue/dist/reset.css';

const app = createApp(App);

app.use(Antd);
app.use(router);
app.use(components);
app.mount("#app");