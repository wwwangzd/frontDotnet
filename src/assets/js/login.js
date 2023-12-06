export default {
    data() {
        return {
            
        };
    },

    methods: {
        turnAround(index) {
            console.log("come in.\n");
            let frontindex = document.querySelector(".frontIndex");
            let loginform = document.querySelector(".loginform");

            loginform.style.display = "block";
            if(index == 1){
                frontindex.style.transform = "rotateY(180deg)"
                loginform.style.transform = "rotateY(0deg)";
            }
            else if(index == 2){
                frontindex.style.transform = "rotateY(0deg)"
                loginform.style.transform = "rotateY(-180deg)";
            }
        },

        //登录要判断的事情


    },
};
