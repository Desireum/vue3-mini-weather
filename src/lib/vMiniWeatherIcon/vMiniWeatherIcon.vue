<template>
  <div v-show="icon" :id="id" class="v-mini-weather-icon"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, Ref, onBeforeMount } from 'vue'
import Lottie, { AnimationItem } from 'lottie-web'
import weatherIcon from './icon'

/* eslint-disable-next-line */
const props = defineProps({
  icon: {
    type: String,
    default: 'd00'
  },
  type: {
    type: String,
    default: 'fill'
  }
})
const id = ref('')
const weatherIconAnimation:Ref<AnimationItem | null> = ref(null)
const handleShowIcon = () => {
  let icon:string = ''
  if (weatherIconAnimation.value) {
    weatherIconAnimation.value.destroy()
  }
  if (props.icon in weatherIcon) {
    icon = props.icon
  } else {
    if (/^\d+$/.test(props.icon)) {
      icon = 'd' + props.icon
    }
    if ((/^[dn]\d+$/.test(props.icon))) {
      icon = props.icon.slice(1)
    }
  }
  if (!(icon in weatherIcon)) {
    icon = '99'
  }
  weatherIconAnimation.value = Lottie.loadAnimation({
    container: document.getElementById(id.value) as Element,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: weatherIcon[icon]({ type: props.type })
  })
}
onBeforeMount(() => {
  const str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  const strArr = str.split('')
  let result = ''
  for (let i = 0; i < 16; i++) {
    result += strArr[Math.round(Math.random() * strArr.length)]
  }
  id.value = `v-mini-weather-icon-${result}`
})
onMounted(() => {
  handleShowIcon()
})
onBeforeUnmount(() => {
  if (weatherIconAnimation.value) {
    weatherIconAnimation.value.destroy()
  }
})
</script>
