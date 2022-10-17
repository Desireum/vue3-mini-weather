<template>
  <div>
    <v-mini-weather class="v-weather">
      <template #default="{ weather, icon }">
        <v-mini-weather-icon :icon="icon" class="v-weather-icon"></v-mini-weather-icon>
        <span>{{weather.cityname}} / {{weather.weather}} / {{weather.temp}}℃</span>
      </template>
    </v-mini-weather>
  </div>
</template>

<script setup>
import { vMiniWeather, vMiniWeatherIcon } from "./lib/index.js"
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
#app {
  max-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
  padding: 50px 0;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  background-image: linear-gradient(#6dd5ed, #2193b0);
  display: flex;
  justify-content: center;
  align-items: center;
}
.v-weather {
  display: flex;
  align-items: center;
  font-size: 14px;
  height: 50px;
  background: #fff;
  padding: 0 14px;
  border-radius: 25px;
  box-sizing: border-box;
}
.v-weather-icon {
  display: inline-block;
  width: 40px;
}
</style>