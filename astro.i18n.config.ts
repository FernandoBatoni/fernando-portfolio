import { defineAstroI18nConfig } from "astro-i18n"

export default defineAstroI18nConfig({
	defaultLangCode: "pt",
	supportedLangCodes: ["en"],
	showDefaultLangCode: false,
	trailingSlash: "never",
	translations: {
    en: "./src/locale/en.json",
    pt: "./src/locale/pt.json"
  }
})
