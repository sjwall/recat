import i18n from "i18next";
import { initReactI18next } from "react-i18next";

/**
 * Initialise internationalisation with British English.
 */
export function initI18n() {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: {
            "app_name": "Recat",
            "aria_nav_upload": "Navigate to upload image page",
            "cancel": "Cancel",
            "not_found": "The requested resource was not found.",
            "score": "Score: {{score}}",
            "upload": "Upload",
            "upload_button": "Upload",
            "upload_heading": "Select a Cat image to upload.",
            "upload_hint": "There are no Cat images to view!",
            "upload_hint_link": "Upload a Cat image!",
            "username": "Username",
            "password": "Password",
          }
        }
      },
      lng: "en",
      fallbackLng: "en",
      interpolation: {
        escapeValue: false // react already safes from xss
      }
    })
  }
