<template>
  <!-- 公司信息表单 -->
  <div id="companyForm">
    <div
      class="company-form"
      :class="{'isChage' : isChange}">
      <h3 v-if="!isChange && !isReg">添加客户</h3>
      <h3 v-if="isReg && !isChange">客户注册</h3>
      <h3 v-if="isChange && !isReg">修改资料</h3>
      <div class="form-add-box">
        <div class="input-con">
          <p
            class="label"
            v-if="isChange">公司名称</p>
          <input type="text" placeholder="请输入公司名称" v-model="form.customerName" />
        </div>
        <div class="input-con">
          <p
            class="label"
            v-if="isChange">客户名称</p>
          <input type="text" placeholder="请输入客户名称" v-model="form.customerContact" />
        </div>
        <div class="input-con">
          <p
            class="label"
            v-if="isChange">联系方式</p>
          <input type="text" placeholder="请输入客户联系方式" v-model="form.customerPhone" />
        </div>
        <div class="input-con">
          <p
            class="label"
            v-if="isChange">企业邮箱</p>
          <input type="text" placeholder="请输入客户企业邮箱" v-model="email" />
        </div>
        <div class="input-con">
          <p
            class="label"
            v-if="isChange">公司地址</p>
          <input type="text" placeholder="请输入客户公司地址" v-model="address" />
        </div>
        <div class="input-con">
          <p
            class="label"
            v-if="isChange">客户类别</p>
          <div
            class="select"
            @click="showSelect = true">{{ selectCate ? selectCate : "请选择所属类别"}}</div>
        </div>
        <div class="input-con">
          <p
            class="label"
            v-if="isChange">优势产品</p>
          <input type="text" placeholder="请输入优势产品" v-model="goodPro" />
        </div>
        <div class="upimg-con">
          <p class="name">客户信息登记表</p>
          <el-upload
            :show-file-list="false"
            action="/upload"
            accept="image/*"
            :on-success="(res) => {
              return this.imgSuccess(res, 'customerRegisterImage', 'registerImgLoad')
            }"
            :before-upload="(file) => {
              return this.beforeUpload(file, 'registerImgLoad')
            }">
            <button>上传</button>
          </el-upload>
        </div>
        <div
          class="company-msg"
          v-show="customerRegisterImage != null">
          <img class="cancle" src="~/assets/images/cancle.png" @click="imgCancle('customerRegisterImage')" />
          <img class="show-img" :src="customerRegisterImage | imgUrl" />
        </div>
        <div
          class="load-img"
          v-show="registerImgLoad">
          <img v-show="registerImgLoad" class="show-img" src="~/assets/images/download.gif" alt />
          <p>图片上传中，请稍候...</p>
        </div>
        <!-- <div class="upimg-con">
          <p class="name">签约合同</p>
          <el-upload
            :show-file-list="false"
            action="/upload"
            accept="image/*"
            :on-success="contactSuccess"
            :before-upload="beforeUpload">
            <button>上传</button>
          </el-upload>
        </div>
        <div
          class="company-msg contact"
          v-show="customerSignImage != null">
          <img class="cancle" src="~/assets/images/cancle.png" @click="imgCancle('customerSignImage')" />
          <img class="show-img" :src="customerSignImage | imgUrl" />
        </div>-->
      </div>
    </div>
    <button class="submit" @click="submit" v-if="!isReg">{{ isChange ? '确认' : '添加'}}</button>
    <button class="submit" @click="submit" v-else>{{ isChange ? '确认' : '注册'}}</button>

    <toast
      :isShow="showMsg"
      :message="message"></toast>

    <div
      class="select-con"
      v-show="showSelect">
      <div
        class="back"
        @click="showSelect = false"></div>
      <div class="selects">
        <!-- <h6>完成</h6> -->
        <div class="ps">
          <p
            class="select"
            v-for="item,index in options"
            :key="index"
            @click="choose(item)">{{item}}</p>
        </div>
      </div>
    </div>
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
    },
    isReg: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      form: {
        customerName: null,
        customerContact: null,
        customerPhone: null
      },
      customerRegisterImage: null, // 客户信息图片
      registerImgLoad: false, // 客户信息图片加载
      customerSignImage: null, // 合同图片
      signImgLoad: false, // 客户合同图片加载
      showSelect: false, // 展示底部选择宽
      selectCate: '', // 类比选择
      goodPro: '', // 优势产品
      email: '', // 邮箱
      address: '', // 地址
      options: ['男鞋', '女鞋', '童鞋', '鞋材辅料', '其他'],
      otherform: {}, //暂存
      // toast组件的值
      showMsg: {
        toast: false
      },
      message: "已完成"
    };
  },
  mounted() {
    if (this.isChange) {
      if (!this.$route.query.isCus) {
        this.getMsgId();
      } else {
        this.getCusMsgId();
      }
    }
  },
  methods: {
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
            let data = res.data.result
            this.customerRegisterImage = data.customerRegisterImage;
            this.customerSignImage = data.customerSignImage;
            this.address = data.customerAddress
            this.email = data.customerEmail
            this.selectCate = data.customerAttributes
            this.goodPro = data.customerDescription
            delete  data['customerAddress']
            delete  data['customerEmail']
            delete  data['customerAttributes']
            delete  data['customerDescription']
            this.$set(this, "form", data);
          } else {
            let msg = res.data.msg || "获取详情失败";
            this.showToast(msg);
          }
        });
    },
    // 获取详情客户
    getCusMsgId() {
      this.$axios
        .get("/api/enterprise/getbyid", {
          params: {
            id: this.$route.query.id
          }
        })
        .then(res => {
          if (res.data.code == 200) {
            let data = res.data.result
            this.address = data.enterpriseAddress
            this.form.customerContact = data.enterpriseContact
            this.email = data.enterpriseEmail
            this.form.customerName = data.enterpriseName
            this.form.customerPhone = data.enterprisePhone
            this.customerRegisterImage = data.enterpriseRegisterImage
            this.customerSignImage = data.enterpriseSignImage
            this.selectCate = data.enterpriseAttributes
            this.goodPro = data.enterpriseDescription
            this.$set(this, 'otherform', data)
          } else {
            let msg = res.data.msg || "获取详情失败";
            this.showToast(msg);
          }
        });
    },
    // 提交表单
    submit() {
      let emailReg = /^[\w]{1,16}@+\w{1,15}.\w{2,5}$/
      for (let i in this.form) {
        if (this.form[i] == "" && typeof this.form[i] != "boolean") {
          this.form[i] = null;
        }
        if (i != "customerSignImage" && i != "customerRegisterImage") {
          if (!this.testForm(i, this.form[i])) {
            return false;
          }
        }
      }
      this.form.customerRegisterImage = this.customerRegisterImage == null ? undefined : this.customerRegisterImage;
      this.form.customerSignImage = this.customerSignImage == null ? undefined : this.customerSignImage;
      if (this.customerRegisterImage == null && this.customerSignImage == null) {
        this.showToast("请上传《客户信息登记表》");
        return false;
      }
      if (this.selectCate == '') {
        this.showToast("请选择类别");
        return false;
      }
      if (this.email != '' && !emailReg.test(this.email)) {
        this.showToast("请填写正确的邮箱");
        return false;
      }
      if (this.$route.name == 'm-customerReg') {
        this.cusReg()
      } else if (this.$route.query.isCus) {
        this.changeCus()
      } else {
        if (!this.$route.query.id) {
          this.form["companyId"] = this.$route.query.companyId;
          this.form["customerAttributes"] = this.selectCate;
          this.form["customerDescription"] = this.goodPro;
          this.form["customerEmail"] = this.email;
          this.form["customerAddress"] = this.address
          this.send("/api/customer/save");
        } else {
          delete this.form["createTime"];
          this.form["customerAttributes"] = this.selectCate;
          this.form["customerDescription"] = this.goodPro;
          this.form["customerEmail"] = this.email;
          this.form["customerAddress"] = this.address
          this.send("/api/customer/update");
        }
      }

    },
    // 发送表单
    send(url) {
      this.$axios.post(url, this.form).then(res => {
        if (res.data.code == 200) {
          let msg = this.$route.query.id ? "修改成功" : "添加成功";
          this.showToast(msg);
          setTimeout(() => {
            this.$emit("sendSuccess", res.data.result);
          }, 2000);
        } else {
          let msg = res.data.msg || "添加失败";
          this.showToast(msg);
        }
      });
    },
    // 鞋企注册
    cusReg() {
      let form = {
        "enterpriseAddress": this.address,
        "enterpriseAttributes": this.selectCate,
        "enterpriseContact": this.form.customerContact,
        "enterpriseEmail": this.email,
        "enterpriseDescription": this.goodPro,
        "enterpriseName": this.form.customerName,
        "enterpriseOpenid": this.$route.query.Openid,
        "enterprisePhone": this.form.customerPhone,
        "enterpriseRegisterImage": this.form.customerRegisterImage
      }
      this.$axios.post('/api/enterprise/save', form).then(res => {
        if (res.data.code == 200) {
          let msg = this.$route.query.id ? "修改成功" : "添加成功";
          this.showToast(msg);
          setTimeout(() => {
            this.$emit("sendSuccess", res.data.result);
          }, 2000);
        } else {
          let msg = res.data.msg || "添加失败";
          this.showToast(msg);
        }
      });
    },
    // 鞋企修改
    changeCus() {
      let form = {
        "enterpriseAddress": this.address,
        "enterpriseAttributes": this.selectCate,
        "enterpriseContact": this.form.customerContact,
        "enterpriseEmail": this.email,
        "enterpriseDescription": this.goodPro,
        "enterpriseName": this.form.customerName,
        "enterpriseOpenid": this.$route.query.Openid,
        "enterprisePhone": this.form.customerPhone,
        "enterpriseRegisterImage": this.form.customerRegisterImage,
        "id": this.otherform.id,
        "isRegister": this.otherform.isRegister,
        "isSign": this.otherform.isSign,
        "enterpriseOpenid" :this.otherform.enterpriseOpenid
      }
      this.$axios.post('/api/enterprise/update', form).then(res => {
        if (res.data.code == 200) {
          let msg = this.$route.query.id ? "修改成功" : "添加成功";
          this.showToast(msg);
          setTimeout(() => {
            this.$emit("sendSuccess", this.$route.query.id);
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
        customerPhone: /^1\d{10}$/
      };
      if (value == null) {
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
    // 选择类别
    choose(label) {
      this.selectCate = label
      this.showSelect = false
    },
    // 显示toast
    showToast(message) {
      this.showMsg.toast = true;
      this.message = message;
    },
    // 图片上传成功
    imgSuccess(res, type, name) {
      this[type] = res.result.url;
      this[name] = false
    },
    // 上传前判断的大小
    beforeUpload(file, name) {
      const isLt2M = file.size / 1024 / 1024 < 10;
      if (!isLt2M) {
        this.showToast("图片大小不能超过 10MB!");
      }
      if (isLt2M) {
        this[name] = true
      }
      return isLt2M;
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

    >h3 {
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

        .select {
          width: 100%;
          height: pxToRem(80);
          line-height: pxToRem(80);
          background-color: #ffffff;
          border: solid pxToRem(2) #bfbfbf;
          text-indent: pxToRem(28);
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

      .load-img {
        width: pxToRem(360);
        margin: 0 auto;
        margin-bottom: pxToRem(120);
        background-color: #ffffff;
        box-shadow: 0px 0px pxToRem(10) 0px rgba(50, 50, 50, 0.4);
        position: relative;

        .show-img {
          width: 100%;
        }

        p {
          text-align: center;
          color: #999999;
          @include font-dpr(24);
          padding: pxToRem(20);
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

        .select {
          width: 76%;
        }
      }
    }
  }

  .select-con {
    .back {
      width: 100%;
      height: 100%;
      position: fixed;
      z-index: 9;
      top: 0;
      left: 0;
      background-color: rgba($color: #000000, $alpha: 0.7);
    }

    .selects {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      // height: pxToRem(450);
      z-index: 10;
      background-color: white;

      h6 {
        @include font-dpr(28);
        height: pxToRem(80);
        line-height: pxToRem(80);
        padding: 0 pxToRem(50);
        text-align: right;
      }

      .ps {
        height: pxToRem(400);
        overflow-y: auto;

        p {
          height: pxToRem(80);
          line-height: pxToRem(80);
          padding: 0 pxToRem(50);
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
