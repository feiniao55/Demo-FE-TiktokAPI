  <template>
    <div class="login">
      <h1>登录</h1>
      <button @click="loginWithTikTok">使用 TikTok 登录</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      loginWithTikTok() {
        const clientKey = 'sbawok0tjzo0deh21v'; // 替换成你在 TikTok 开发者平台的 Client Key
        const redirectUri = encodeURIComponent('https://feiniao.uk/api/auth/callback'); // 替换成你的后端回调地址
        const state = Math.random().toString(36).substring(2); // 生成随机 state 防止 CSRF 攻击
        const scope = 'user.info.basic'; // 请求的权限，TikTok 支持的 scope 可查文档
  
        // 拼接 TikTok 授权地址
        const authUrl = `https://www.tiktok.com/v2/auth/authorize?client_key=${clientKey}&response_type=code&scope=${scope}&redirect_uri=${redirectUri}&state=${state}`;
  
        // 跳转到 TikTok 授权地址
        window.location.href = authUrl;
      },
    },
  };
  </script>