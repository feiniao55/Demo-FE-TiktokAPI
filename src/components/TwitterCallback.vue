<template>
  <div>
    <h1>Twitter Callback</h1>
    <div v-if="loading">处理中...</div>
    <div v-else-if="error">发生错误: {{ error }}</div>
    <div v-else-if="success">
      <p>登录成功，正在处理您的账户...</p>
      <p>Code Challenge: {{ code_challenge }}</p>
      <p>Code: {{ code }}</p>
    </div>
    <div v-else>未知错误</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      error: null,
      success: false,
      code_challenge: null,
      code: null,
    };
  },
  async mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    this.code_challenge = urlParams.get('code_challenge');
    this.code = urlParams.get('code');

    if (!this.code_challenge || !this.code) {
      this.error = '缺少必要参数';
      this.loading = false;
      return;
    }

    try {
      // 这里可以将参数发送到后端API进行处理
      // const response = await fetch('https://your-domain.com/api/auth/twitter', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ code_challenge: this.code_challenge, code: this.code }),
      // });
      // if (!response.ok) throw new Error('授权失败');
      // const data = await response.json();

      this.success = true;
      this.loading = false;
    } catch (error) {
      this.error = error.message;
      this.loading = false;
    }
  },
};
</script>