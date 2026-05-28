// Lonetrail — site config loaded from YAML
// Edit src/site.yml to customize your site.
import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";
import yaml from "./site.yml";

const cfg = yaml as {
	site: {
		title: string;
		subtitle: string;
		url: string;
		lang: string;
		author: string;
		email: string;
		favicon: string;
		banner?: string;
		og_image: string;
	};
	profile: {
		avatar: string;
		name: string;
		bio: string;
		links?: { name: string; icon?: string; url: string }[];
	};
	nav: Record<string, string>[];
	features?: {
		breadcrumb?: boolean;
		comments?: boolean;
		search?: boolean;
		donate?: boolean;
		rss_feed?: boolean;
		sitemap?: boolean;
		related_posts?: boolean;
		series?: boolean;
		license?: boolean;
	};
	seo?: {
		enable_json_ld?: boolean;
		breadcrumb?: boolean;
		keywords?: string;
		same_as?: string[];
	};
	services?: {
		posthog?: { api_key?: string; api_host?: string };
		webmention?: { url?: string };
		blogsclub?: { badge_url?: string };
		issue_tracker?: { url?: string };
	};
	trusted_domains?: string[];
	copyright?: {
		text?: string;
		site_name?: string;
		license?: string;
		license_url?: string;
	};
};

export const siteConfig: SiteConfig = {
	title: cfg.site.title,
	subtitle: cfg.site.subtitle,
	lang: cfg.site.lang,
	banner: {
		enable: true,
		src: cfg.site.banner || "",
		position: "center",
		credit: { enable: false, text: "", url: "" },
	},
	toc: { enable: true, depth: 3 },
	showPageViews: false,
	favicon: [{ src: cfg.site.favicon, sizes: "32x32" }],
};

export const navBarConfig: NavBarConfig = {
	links: cfg.nav.map((item) => {
		const [name, url] = Object.entries(item)[0];
		return { name, url };
	}),
};

export const profileConfig: ProfileConfig = {
	avatar: cfg.profile.avatar,
	name: cfg.profile.name,
	bio: cfg.profile.bio,
	links: cfg.profile.links || [],
};

export const licenseConfig: LicenseConfig = {
	enable: cfg.features?.license ?? true,
	name: cfg.copyright?.license || "MIT",
	url: cfg.copyright?.license_url || "https://opensource.org/licenses/MIT",
};

export const copyrightConfig = {
	enable: false,
	siteName: cfg.copyright?.site_name || cfg.site.title,
	startYear: 2025,
	endYear: 2026,
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
};

// Template-wide exports for YAML-driven injection
export const siteYaml = {
	site: cfg.site,
	profile: cfg.profile,
	nav: cfg.nav,
	features: {
		breadcrumb: cfg.features?.breadcrumb ?? true,
		comments: cfg.features?.comments ?? false,
		search: cfg.features?.search ?? true,
		donate: cfg.features?.donate ?? false,
		rss_feed: cfg.features?.rss_feed ?? true,
		sitemap: cfg.features?.sitemap ?? true,
		related_posts: cfg.features?.related_posts ?? true,
		series: cfg.features?.series ?? true,
		license: cfg.features?.license ?? true,
	},
	seo: {
		enable_json_ld: cfg.seo?.enable_json_ld ?? true,
		breadcrumb: cfg.seo?.breadcrumb ?? true,
		keywords: cfg.seo?.keywords || "",
		same_as: cfg.seo?.same_as || [],
	},
	services: {
		posthog: {
			api_key: cfg.services?.posthog?.api_key || "",
			api_host: cfg.services?.posthog?.api_host || "https://app.posthog.com",
		},
		webmention: { url: cfg.services?.webmention?.url || "" },
		blogsclub: { badge_url: cfg.services?.blogsclub?.badge_url || "" },
		issue_tracker: { url: cfg.services?.issue_tracker?.url || "" },
	},
	trusted_domains: cfg.trusted_domains || [],
	copyright: {
		text: cfg.copyright?.text || cfg.site.title,
		site_name: cfg.copyright?.site_name || cfg.site.title,
		license: cfg.copyright?.license || "MIT",
		license_url: cfg.copyright?.license_url || "https://opensource.org/licenses/MIT",
	},
};
