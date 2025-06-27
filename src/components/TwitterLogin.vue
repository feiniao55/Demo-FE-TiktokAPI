<template>
  <button @click="loginWithTwitter" class="twitter-login-btn">
    使用 Twitter 登录
  </button>
</template>

<script>
export default {
  methods: {
    loginWithTwitter() {
      const baseUrl = 'https://x.com/i/oauth2/authorize';
      const params = {
        response_type: 'code',
        client_id: 'Vk5NNE9MZUdtblI0MFMwbkVNZlg6MTpjaQ',
        redirect_uri: 'https://feiniao.uk/twitter/callback&success=challenge',
        scope: 'tweet.read users.read follows.read follows.write',
        state: 'state',
      };
      // 构建查询字符串
      const query = new URLSearchParams({
        response_type: params.response_type,
        client_id: params.client_id,
        redirect_uri: params.redirect_uri,
        scope: params.scope,
        state: params.state,
      }).toString();
      // 拼接最终URL
      const url = `${baseUrl}?${query}`;
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