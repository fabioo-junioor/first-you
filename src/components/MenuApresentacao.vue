<template>
  <div id="menuApre">
    <b-navbar toggleable="lg" type="dark">

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav id="b-navbar-nav">
          <router-link to="/inicioApre" class="link">Inicio</router-link>
          <router-link to="/sobre" class="link">Sobre</router-link>
          <router-link to="/login" class="link">Login</router-link>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>
<style>
#menuApre {
    width: 100%;
    background-color: #333;
    box-shadow: 3px 3px 5px #33333396;

}
#menuApre #b-navbar-nav{
    width: 100%;
    display: flex;
    justify-content: space-evenly;

}
#menuApre .navbar a{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: white;
    font-size: 1rem;
    text-decoration: none;
    padding: 8px 30px;
    background-color: #1f1f1f;
    border-radius: 5px;

}
#menuApre .navbar a:hover{
  color: rgb(255, 255, 255);
  background-color: #000000;
  
}
</style>