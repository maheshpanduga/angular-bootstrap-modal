import "./polyfills";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { NgbdModalConfigModule } from "./bootstrap-modal/modal-config.module";

platformBrowserDynamic()
  .bootstrapModule(NgbdModalConfigModule)
  .then((ref) => {
    // Ensure Angular destroys itself on hot reloads.
    if (window["ngRef"]) {
      window["ngRef"].destroy();
    }
    window["ngRef"] = ref;

    // Otherwise, log the boot error
  })
  .catch((err) => console.error(err));
