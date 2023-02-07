<template>
  <div id="menuApre">
    <b-navbar toggleable="lg" type="dark">

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav id="b-navbar-nav">
          <router-link to="/inicioApre" class="link">Inicio</router-link>
          <router-link to="/sobre" class="link">Sobre</router-link>
            <b-nav-item-dropdown
              id="my-nav-dropdown"
              text="Login"
              toggle-class="nav-link-custom"
              right>
              <div>
                <router-link to="/loginUsuario" class="link">Usuário</router-link>
                <router-link to="/loginEstabelecimento" class="link">Estabelecimento</router-link>
              </div>
            </b-nav-item-dropdown>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>
<style>
#menuApre {
    width: 100%;
    background-color: #494949;
    box-shadow: 3px 3px 5px #252525;

}
#menuApre #b-navbar-nav{
    width: 100%;
    display: flex;
    justify-content: space-evenly;

}
#menuApre .navbar a{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: white;
    font-size: .9rem;
    text-decoration: none;
    padding: 8px 30px;
    border-radius: 5px;
    box-shadow: 3px 3px 2px #252525;
    background-color: #3a3a3a;

}
#menuApre .navbar a:hover{
  color: rgb(255, 255, 255);
  background-color: #5f5f5f;
  
}
#menuApre #my-nav-dropdown ul{
  background-color: #494949;
  box-shadow: 3px 3px 3px #252525;
  margin: 15px 0px 0px 0px;
  padding: 10px 15px;
  border: none;

}
#menuApre #my-nav-dropdown ul div{
  display: flex;
  flex-direction: column;
  width: 100%;

}
#menuApre #my-nav-dropdown ul a{
  margin: 5px 0px;
  font-size: .9rem;

}
</style>