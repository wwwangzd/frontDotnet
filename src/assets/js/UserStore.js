import AsideMenu from "../../components/abandon/AsideMenu.vue";
import PopView from "../../components/abandon/PopView.vue";
export default {
    data() {
        return {
            users: [{
                    id: "",
                    headUrl: require("../img/head.jpg"),
                    username: "lihua",
                    email: "2436579671@qq.com",
                    phone: "18800679999",
                }, {
                    id: "",
                    headUrl: require("../img/head.jpg"),
                    username: "lihua",
                    email: "2436579671@qq.com",
                    phone: "18800679999",
                }, {
                    id: "",
                    headUrl: require("../img/head.jpg"),
                    username: "lihua",
                    email: "2436579671@qq.com",
                    phone: "18800679999",
                }, {
                    id: "",
                    headUrl: require("../img/head.jpg"),
                    username: "lihua",
                    email: "2436579671@qq.com",
                    phone: "18800679999",
                }

            ],
            isActive: false,
        }
    },
    components: {
        AsideMenu,
        PopView,
    },
    beforeMount() {},
    mounted() {},
    methods: {
        PopControl(Event) {
            let hidAddUser = () => {
                let button = this.$refs.adduser;
                let messageWindow = this.$refs.PopView.$refs.messageControl;
                if (!messageWindow.contains(Event.target) && this.$refs.PopView.isvisible == true && Event.target != button) {
                    this.$refs.PopView.isvisible = false;
                }
            };
            hidAddUser();
        },
        showAddUser() {
            this.$refs.PopView.isvisible = true;
            this.$refs.PopView.Init();
        },
        ControlActive() {
            this.isActive = !this.isActive;
            this.$refs.AsideMenu.isActive = this.isActive;
        },
    },
};