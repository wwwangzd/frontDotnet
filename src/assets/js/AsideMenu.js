export default {
    data() {
        return {
            showId: 0,
            isShow: 0,
            isActive: false,
            lists: [{
                    to: "/userstore",
                    name: "用户管理",
                },
                {
                    to: "/userstore",
                    name: "敬请期待",
                },
                {
                    to: "/userstore",
                    name: "敬请期待",
                },
                {
                    to: "/userstore",
                    name: "敬请期待",
                },
                {
                    to: "/userstore",
                    name: "敬请期待",
                },
            ],
        };
    },
    mounted() {
        this.InitShowId();
    },
    methods: {
        InitShowId() {
            var str = this.$route.path;
            if (str.includes("user")) {
                this.showId = 0;
            } else {
                this.showId = 0;
            }
        }
    },
};