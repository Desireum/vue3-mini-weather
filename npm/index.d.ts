declare module 'vue3-mini-weather' {
  import type { DefineComponent, App } from 'vue'
  const install: (Vue:App) => void
  const vMiniWeather: DefineComponent<{}, {}, any>
  const vMiniWeatherIcon: DefineComponent<{}, {}, any>
  export {
    vMiniWeather,
    vMiniWeatherIcon
  }
  export default install
}
