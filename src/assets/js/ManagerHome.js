import { cloneDeep } from "lodash-es";
import { reactive, ref } from "vue";
import { PlusOutlined } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import axios from "@/axios";
import router from "@/routers";

export default {
  data() {
    return {
      serachwords: "",
      users: [
        {
          id: 1,
          name: "123",
          role: "manager",
          sid: "22920212201111",
          pwd: "",
        },
        {
          id: 2,
          name: "124",
          role: "manager",
          sid: "22920212202222",
          pwd: "",
        },
        {
          id: 3,
          name: "125",
          role: "manager",
          sid: "22920212203333",
          pwd: "",
        },
        {
          id: 4,
          name: "126",
          role: "manager",
          sid: "22920212204444",
          pwd: "",
        },
      ],
      page: 1,
      pageSize: 5,
      totalRows: ref(1),
      name: ref(""),
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
        name: "name",
        role: "role",
        sid: "",
      },
      newuser: {
        id: "",
        name: "",
        role: "",
        pwd: "",
        sid: "",
      },
      isallchoose: true,
      current: ref(1),
    };
  },

  mounted() {
    // this.judgeInput();
    // this.allChoose();
    this.getUsers();
  },

  methods: {
    search() {   //暂不支持模糊搜索
      //判断输入的东西了
      console.log("inputwords: " + this.serachwords);
      let len = this.users.length;
      if(this.serachwords == "")
      {
        this.getUsers();   //回到当前页面，不一定是第一页
      }
      if(this.serachwords[0] == '2')   //简单判断一下吧，开头是2就是学号搜索,而且只是当前页面的搜索
      {
        for(let i = 0; i < len; i++)
        {
          if(this.users[i].sid == this.serachwords)
          {
            let nowuser = this.users[i];
            this.users.splice(0, len);
            this.users.push(nowuser);
            break;
          }
        }
      }
      else{   //否则就是姓名搜索
        for(let i = 0; i < len; i++)
        {
          if(this.users[i].name == this.serachwords)
          {
            let nowuser = this.users[i];
            this.users.splice(0, len);
            this.users.push(nowuser);
            break;
          }
        }

      }
    },

    showAlterUser(index, user) {
      console.log("change " + index);
      console.log(this.changeform.name);
      this.modal2Visible = true;
      this.nowAlterIndex = index; //给索引赋值

      this.changeform.name = user.name;
      this.changeform.role = user.role;
      this.changeform.pwd = user.pwd;
      this.changeform.sid = user.sid;

      console.log(this.changeform.name);
    },

    //修改用户
    AlterUser() {
      this.modal2Visible = false;

      //替换成修改用户信息的接口，nowAlterIndex是要修改的索引
      this.users[this.nowAlterIndex].name = this.changeform.name;
      this.users[this.nowAlterIndex].role = this.changeform.role;
      this.users[this.nowAlterIndex].pwd = this.changeform.pwd;
      this.users[this.nowAlterIndex].sid = this.changeform.sid;

      message.success("修改成功！", 4);
      console.log("mesg是: " + this.mesg);
    },

    //获得用户
    async getUsers() {
      console.log(this.current);
      let searcher = {
        // UserName:"huangxu",
        // Password:"123456@hx",
      };
      let msg = await axios.get("/api/user/GetUsers", {
        params:{
          Page: this.current,
          Size: this.pageSize,
        },});
      console.log(msg);
      if (!msg.success) {
        message.error(msg.msg);
      } else {
        let len = msg.data.length;
        this,users.splice(0,len);
        for(let i = 0; i < len; i++)
        {
          this.users[i].id = msg.data[i].id;
          this.users[i].name = msg.data[i].userName;
          this.users[i].pwd = msg.data[i].password;
          this.users[i].sid = "2292021220000" + i.toString();   //因为没有传回所以先写死
          this.users[i].role = "manager";
        }
        
    }
    },

    //新增用户
    async AddUser() {
      this.modal1Visible = false;

      //替换成添加用户的接口，用户信息的属性还不确定是哪些
      let user = {
        UserName: this.newuser.name,
        Password: this.newuser.pwd,
        StudentNo: this.newuser.sid,
      };
      let msg = await axios.put("/api/user/AddUser", user);
      console.log(msg);
      if (!msg.success) {
        message.error(msg.msg);
      } else {
        message.success("添加用户成功！", 4);
        let adduser = {
          id: msg.data.id,
          name: msg.data.userName,
          pwd: msg.data.password,
          sid: this.newuser.sid,
          role: this.newuser.role,
        };

        this.users.push(adduser);

        //添加成功后再重置信息
        this.newuser.name = "";
        this.newuser.role = "";
        this.newuser.pwd = "";
        this.newuser.sid = "";
      }
    },

    //删除用户
    DelUser(index) {
      console.log("delete " + index);
      let uname = this.users[index].name;
      this.$confirm({
        title: "确认删除吗？",
        okText: "是",
        cancelText: "否",
        closable: true, //是否显示右上角的x
        onOk: async function () {
          console.log("on确定");
          //调用删除用户的接口
          let msg = await axios.delete("/api/user/RemoveUser");
          console.log(msg);
          if (!msg.success) {
            message.error(msg.msg);
        } else {
          message.success(msg.msg);
          console.log("删除成功");
        }
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
