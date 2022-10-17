import vMiniWeather from './vMiniWeather.vue'
import vMiniWeatherIcon from './vWeatherIcon/vMiniWeatherIcon.vue'

const install = Vue => {
    Vue.component('vMiniWeather', vMiniWeather)
    Vue.component('vMiniWeatherIcon', vMiniWeatherIcon)
}

export default install
export {
    vMiniWeather,
    vMiniWeatherIcon
}