/* eslint-disable no-use-before-define */
/* eslint-disable import/no-cycle */
import { home } from './views/home.js';
import { register } from './views/register.js';
import { login } from './views/login.js';
import { showRegister } from './controllers/registerDOM.js';
import { showLogin } from './controllers/loginDOM.js';
import { showHome } from './controllers/homeDOM.js';

const rootDiv = document.getElementById('root');
const routes = {
  '/': login,
  '/register': register,
  '/home': home,
};
export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  rootDiv.innerHTML = routes[pathname]();
  route(pathname);
};
// Flechas del navegador(atras y adelante)
window.onpopstate = () => {
  const component = window.location.pathname;
  rootDiv.innerHTML = routes[component]();
  route(component);
};
onNavigate('/');

function route(views) {
  switch (views) {
    case '/':
      showLogin();
      break;
    case '/register':
      showRegister();
      break;
    case '/home':
      showHome();
      break;
    default:
      document.getElementById('root').innerHTML = '404 not found';
      break;
  }
}
