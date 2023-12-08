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
            let msg = await axios.post("/api/login", model);
            console.log(msg.success);
            if (msg.success == "failed") {
                message.error(msg.msg);
            } else {
                localStorage.setItem("accessToken", msg.token);
                router.push({
                    name: 'user'
                })
            }
        })
        .catch((err) => {
            console.log("valid", err)
        });
}

function turnAround(index) {
    console.log("come in.\n");
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