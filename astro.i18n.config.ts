import { defineAstroI18nConfig } from "astro-i18n"

export default defineAstroI18nConfig({
	defaultLangCode: "pt-BR",
	supportedLangCodes: ["en"],
	showDefaultLangCode: false,
	trailingSlash: "never",
	translations: {},
	routeTranslations: {},
})
