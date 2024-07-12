import './assets/style/main.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
// import router from '@/router'
import { appInfo } from '@/libs'
import plugins from '@/plugins'

import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

appInfo()

// 有一个我本来vue3启动的方法里边包括对Router，Store，mount，国际化等配置这里略去
let app: any = null
function bootstrapVue3(container: any) {
    // 进行创建，挂载app的一系列操作，这里挂载的时候可以利用传入的container
    app = createApp(App)
    app.use(createPinia())
    // app.use(router)
    app.use(plugins)
    app.mount(container)
}

// 增加qiankun子应用的render方法
const initQianKun = () => {
    renderWithQiankun({
        // 当前应用在主应用中的生命周期
        // 文档 https://qiankun.umijs.org/zh/guide/getting-started#
        mount(props) {
            console.log('props: ', props)
            bootstrapVue3(props.container?.querySelector('#app'))
            // 可以通过props读取主应用的参数：msg
            // 监听主应用传值
            // props.setLoading(false)
            // props.onGlobalStateChange((res: any) => {
            //     console.log('res: ', res)
            // })
        },
        bootstrap() {
            console.log('bootstrap')
        },
        unmount() {
            // 卸载子应用
            app.unmount()
            app = null
        },
        update() {
            // 触发子应用更新
            console.log('update')
        }
    })
}

// 判断当前应用是否在主应用中
qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : bootstrapVue3('#app')
