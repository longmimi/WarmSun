import Vue from 'vue'
import VueRouter from 'vue-router'

// 导航栏各个模块页面
import nxyHome from '../pages/home.vue'
import nxyActivities from '../pages/activities.vue'
import nxyActivitiesContent from '../pages/activitiesContent.vue'
import nxyHousekeeping from '../pages/housekeeping.vue'

import nxyOldPeople from '../pages/oldPeople.vue'
import nxyPolicy from '../pages/policy.vue'

import nxyAbout from '../pages/about.vue'
import nxyVolunteer from '../pages/volunteer.vue'


const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [{
            path: '/',
            name: 'home',
            component: nxyHome
        },
        {
            path: '/Activities',
            name: 'activities',
            component: nxyActivities
        },
        {
            path: '/ActivitiesContent',
            name: 'activitiesContent',
            component: nxyActivitiesContent
        },
        {
            path: '/About',
            name: 'about',
            component: nxyAbout
        },
        {
            path: '/Housekeeping',
            name: 'housekeeping',
            component: nxyHousekeeping
        },
        {
            path: '/oldPeople',
            name: 'oldpeople',
            component: nxyOldPeople
        },
        {
            path: '/Policy',
            name: 'policy',
            component: nxyPolicy
        },
        {
            path: '/Volunteer',
            name: 'volunteer',
            component: nxyVolunteer
        }
    ]
});
export default router