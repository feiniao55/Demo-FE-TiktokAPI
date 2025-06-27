<template>
  <div>
    <h1>Twitter Callback</h1>
    <div v-if="loading">处理中...</div>
    <div v-else-if="error">发生错误: {{ error }}</div>
    <div v-else-if="success">
      <p>登录成功，正在处理您的账户...</p>
      <div v-for="(value, key) in params" :key="key">
        <strong>{{ key }}:</strong> {{ value }}
      </div>
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
      params: {},
    };
  },
  async mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    // 收集所有参数
    const paramsObj = {};
    for (const [key, value] of urlParams.entries()) {
      paramsObj[key] = value;
    }
    this.params = paramsObj;

    if (Object.keys(this.params).length === 0) {
      this.error = '未检测到任何参数';
      this.loading = false;
      return;
    }

    try {
      // 这里可以将参数发送到后端API进行处理
      this.success = true;
      this.loading = false;
    } catch (error) {
      this.error = error.message;
      this.loading = false;
    }
  },
};
</script>