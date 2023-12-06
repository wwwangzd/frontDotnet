import WordPage from './word-page.vue'
import hljs from './highlight.js'
<<<<<<< HEAD
import icon from './Icons'
=======
>>>>>>> 4a4f282f4e02d47523ae4c30fdd9facf90d31d22
export default {
    install (app) {
        app.component("word-page", WordPage);
        hljs(app);
<<<<<<< HEAD
        icon(app);
=======
>>>>>>> 4a4f282f4e02d47523ae4c30fdd9facf90d31d22
    }
}