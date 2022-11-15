export const checkColor = (color:number[]) => {
  return isArray(color) &&
        color.length === 3 &&
        typeof color[0] === 'number' &&
        typeof color[1] === 'number' &&
        typeof color[2] === 'number' &&
        ((color[0] >= 0) && (color[0] <= 255)) &&
        ((color[1] >= 0) && (color[1] <= 255)) &&
        ((color[2] >= 0) && (color[2] <= 255))
}
export const isObject = (obj: any) => {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

export const isArray = (arr: any) => {
  return Object.prototype.toString.call(arr) === '[object Array]'
}

export const hasOwnProperty = (obj: any, property: string) => {
  return Object.prototype.hasOwnProperty.call(obj, property)
}

export type StyleType = 'fill' | 'line'
export type RainSnowType = 'small' | 'medium' | 'heavy'
export interface FnListData {
  type?: StyleType,
  sun?: [number, number, number],
  moon?: [number, number, number],
  star?: [number, number, number],
  light?: [number, number, number],
  dark?: [number, number, number],
  rain?: [number, number, number],
  cloud?: [number, number, number],
  snow?: [number, number, number],
  lightning?: [number, number, number],
  hail?: [number, number, number],
  fog?: [number, number, number],
  haze?: [number, number, number],
  dust?: [number, number, number],
  wind?: [number, number, number],
  text?: [number, number, number]
}
export interface FnList {
  [p: string]: any
}
