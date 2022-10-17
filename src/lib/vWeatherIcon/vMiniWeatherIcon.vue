<template>
  <div v-show="icon" id="v-mini-weather-icon-xxxxxx" class="v-mini-weather-icon"></div>
</template>

<script setup>
import {defineProps, ref, onMounted, onBeforeUnmount} from 'vue'
import Lottie from 'lottie-web'
import weatherIcon from './index.js'

const props = defineProps({
  icon: {
    type: String,
    default: 'd00'
  }
})
const icon = ref(props.icon)
const weatherIconAnimation = ref(null)
const handleShowIcon = () => {
  if (weatherIconAnimation.value) {
    weatherIconAnimation.value.destroy()
  }
  weatherIconAnimation.value = Lottie.loadAnimation({
    wrapper: document.getElementById('v-mini-weather-icon-xxxxxx'), // 怕你们起个IP给我重了，所以后面加了几个x哈哈哈哈
    animType: 'svg',
    loop: true,
    animationData: weatherIcon[icon.value]()
  })
}
onMounted(() => {
  handleShowIcon()
})
onBeforeUnmount(() => {
  if (weatherIconAnimation.value) {
    weatherIconAnimation.value.destroy()
  }
})
</script>