<template>
  <div class="body">
    <div class="searchbox">
      <!-- 添加用户 -->
      <div class="addbtn">
        <a-button type="primary" @click="modal1Visible = true" class="btn1"
          >添加用户</a-button
        >
      </div>

      <!-- 搜索栏 -->
      <div class="search-icon">
        <input type="text"  v-model="serachwords" placeholder="请输入ID或名称"/>
      </div>

      <!-- 搜索按钮 -->
      <div class="searchbtn">
        <a-button type="primary" @click="search()" class="btn2"
          >搜索</a-button
        >
      </div>
    </div>

    <!-- 删除用户 -->
    <div class="delcard">
      <div class="control-allselect">
        <a-checkbox
          class="form-check-label"
          id="flexCheckDefault"
          @click="allChoose()"
          >全部选择</a-checkbox
        >
      </div>
      <div class="delbtn">
        <a-button
          type="primary"
          danger
          style="height: 50px; width: 100px; float: right"
          :disabled="!checkBoxNum"
          >删除</a-button
        >
      </div>
    </div>

    <!-- 用户列表 -->
    <div class="userlist">
      <!-- 标签栏 -->
      <div class="content-label border-bottom bg-light">
        <div class="control-select"></div>
        <!-- <div class="control-select"></div> -->
        <div class="control-name txt1">姓名</div>
        <div class="control-sid txt1">学号</div>
        <div class="control-role txt1">角色</div>
        <div class="control-btn txt1">管理操作</div>
      </div>

      <!-- 用户主体 -->
      <div class="content-main">
        <div
          class="main border-bottom"
          v-for="(user, index) in users"
          :key="index"
        >
          <div class="control-select">
            <input
              class="form-check-input check_item"
              type="checkbox"
              id="gridCheck"
              @click="partChoose()"
            />
          </div>
          <div class="control-name">
            <p class="main-text" style="color: #1282eb;">{{ user.name }}</p>
          </div>
          <div class="control-sid">
            <p class="main-text">{{ user.sid }}</p>
          </div>
          <div class="control-role">
            <p class="main-text">{{ user.role }}</p>
          </div>
          <div class="control-btn">
            <a-button
              class="btn btn-dark"
              type="primary"
              ghost
              ref="alteruser"
              @click="showAlterUser(index, user)"
            >
              修改
            </a-button>
            <a-button
              class="btn btn-danger"
              type="primary"
              danger
              ghost
              @click="DelUser(index)"
            >
              删除
            </a-button>
          </div>
        </div>
      </div>
    </div>

    <!-- 分页 -->
    <a-pagination v-model:current="current" :total="50" show-less-items style="float: right;margin-top: 20px;"/>

    <!-- 新建表单 -->
    <a-modal
      v-model:open="modal1Visible"
      title="添加用户"
      centered
      @ok="AddUser()"
    >
      <!-- 具体表格 -->
      <div class="changeform">
        <a-form
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
          layout="horizontal"
          style="max-width: 300px"
        >
          <a-form-item label="Name" class="mragins">
            <a-input v-model:value="newuser.name" />
          </a-form-item>
          <br />
          <a-form-item label="Role" class="mragins">
            <a-select v-model:value="newuser.role">
              <a-select-option value=""></a-select-option>
              <a-select-option value="demo">Demo</a-select-option>
              <a-select-option value="user">User</a-select-option>
              <a-select-option value="manager">Manager</a-select-option>
            </a-select>
          </a-form-item>
          <br />
          <a-form-item label="StudentID" class="mragins">
            <a-input v-model:value="newuser.sid" />
          </a-form-item>
          <br />
          <a-form-item label="Password" class="mragins">
            <a-input v-model:value="newuser.pwd" type="password" />
          </a-form-item>
          <!-- <a-form-item label="Upload">
            <a-upload action="/upload.do" list-type="picture-card">
              <div>
                <PlusOutlined />
                <div style="margin-top: 8px">Upload</div>
              </div>
            </a-upload>
          </a-form-item> -->
        </a-form>
      </div>
    </a-modal>

    <!-- 修改表单 -->
    <a-modal
      v-model:open="modal2Visible"
      title="修改用户信息"
      centered
      @ok="AlterUser()"
    >
      <!-- 具体表格 -->
      <div class="changeform">
        <a-form
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
          layout="horizontal"
          style="max-width: 300px"
        >
          <a-form-item label="Name" class="mragins">
            <a-input v-model:value="changeform.name" />
          </a-form-item>
          <br />
          <a-form-item label="Role">
            <a-select v-model:value="changeform.role" class="mragins">
              <a-select-option value=""></a-select-option>
              <a-select-option value="demo">Demo</a-select-option>
              <a-select-option value="user">User</a-select-option>
              <a-select-option value="manager">Manager</a-select-option>
            </a-select>
          </a-form-item>
          <br />
          <a-form-item label="StudentID" class="mragins">
            <a-input v-model:value="changeform.sid" disabled="true" />
          </a-form-item>
          <br />
          <a-form-item label="Password" class="mragins">
            <a-input v-model:value="changeform.pwd" type="password" />
          </a-form-item>
          <!-- <a-form-item label="Upload">
            <a-upload action="/upload.do" list-type="picture-card">
              <div>
                <PlusOutlined />
                <div style="margin-top: 8px">Upload</div>
              </div>
            </a-upload>
          </a-form-item> -->
        </a-form>
      </div>
    </a-modal>
  </div>
</template>
<script src="../../assets/js/ManagerHome.js"></script>
<style scoped src="../../assets/css/ManagerHome.css"></style>