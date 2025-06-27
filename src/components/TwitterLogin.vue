<template>
  <button @click="loginWithTwitter" class="twitter-login-btn">
    使用 Twitter 登录
  </button>
</template>

<script>
export default {
  methods: {
    loginWithTwitter() {
      const url =
        'https://x.com/i/oauth2/authorize?response_type=code&client_id=Vk5NNE9MZUdtblI0MFMwbkVNZlg6MTpjaQ&redirect_uri=https://feiniao.uk/twitter/callback?success=challenge&scope=tweet.read%20users.read%20follows.read%20follows.write&state=state';
      window.location.href = url;
    },
  },
};
</script>

<style scoped>
.twitter-login-btn {
  background-color: #1da1f2;
  color: #fff;
  border: none;
  padding: 10px 24px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}
.twitter-login-btn:hover {
  background-color: #0d8ddb;
}
</style>