<template>
  <div class="login-container">
    <el-form class="login-form">
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <el-form-item>
        <span class="svg-container">
          <el-icon>
            <avatar />
          </el-icon>
        </span>
        <el-input placeholder="username" name="username" type="text"></el-input>
      </el-form-item>

      <el-form-item>
        <span class="svg-container">
          <el-icon>
            <lock />
          </el-icon>
        </span>
        <el-input placeholder="password" name="password" type="text"></el-input>

        <span class="svg-container">
          <el-icon>
            <View />
            <!-- icon图标 -->
          </el-icon>
        </span>
      </el-form-item>
      <el-button type="primary" style="width: 100%; margin-top: 30px"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script setup>
import { Avatar, Lock, View } from '@element-plus/icons'
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor_gray: #fff;

.login-container {
  min-height: 100;
  width: 100%;
  height: 100vh;
  background-color: $bg;
  overflow: hidden;

  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
      .el-input {
        width: 85%;
        height: 47px;
        .el-input__inner {
          background-color: transparent;
          border: 0px;
          border-radius: 0px;
          padding: 12px 5px 12px 5px;
          color: $cursor_gray;
          height: 47px;
          caret-color: $cursor_gray;
        }
      }
    }
    .svg-container {
      padding: 6px 5px 5px 15px;
      color: $dark_gray;
      vertical-align: middle;
      display: inline-block;
    }
  }
}
</style>
