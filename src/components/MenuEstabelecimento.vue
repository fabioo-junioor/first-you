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
  background-color: #333;
  box-shadow: 3px 3px 5px #33333396;

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
  background-color: #1f1f1f;
  border-radius: 5px;
  border: none;

}
#menuEstab .navbar a:hover {
  color: rgb(255, 255, 255);
  background-color: #000000;

}
#menuEstab .b-sidebar-footer {
  background-color: #333;

}
#menuEstab .d-flex {
  display: flex;
  justify-content: space-between;

}
#menuEstab .d-flex button {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  width: 30%;
  background-color: #1f1f1f;
  border: none;

}
#menuEstab .d-flex button:hover{
  color: rgb(255, 255, 255);
  background-color: #000000;

}
#menuEstab .sidebar-links{
  display: flex;
  flex-direction: column;

}
#menuEstab .sidebar-links a{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: #333;
  padding: 15px 0px 15px 20px;
  text-decoration: none;
  margin: 10px 1px;
  color: white;
  border-radius: 5px;

}
#menuEstab .sidebar-links a:hover{
  color: rgb(255, 255, 255);
  background-color: #000000;

}
#menuEstab .avatar{
  background-color: #333;
  padding: 20px 0px 20px 20px;
  display: flex;
  align-items: center;
  border-radius: 5px;

}
#menuEstab .avatar h5{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: white;
  padding-top: 5px;
  margin-left: 5px;
  font-size: .9rem;
  
}
</style>