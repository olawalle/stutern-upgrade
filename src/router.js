import Vue from "vue";
import Router from "vue-router";
import Hire from './components/Hire'
import LandingPage from './components/LandingPage'

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "LandingPage",
      component: LandingPage
    },
    {
      path: "/hire",
      name: "Hire",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import("./components/Hire")
    },
    {
      path: "/hire/:userId",
      name: "SingleHire",
      component: () =>
        import("./components/HireComponents/SingleHire")
    },
    {
      path: "/scholarships",
      name: "Scholarships",
      component: () =>
        import("./components/Scholarships")
    },
    {
      path: "/scholarships/:scholarshipName",
      name: "ScholarshipChild",
      component: () =>
        import("./components/ScholarshipComponents/ScholarshipChild")
    },
    {
      path: "/apply",
      name: "Apply",
      component: () =>
        import("./components/Apply.vue")
    },
    {
      path: "/alumni",
      name: "Alumni",
      component: () =>
        import("./components/Alumni.vue")
    }
  ]
});
