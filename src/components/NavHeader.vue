<script>
export default {
  name: 'navHeader',
}
</script>

<template>
  <div class="w-100">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid mx-5"> 
        <a class="navbar-brand" href="#">
          <img src="../assets/logo.jpeg" alt="" width="100" height="100" class="d-inline-block align-text-top">
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/">最新消息</router-link>
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
                <router-link class="dropdown-item" to="/services/kasai">龍筋覺知按摩</router-link>
                <router-link class="dropdown-item" to="/services/kerokan">刮痧</router-link>
              </ul>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contract">聯絡資訊</router-link>
            </li>
          </ul>
        </div>
        <div>
          <a href="https://lin.ee/Cs7pjli"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/zh-Hant.png"
              alt="加入好友" height="36" border="0"></a>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped></style>