<template>
  <!-- 公司信息表单 -->
  <div id="companyForm">
    <div class="company-form" :class="{'isChage' : isChange}">
      <h3 v-if="!isChange">添加客户</h3>
      <h3 v-else>修改资料</h3>
      <div class="form-add-box">
        <div class="input-con">
          <p class="label" v-if="isChange">公司名称</p>
          <input type="text" placeholder="请输入公司名称" v-model="form.customerName" />
        </div>
        <div class="input-con">
          <p class="label" v-if="isChange">客户名称</p>
          <input type="text" placeholder="请输入客户名称" v-model="form.customerContact" />
        </div>
        <div class="input-con">
          <p class="label" v-if="isChange">联系方式</p>
          <input type="text" placeholder="请输入客户联系方式" v-model="form.customerPhone" />
        </div>
        <div class="upimg-con">
          <p class="name">客户信息登记表</p>
          <el-upload
            :show-file-list="false"
            action="/upload"
            accept="image/*"
            :on-success="msgSuccess"
          >
            <button>上传</button>
          </el-upload>
        </div>
        <div class="company-msg" v-show="customerRegisterImage != null">
          <img
            class="cancle"
            src="~/assets/images/cancle.png"
            @click="imgCancle('customerRegisterImage')"
          />
          <img class="show-img" :src="customerRegisterImage | imgUrl" />
        </div>
        <div class="upimg-con">
          <p class="name">签约合同</p>
          <el-upload
            :show-file-list="false"
            action="/upload"
            accept="image/*"
            :on-success="contactSuccess"
          >
            <button>上传</button>
          </el-upload>
        </div>
        <div class="company-msg contact" v-show="customerSignImage != null">
          <img
            class="cancle"
            src="~/assets/images/cancle.png"
            @click="imgCancle('customerSignImage')"
          />
          <img class="show-img" :src="customerSignImage | imgUrl" />
        </div>
      </div>
    </div>
    <button class="submit" @click="submit">{{ isChange ? '确认' : '添加'}}</button>

    <toast :isShow="showMsg" :message="message"></toast>
  </div>
</template>

<script>
import toast from "~/components/toast";
export default {
  components: {
    toast
  },
  props: {
    isChange: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      form: {
        customerContact: "",
        customerContact: "",
        customerPhone: ""
      },
      customerRegisterImage: null, // 客户信息图片
      customerSignImage: null, // 合同图片

      // toast组件的值
      showMsg: { toast: false },
      message: "已完成"
    };
  },
  mounted() {
    if (this.$route.query.id) {
      this.getMsgId();
    }
  },
  methods: {
    submit() {
      if (
        this.customerRegisterImage == null &&
        this.customerSignImage == null
      ) {
        this.showToast("请上传《客户信息登记表》\n或《签约合同》");
        return false;
      }
      this.form["customerRegisterImage"] = this.customerRegisterImage;
      this.form["customerSignImage"] = this.customerSignImage;
      for (let i in this.form) {
        if (!this.testForm(i, this.form[i])) {
          return false;
        }
      }
      if (!this.$route.query.id) {
        this.form["companyId"] = this.$route.query.companyId;
        this.send("/api/customer/save");
      } else {
        delete this.form["createTime"];
        this.send("/api/customer/update");
      }
    },
    // 获取详情
    getMsgId() {
      this.$axios
        .get("/api/customer/getbyid", {
          params: {
            id: this.$route.query.id
          }
        })
        .then(res => {
          if (res.data.code == 200) {
            this.$set(this, "form", res.data.result);
            this.customerRegisterImage =
              this.form.customerRegisterImage == ""
                ? null
                : this.form.customerRegisterImage;
            this.customerSignImage =
              this.form.customerSignImage == ""
                ? null
                : this.form.customerSignImage;
          } else {
            let msg = res.data.msg || "获取详情失败";
            this.showToast(msg);
          }
        });
    },
    // 发送表单
    send(url) {
      this.$axios.post(url, this.form).then(res => {
        if (res.data.code == 200) {
          let msg = this.$route.query.id ? "修改成功" : "添加成功";
          this.showToast(msg);
          setTimeout(() => {
            this.$emit('sendSuccess')
          }, 2000);
        } else {
          let msg = res.data.msg || "添加失败";
          this.showToast(msg);
        }
      });
    },
    // 验证
    testForm(name, value) {
      let titles = {
        customerName: "与营业执照\n一致的公司名称",
        customerContact: "公司相关\n负责人姓名",
        customerPhone: "联系方式"
      };
      let reg = {
        phone: /^1\d{10}$/
      };
      if (value == "") {
        this.showToast("请输入" + titles[name]);
        return false;
      } else {
        if (reg[name]) {
          if (!reg[name].test(value)) {
            this.showToast("请输入正确的" + titles[name]);
            return false;
          }
        }
      }
      return true;
    },
    // 显示toast
    showToast(message) {
      this.showMsg.toast = true;
      this.message = message;
    },
    // 图片上传成功
    msgSuccess(res) {
      console.log(res);
      this.customerRegisterImage = res.result.url;
    },
    contactSuccess(res) {
      this.customerSignImage = res.result.url;
    },
    // 删除图片
    imgCancle(name) {
      this[name] = null;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/_mixin.scss";
#companyForm {
  .company-form {
    background-color: #ffffff;
    box-shadow: 0px 0px pxToRem(16) 0px rgba(50, 50, 50, 0.29);
    border-radius: pxToRem(20);
    > h3 {
      padding: pxToRem(60) 0 pxToRem(56);
      text-align: center;
      @include font-dpr(42);
      color: #333333;
    }
    .form-add-box {
      padding: 0 pxToRem(70) pxToRem(16);
      .input-con {
        display: flex;
        align-items: center;
        margin-bottom: pxToRem(36);
        input {
          width: 100%;
          height: pxToRem(80);
          background-color: #ffffff;
          border: solid pxToRem(2) #bfbfbf;
          text-indent: pxToRem(28);
        }
        &:last-child {
          margin-bottom: pxToRem(76);
        }
      }
      .upimg-con {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: pxToRem(60);
        @include font-dpr(28);
        .name {
          color: #999999;
        }
        button {
          width: pxToRem(130);
          height: pxToRem(60);
          border-radius: pxToRem(16);
          border: solid pxToRem(2) #008fd7;
          background-color: transparent;
          color: #008fd7;
        }
      }
      .company-msg {
        width: pxToRem(360);
        display: block;
        margin: 0 auto;
        margin-bottom: pxToRem(120);
        background-color: #ffffff;
        box-shadow: 0px 0px pxToRem(10) 0px rgba(50, 50, 50, 0.4);
        position: relative;
        .show-img {
          width: 100%;
        }
        .cancle {
          width: pxToRem(64);
          position: absolute;
          top: pxToRem(-32);
          right: pxToRem(-32);
        }
        &.contact {
          margin-bottom: pxToRem(60);
        }
      }
    }
  }
  .isChage {
    .form-add-box {
      padding: 0 pxToRem(40) pxToRem(16);
      .input-con {
        .label {
          width: 24%;
          @include font-dpr(28);
          color: #999999;
        }
        input {
          width: 76%;
        }
      }
    }
  }
  .submit {
    margin-top: pxToRem(50);
    width: 100%;
    height: pxToRem(88);
    background-image: linear-gradient(90deg, #e940a7 0%, #f08247 100%);
    border-radius: pxToRem(44);
    @include font-dpr(34);
    color: #ffffff;
  }
}
</style>