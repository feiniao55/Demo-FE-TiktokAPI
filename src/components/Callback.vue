<template>
  <div>
    <h1>TikTok Callback</h1>
    <div v-if="loading">处理中...</div>
    <div v-else-if="error">发生错误: {{ error }}</div>
    <div v-else-if="success">
        <p>登录成功，正在处理您的账户...</p>
        <p>Code: {{ code }}</p>
        <p>State: {{ state }}</p>
        <p>发生错误: {{ error }}</p>
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
      code: null, // 用于存储 code
      state: null, // 用于存储 state
    };
  },
  async mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    this.code = urlParams.get('code'); // 从 URL 中获取授权码
    this.state = urlParams.get('state'); // 检查是否匹配 state（防止 CSRF 攻击）

    console.log('code:', this.code);
    console.log('state:', this.state);

    if (!this.code) {
      this.error = '未能获取授权码';
      this.loading = false;
      return;
    }

    try {
      // 将授权码发送到后端，换取 access_token
      const response = await fetch('https://your-domain.com/api/auth/tiktok', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, state }),
      });

      if (!response.ok) {
        throw new Error('授权失败');
      }

      const data = await response.json();
      console.log('登录成功:', data);

      // 登录成功，重定向或保存用户信息
      this.loading = false;
    } catch (error) {
      //this.error = error.message;
      this.loading = false;
      this.success = true;
    }
  },
};
</script>