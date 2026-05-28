import { siteConfig } from "../config";
import type I18nKey from "./i18nKey";
import { en } from "./languages/en";
import { zh_CN } from "./languages/zh_CN";
export type Translation = {
	[K in I18nKey]: string;
};
const defaultTranslation = en;
const map: { [key: string]: Translation } = {
	en: en,
	en_us: en,
	en_gb: en,
	en_au: en,
	zh_cn: zh_CN,
	zh: zh_CN,
};
export function getTranslation(lang: string): Translation {
	return map[lang.toLowerCase()] || defaultTranslation;
}

// Client-side language detection
function getClientLang(): string {
	if (typeof window === "undefined") {
		return siteConfig.lang || "en";
	}

	// Check localStorage for user preference
	const stored = localStorage.getItem("preferred_locale");
	if (stored) {
		return stored;
	}

	// Detect from browser language
	const browserLang = navigator.language || (navigator as any).userLanguage;
	if (browserLang) {
		const normalized = browserLang.toLowerCase();
		if (normalized.startsWith("zh")) {
			return "zh_CN";
		}
	}

	return siteConfig.lang || "en";
}

export function i18n(key: I18nKey): string {
	const lang = typeof window !== "undefined" ? getClientLang() : (siteConfig.lang || "en");
	return getTranslation(lang)[key];
}
