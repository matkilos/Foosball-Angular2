import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import Appmodule = require("./app.module");

platformBrowserDynamic().bootstrapModule(Appmodule.AppModule)
    .catch(err => console.error(err));