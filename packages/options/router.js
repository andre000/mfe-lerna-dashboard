import VueRouter from 'vue-router'
import Users from '@/pages/Users.vue';
import Permissions from '@/pages/Permissions.vue';
import Logs from '@/pages/Logs.vue';
import Services from '@/pages/Services.vue';
import Options from '@/pages/Options.vue';

export default new VueRouter({
  routes: [
    { path: '/options/services', component: Services },
    { path: '/options/logs', component: Logs },
    { path: '/options/permissions', component: Permissions },
    { path: '/options/users', component: Users },
    { path: '/options', component: Options },
  ],
  mode: 'history'
})
