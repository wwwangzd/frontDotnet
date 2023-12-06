export default {
    data() {
        return {
            isvisible: false,
            token: "",
            file: null,
            imageUrl: "",
            user: {
                username: "", //非空
                phone: "", // 非空
                email: "",
            },
            usernameState: "",
            usernameMessage: "用户名",
            usernameFault: false,
            phoneState: "",
            phoneMessage: "手机号码",
            phoneFault: false,
            mailState: "",
            mailMessage: "邮箱",
            mailFault: false,
        };
    },
    beforeMount() {
    },
    methods: {
        Init() {
            this.file = null;
            this.imageUrl = "";
            this.user.username = "";
            this.user.phone = "";
            this.user.email = "";
            this.usernameState = "";
            this.usernameMessage = "用户名";
            this.usernameFault = false;
            this.phoneState = "";
            this.phoneMessage = "手机号码";
            this.phoneFault = false;
            this.mailState = "";
            this.mailMessage = "邮箱";
            this.mailFault = false;
        },
        UpLoadImg() {
            var that = this;
            let reader = new FileReader();
            reader.onload = function (e) {
                that.imageUrl = e.target.result;
            }
            reader.readAsDataURL(this.file);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 50;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 50MB!');
            }
            this.file = file;
            return isJPG && isLt2M;
        },
        UsernameJudgeBlur() {
            if (this.user.username == "") {
                this.usernameState = "is-invalid";
                this.usernameMessage = "用户名不能为空";
                this.usernameFault = true;
            } else {
                this.usernameState = "is-valid";
                this.usernameMessage = "用户名";
                this.usernameFault = false;
            }
        },
        PhoneJudgeBlur() {
            if (this.user.phone == "") {
                this.phoneState = "is-invalid";
                this.phoneMessage = "手机号码不能为空";
                this.phoneFault = true;
            } else if (!this.CheckPhone(this.user.phone)) {
                this.phoneState = "is-invalid";
                this.phoneMessage = "手机号码格式不对";
                this.phoneFault = true;
            } else {
                this.phoneState = "is-valid";
                this.phoneMessage = "手机号码";
                this.phoneFault = false;
            }
        },
        CheckPhone(phone) {
            let pattern = /^1[345789]\d{9}$/;
            return pattern.test(phone);
        },
        MailJudgeBlur() {
            if (this.user.email == "") {
                this.mailState = "is-valid";
                this.mailMessage = "邮箱";
                this.mailFault = false;
            } else if (!this.CheckMail(this.user.email)) {
                this.mailState = "is-invalid";
                this.mailMessage = "邮箱格式不对";
                this.mailFault = true;
            } else {
                this.mailState = "is-valid";
                this.mailMessage = "邮箱";
                this.mailFault = false;
            }
        },
        CheckMail(mail) {
            let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return pattern.test(mail);
        },
    },
}