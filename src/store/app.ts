import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
    state: () => {
       return {
            name: '我是App的名字',
            age: 18,
            gender: '我是App的性别男'
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
        }

    },
    actions: {
        saveName (name: string) {
            this.name = name
        }
    }
})