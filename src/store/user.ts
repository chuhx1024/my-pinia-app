import { defineStore } from 'pinia'
import { useAppStore } from './app'

export const useUserStore = defineStore('user', {
    state: () => {
       return {
            name: '小明',
            age: 18,
            gender: '男'
       } 
    },
    getters: {
        doubleAge: (state) => state.age * 2,
        // 在 gerters 中使用 gerters 的其他值 要用 this 所以使用普通函数 
        doubleAge2 (): Number {
            return this.doubleAge * 2
        },
        // 既使用state 又使用 getters 自己的属性
        doubleAge3 (): Number {
            return this.age + this.doubleAge
        },
        // 跨模块使用
        allName (): String {
            return useAppStore().name + this.name
        },
        usePorps () {
            return (str: string) => str + this.name
        }

    },
    actions: {
        saveName (name: string) {
            this.name = name
        }
    }
})