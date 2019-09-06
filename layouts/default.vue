<template>
  <div>
    <div class="main">
      <nuxt/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      languageList: [
        {
          label: "en",
          show_name: "ENGLISH"
        }
      ],
      language: "ENGLISH",
      input: "",
      navImgShow: 0
    };
  },
  mounted() {
    this.sendLanguage();
    this.navImgShow = this.$store.getters.navImgShow;
  },
  methods: {
    handleCommand(command) {
      const than = this;
      console.log("click on item ", command);
      than
        .$axios({
          url: "/home/setLang",
          method: "post",
          data: {
            lang: command.label
          }
        })
        .then(result => {
          if (result.data.ret == 1) {
            console.log("语言设置成功");
            than.language = command.show_name;
          } else {
            console.log("语言设置失败");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    _skipNav(num) {
      console.log("_skipNav ==>", num);
      this.navImgShow = num;
      // this.$store.dispatch("app/setNavImgShow", num)
    },
    // 获取语言列表
    sendLanguage() {
      const than = this;
      than
        .$axios({
          url: "/home/lang",
          method: "get"
        })
        .then(result => {
          console.log("sendLang ==>", result.data);
          if (result.data.ret == 1) {
            console.log("success");
            than.languageList = result.data.result;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss">
html {
  font-family: Helvetica;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
li {
  list-style-type: none;
}
a {
  text-decoration: none;
}

.header {
  width: 100%;
  min-width: 1200px;
  background-color: #194a78;
  position: fixed;
  top: 0;
  z-index: 999;

  .header_top {
    width: 1200px;
    height: 40px;
    margin: 0 auto;

    &::before,
    &::after {
      display: block;
      clear: both;
      content: "";
    }

    ul {
      float: right;
      line-height: 40px;

      li {
        display: inline-block;
        padding: 0 10px;

        .el-dropdown {
          width: 80px;
          font-size: 12px;
          text-align: right;
          color: white;
        }
      }

      .ordinate {
        display: inline-block;
        height: 15px;
        vertical-align: middle;
        border: 1px solid rgba(255, 255, 255, 0.1);
      }
    }

    .top_text {
      font-size: 12px;
      line-height: 40px;
      color: white;
      display: inline-block;
    }
  }

  .wire {
    display: inline-block;
    width: 100%;
    vertical-align: top;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .header_nav {
    width: 1200px;
    height: 80px;
    margin: 0 auto;
    margin-top: -15px;
    line-height: 80px;

    img[name="logo"] {
      vertical-align: middle;
      width: 124px;
    }

    ul {
      float: right;
      line-height: 80px;

      li {
        display: inline-block;
        margin-left: 60px;
        position: relative;

        .nav-title {
          display: flex;
          justify-content: center;

          img[name="sanjiao"] {
            width: 14px;
            position: absolute;
          }

          .color_green {
            color: #478e93;
          }
        }

        .el-input {
          width: 160px;

          .el-input__inner {
            height: 24px;
            background-color: rgba(255, 255, 255, 0);
            border-radius: 12px;
            font-size: 12px;
            color: white;
          }
        }
        a {
          color: white;
          font-size: 14px;

          &:hover {
            color: #478e93;
          }
        }
      }
    }
  }
}
.el-dropdown-link {
  display: inline-block;

  a {
    display: inline-block;
  }
}
.el-dropdown-menu__item {
  font-size: 12px;
  text-align: center;

  a {
    color: #333333;
    width: 100%;
    height: 100%;
    display: inline-block;
  }

  &:not(.is-disabled):hover {
    background-color: #478e93;
    color: white;
  }

  &:not(.is-disabled):hover a {
    color: white;
  }
}

.main {
  min-height: 2000px;
  margin-top: 124px;
}

.footer {
  width: 100%;
  padding-top: 60px;
  background-color: #295c8c;

  .footer_nav {
    width: 1200px;
    height: 400px;
    margin: 0 auto;

    ul {
      display: inline-block;
      vertical-align: top;
      margin: 0 100px;

      &:last-of-type {
        margin-right: 0;
      }

      h4 {
        color: white;
        font-size: 16px;
        margin-bottom: 30px;
      }

      li {
        a,
        p {
          display: inline-block;
          color: white;
          font-size: 14px;
          margin-bottom: 20px;

          &:hover {
            color: #478e93;
          }
        }
      }
    }
  }

  .footer_copy {
    width: 100%;
    height: 60px;
    background-color: #194a78;
    .copy-text {
      text-align: center;
      font-size: 14px;
      color: white;
      line-height: 60px;
    }
  }
}

.el-pagination.is-background .el-pager li:not(.disabled).active {
  background: rgba(71, 142, 147, 1);
  color: white;
  border-radius: 6px;
}
.el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev {
  width: 90px;
}

.title-wrie {
  display: block;
  width: 200px;
  height: 3px;
  margin: 0 auto;
  margin-top: 20px;
  border-top: 1px solid #478e93;
  border-bottom: 1px solid #478e93;
}
</style>
