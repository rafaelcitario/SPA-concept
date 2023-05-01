export default class Router {
  routes = {};

  add(pathname, href) {
    this.routes[pathname] = href;
  }
  async handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes[404];
    const app = document.querySelector("#app");
    const promise = await fetch(route);
    const html = await promise.text();

    app.innerHTML = html;
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);
    this.handle();
  }
}
