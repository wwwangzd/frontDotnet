import {
    ref,
    reactive
} from "vue";
import axios from "@/axios";
import router from "@/routers";
import {
    message
} from 'ant-design-vue';
let model = reactive({
    loginToken: null,
    password: null
});
let rules = {
    loginToken: [{
        required: true,
        message: "必须填写用户名"
    }, ],
    password: [{
        required: true,
        message: '必须填写登录密码'
    }]
};
let formRef = ref('');
async function onSubmit() {
    formRef.value
        .validate()
        .then(async () => {
            let user={username: model.loginToken, password: model.password};
            let msg = await axios.post("/api/login", user);
            console.log(msg.success);
            if (msg.success == "failed") {
                message.error(msg.msg);
            } else {
                message.success(msg.msg);
                localStorage.setItem("accessToken", msg.token);
                setTimeout(() => {  //延时好截图
                    router.push({
                        name: 'user'
                    })
                }, 1000);
            }
        })
        .catch((err) => {
            console.log("valid", err)
        });
}

function turnAround(index) {
    let frontindex = document.querySelector(".frontIndex");
    let loginform = document.querySelector(".loginform");

    loginform.style.display = "block";
    if (index == 1) {
        frontindex.style.transform = "rotateY(180deg)"
        loginform.style.transform = "rotateY(0deg)";
    } else if (index == 2) {
        frontindex.style.transform = "rotateY(0deg)"
        loginform.style.transform = "rotateY(-180deg)";
    }
}

function Login() {
    return {
        model,
        rules,
        formRef,
        onSubmit,
        turnAround
    };
}
export default Login;