<script>
export default {
  methods: {
    hideCanvas: function () {
      this.$refs.closeOffCanvas.click();
    }
  }
}
</script>

<template>
  <div class="w-100">
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="../assets/logo.jpeg" alt="" width="100" height="100"
            class="d-inline-block align-text-top rounded-circle">
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/">最新消息</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/price">價目表</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/tantra">關於譚崔</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/leader">課程帶領者</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                課程列表
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link class="dropdown-item" to="/services/long-gin">譚崔龍筋覺知按摩</router-link>
                <router-link class="dropdown-item" to="/services/gua-sha">全人刮痧</router-link>
              </ul>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contract">聯絡資訊</router-link>
            </li>
          </ul>
        </div>
        <div class="d-md-none">
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
              <a class="offcanvas-title" href="#" id="offcanvasExampleLabel" @click="hideCanvas">
                <img src="../assets/logo.jpeg" alt="" width="100" height="100"
                  class="d-inline-block align-text-top rounded-circle">
              </a>
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"
                ref="closeOffCanvas"></button>
            </div>
            <div class="offcanvas-body">
              <div>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <router-link class="nav-link active" aria-current="page" to="/"
                      @click="hideCanvas">最新消息</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/price" @click="hideCanvas">價目表</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/tantra" @click="hideCanvas">關於譚崔</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/leader" @click="hideCanvas">課程帶領者</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/services/long-gin" @click="hideCanvas">譚崔龍筋覺知按摩</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/services/gua-sha" @click="hideCanvas">全人刮痧</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/contract" @click="hideCanvas">聯絡資訊</router-link>
                  </li>
                </ul>
              </div>
              <div>
                <a href="https://lin.ee/Cs7pjli"><img
                    src="https://scdn.line-apps.com/n/line_add_friends/btn/zh-Hant.png" alt="加入好友" height="36"
                    border="0"></a>
              </div>
            </div>
          </div>
        </div>
        <div class="d-none d-md-block">
          <a href="https://lin.ee/Cs7pjli"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/zh-Hant.png"
              alt="加入好友" height="36" border="0"></a>
        </div>
      </div>
    </nav>
  </div>

</template>

<style scoped></style>