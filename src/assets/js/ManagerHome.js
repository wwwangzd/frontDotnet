import { cloneDeep } from "lodash-es";
import { reactive, ref } from "vue";
import { PlusOutlined } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";

export default {
  data() {
    return {
      serachwords: "",
      users: [
        {
          id: 1,
          avatar: "111",
          name: "123",
          role: "manager",
          sid: "22920212201111",
          pwd: "",
        },
        {
          id: 2,
          avatar: "111",
          name: "124",
          role: "manager",
          sid: "22920212202222",
          pwd: "",
        },
        {
          id: 3,
          avatar: "111",
          name: "125",
          role: "manager",
          sid: "22920212203333",
          pwd: "",
        },
        {
          id: 4,
          avatar: "111",
          name: "126",
          role: "manager",
          sid: "22920212204444",
          pwd: "",
        },
      ],
      modal1Visible: false,
      modal2Visible: false,
      nowAlterIndex: -1,
      labelCol: { style: { width: "150px" } },
      wrapperCol: { span: 14 },
      radioValue: ref("apple"),
      checked: ref(false),
      mesg: "你好",
      checkBoxNum: 0,
      changeform: {
        avatar: "avatar",
        name: "name",
        role: "role",
        sid: "",
      },
      newuser: {
        id: "",
        avatar: "",
        name: "",
        role: "",
        pwd: "",
        sid: "",
      },
      isallchoose: true,
      current : ref(2),
    };
  },

  mounted() {
    // this.judgeInput();
    // this.allChoose();
  },

  methods: {

    search() {
      //判断输入的东西了
      console.log("inputwords: " + this.serachwords);
    },

    showAlterUser(index, user) {
      console.log("change " + index);
      console.log(this.changeform.name);
      this.modal2Visible = true;
      this.nowAlterIndex = index;

      this.changeform.avatar = user.avatar;
      this.changeform.name = user.name;
      this.changeform.role = user.role;
      this.changeform.pwd = user.pwd;
      this.changeform.sid = user.sid;
      this.mesg = "我不好";

      console.log(this.changeform.name);
    },

    AlterUser() {
      this.modal2Visible = false;

      //这里要传过去一个接口
      this.users[this.nowAlterIndex].avatar = this.changeform.avatar;
      this.users[this.nowAlterIndex].name = this.changeform.name;
      this.users[this.nowAlterIndex].role = this.changeform.role;
      this.users[this.nowAlterIndex].pwd = this.changeform.pwd;
      this.users[this.nowAlterIndex].sid = this.changeform.sid;

      message.success("修改成功！", 4);
      console.log("mesg是: " + this.mesg);
    },

    AddUser() {
      this.modal1Visible = false;

      //接口添加
      this.users.push(this.newuser);

      message.success("添加用户成功！", 4);
      this.newuser = null;
    },

    DelUser(index) {
      console.log("delete " + index);
      this.$confirm({
        title: "确认删除吗？",
        okText: "是",
        cancelText: "否",
        closable: true, //是否显示右上角的x
        onOk: function () {
          console.log("on确定");
          //调用接口去删除
        },
        onCancel() {
          console.log("on取消");
        },
      });
    },

    allChoose() {
      console.log("全部选择");
      //选择框逻辑-全选
      var outCheck = document.getElementById("flexCheckDefault");
      var interCheck = document.getElementsByClassName("check_item");
      console.log(interCheck.length);
      if (outCheck == null) console.log("error1");
      else {
        console.log(outCheck.checked);
        // outCheck.onclick = function () {
        if (outCheck.checked) {
          this.checkBoxNum = interCheck.length;
          for (var i = 0; i < interCheck.length; i++) {
            interCheck[i].checked = true;
            console.log(interCheck[i].checked);
          }
        } else {
          for (var i = 0; i < interCheck.length; i++) {
            interCheck[i].checked = false;
            console.log(interCheck[i].checked);
          }
          this.checkBoxNum = 0;
        }
        console.log(this.checkBoxNum);
      }
      // }
    },

    partChoose() {
      this.checkBoxNum = 0;
      var outCheck = document.getElementById("flexCheckDefault");
      var interCheck = document.getElementsByClassName("check_item");
      //选择框逻辑-部分选择
      //重新计算所以归0
      // this.totalprice = 0;
      for (var i = 0; i < interCheck.length; i++) {
        if (interCheck[i].checked) {
          this.checkBoxNum++;
        }
      }
      if (this.checkBoxNum == interCheck.length) outCheck.checked = true;
      else outCheck.checked = false;

      console.log(this.checkBoxNum);
    },
  },
};