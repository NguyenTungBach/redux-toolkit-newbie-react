import Home from "../page/Home";
import Content from "../page/Content";
import About from "../page/About";
import Update from "../page/Update";
import Create from "../page/Create";
import config from "../config";
import HeaderOnly from "../layout/HeaderOnly/HeaderOnly";


const publicRouters = [
    { path: config.routes.home, component: Home },
    { path: config.routes.about, component: About ,changeLayout: HeaderOnly},
    { path: config.routes.create, component: Create },
    { path: config.routes.content, component: Content,changeLayout: HeaderOnly },
    { path: config.routes.update, component: Update },
];

export { publicRouters };