<template>
  <div id="menuEstab">
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav id="b-navbar-nav">
          <b-button v-b-toggle.sidebar-footer>Menu</b-button>
        </b-navbar-nav>
      </b-collapse>
      <b-sidebar
        id="sidebar-footer"
        aria-label="Sidebar with custom footer"
        no-header
        shadow
      >
        <template #footer="{ hide }">
          <div class="d-flex text-light px-3 py-2">
            <b-button size="sm">Sair</b-button>
            <b-button size="sm" @click="hide">Fechar</b-button>
          </div>
        </template>
        <div class="px-3 py-2">
          <div class="mb-2 avatar">
            <b-avatar src="https://placekitten.com/300/300"></b-avatar>
            <h5>Fabio Junior</h5>
          </div>
          <div class="sidebar-links">
            <router-link to="/inicioEstab" class="link">Inicio</router-link>
            <router-link to="/configuracoes" class="link"
              >Configurações</router-link>
          </div>
        </div>
      </b-sidebar>
    </b-navbar>
  </div>
</template>
<style>
#menuEstab {
  width: 100%;
  background-color: #494949;
  box-shadow: 3px 3px 5px #252525;

}
#menuEstab #b-navbar-nav {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-left: 2rem;

}
#menuEstab #b-navbar-nav button {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: white;
  font-size: 1rem;
  text-decoration: none;
  padding: 8px 30px;
  margin: 10px 0px 0px 0px;
  border-radius: 5px;
  background-color: #3a3a3a;
  box-shadow: 3px 3px 2px #252525;
  border: none;

}
#menuEstab #b-navbar-nav button:hover {
  color: rgb(255, 255, 255);
  background-color: #5f5f5f;

}
#menuEstab #sidebar-footer{
  background-color: #494949 !important;
  box-shadow: 3px 0px 5px #252525 !important;

}
#menuEstab .b-sidebar-footer {
  background-color: #494949;
  border-top: 1px solid #252525;

}
#menuEstab .d-flex {
  display: flex;
  justify-content: space-between;

}
#menuEstab .d-flex button {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  width: 30%;
  border: none;
  background-color: #3a3a3a;
  box-shadow: 3px 3px 2px #252525;

}
#menuEstab .d-flex button:hover{
  color: rgb(255, 255, 255);
  background-color: #5f5f5f;

}
#menuEstab .sidebar-links{
  display: flex;
  flex-direction: column;

}
#menuEstab .sidebar-links a{
  background-color: #3a3a3a;
  box-shadow: 3px 3px 2px #252525;  
  padding: 10px 0px 10px 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-decoration: none;
  margin: 10px 1px;
  color: white;
  font-size: .9rem;
  border-radius: 5px;
  border: none;

}
#menuEstab .sidebar-links a:hover{
  color: rgb(255, 255, 255);
  background-color: #5f5f5f;

}
#menuEstab .avatar{
  background-color: #6b03c0;
  box-shadow: 3px 3px 1px #252525;
  padding: 20px 0px 20px 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;

}
#menuEstab .avatar h5{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: white;
  padding-top: 5px;
  margin-left: 5px;
  font-size: .9rem;
  
}
</style>