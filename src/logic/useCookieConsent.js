
import { initClarity } from "./useClarity";

if (typeof cookieconsent !== "undefined") {
  cookieconsent.run({
    guiOptions: {
      consentModal: {
        layout: "box",
        position: "bottom left",
        equalWeightButtons: true,
        flipButtons: false,
      },
      preferencesModal: {
        layout: "box",
        position: "right",
        equalWeightButtons: true,
        flipButtons: false,
      },
    },
    categories: {
      necessary: {
        readOnly: true,
      },
      analytics: {
        autoClear: {
          cookies: [
            {
              name: /^_ga/,
            },
            {
              name: "_gid",
            },
          ],
        },
      },
    },
    onConsent: (consent) => {
      if (consent.categories.includes("analytics")) {
        initClarity();
      }
    },
  });
}
