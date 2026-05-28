/**
 * Language detection and switching utility
 * Detects browser language and manages user preference in localStorage
 */

export type SupportedLocale = "en" | "zh_CN";

const LOCALE_KEY = "preferred_locale";
const SUPPORTED_LOCALES: SupportedLocale[] = ["en", "zh_CN"];

const LOCALE_MAP: Record<string, SupportedLocale> = {
	en: "en",
	"en-us": "en",
	"en-gb": "en",
	"en-au": "en",
	zh: "zh_CN",
	"zh-cn": "zh_CN",
	"zh-hans": "zh_CN",
	"zh-hans-cn": "zh_CN",
};

/**
 * Get the user's preferred locale from localStorage or browser settings
 */
export function getPreferredLocale(): SupportedLocale {
	if (typeof window === "undefined") {
		return "en";
	}

	// Check localStorage first
	const stored = localStorage.getItem(LOCALE_KEY);
	if (stored && SUPPORTED_LOCALES.includes(stored as SupportedLocale)) {
		return stored as SupportedLocale;
	}

	// Detect from browser language
	const browserLang = navigator.language || (navigator as any).userLanguage;
	if (browserLang) {
		const normalized = browserLang.toLowerCase();
		for (const [key, value] of Object.entries(LOCALE_MAP)) {
			if (normalized.startsWith(key)) {
				return value;
			}
		}
	}

	return "en";
}

/**
 * Set the user's preferred locale in localStorage
 */
export function setPreferredLocale(locale: SupportedLocale): void {
	if (typeof window === "undefined") {
		return;
	}
	localStorage.setItem(LOCALE_KEY, locale);
}

/**
 * Get all supported locales with their display names
 */
export function getSupportedLocales(): Array<{
	code: SupportedLocale;
	name: string;
	flag: string;
}> {
	return [
		{ code: "en", name: "English", flag: "🇺🇸" },
		{ code: "zh_CN", name: "中文", flag: "🇨🇳" },
	];
}

/**
 * Apply the locale to the page by updating the lang attribute and reloading if needed
 */
export function applyLocale(locale: SupportedLocale): void {
	if (typeof window === "undefined") {
		return;
	}

	setPreferredLocale(locale);

	// Update html lang attribute
	document.documentElement.lang = locale.replace("_", "-");

	// Dispatch a custom event for components to react to
	window.dispatchEvent(
		new CustomEvent("localechange", {
			detail: { locale },
		}),
	);
}

/**
 * Initialize locale detection on page load
 */
export function initLocale(): void {
	if (typeof window === "undefined") {
		return;
	}

	const locale = getPreferredLocale();
	applyLocale(locale);
}
