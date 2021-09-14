import "./set-public-path"
import { createApp } from 'vue'
import App from './App.vue'
import { router } from "./router";
import { rootDOMId } from "./utils/const";

const render = () => {
    const element = process.env.VUE_APP_STANDALONE === 'true' ? "#app" : document.getElementById(rootDOMId)
    createApp(App).use(router).mount(element)
}

export async function bootstrap(props) {
    console.log('bootstrap', props)
}
export async function mount(props) {
    console.log('mount', props)
    render()
}
export async function unmount(props) {
    console.log('unmount', props)
}
