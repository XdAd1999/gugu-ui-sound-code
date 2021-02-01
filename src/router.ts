import { createWebHashHistory, createRouter } from "vue-router";
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwictDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import Markdown from "./components/Markdown.vue"
import intor from './markdown/intor.md'
import install from './markdown/install.md'
import getStarted from './markdown/get-started.md'
import { h } from "vue"; 

const history = createWebHashHistory();
const md = string => h(Markdown, {content: string ,key: string})
export const router = createRouter({
    history:history,
    routes: [
        {path: '/',component: Home},
        {path: '/doc',component: Doc, children:[
            {path: "", redirect:'doc/intor'},
            {path: 'intor', component:md(intor) },
            {path: 'get-started', component: md(getStarted)},
            {path: 'install', component: md(install)},
            {path: 'switch', component: SwitchDemo},
            {path: 'button', component: ButtonDemo},
            {path: 'dialog', component: DialogDemo},
            {path: 'tabs', component: TabsDemo}
        ]}
    ]
});