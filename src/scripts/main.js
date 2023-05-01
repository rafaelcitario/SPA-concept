import Router from "./router.js";
const router = new Router();

router.add("/", "/src/pages/home.html");
router.add("/about", "/src/pages/about.html");
router.add("/contact", "/src/pages/contact.html");
router.add(404, "/src/pages/status404.html");

window.onpopstate = () => router.handle();
router.handle();
window.route = () => router.route();
