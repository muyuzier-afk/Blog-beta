import { Icon } from "@iconify/react";
import { StripeFooter } from "../ui/StripeFooter";
import { siteConfig } from "../../config";
import { i18n } from "../../i18n/translation";
import I18nKey from "../../i18n/i18nKey";

interface PocketCardProps {
	name: string;
	slogan: string;
	avatarSrc?: string;
	links?: { label: string; href: string; icon?: string }[];
	className?: string;
}

const GitHubIcon = () => (
	<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
		<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
	</svg>
);

const GiteeIcon = () => (
	<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
		<path d="M11.999 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 11.999 12C18.627 24 24 18.628 24 12c0-6.627-5.373-12-12.001-12zm-3.36 16.8H4.8V7.2h3.84v9.6h-.001zm8.16-4.8h-3.84V7.2H16.8v4.8zm0 4.8h-3.84v-3.6H16.8v3.6z"/>
	</svg>
);

const TelegramIcon = () => (
	<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
		<path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
	</svg>
);

export const PocketCard = ({
	name,
	slogan,
	avatarSrc,
	links = [],
	className = "",
}: PocketCardProps) => {
	return (
		<div
			className={`relative w-full max-w-[840px] bg-lt-bg paper-texture shadow-2xl px-6 md:px-16 py-8 overflow-hidden border-t border-lt-border/20 ${className}`}
		>
			<div className="absolute -top-10 -right-20 pointer-events-none select-none z-0">
				<span className="font-display text-[150px] md:text-[240px] text-lt-ink opacity-[0.03] leading-none uppercase whitespace-nowrap">
					Pioneer
				</span>
			</div>

			<div className="relative z-10 flex flex-row gap-8 md:gap-12">
				<div className="relative w-20 h-24 md:w-24 md:h-28 bg-lt-surface border border-lt-border/50 shrink-0 overflow-hidden shadow-inner group -translate-y-1">
					<div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-lt-ink transition-all group-hover:scale-110" />
					<div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-lt-ink transition-all group-hover:scale-110" />
					{avatarSrc ? (
						<img
							src={avatarSrc}
							alt="Avatar"
							className="w-full h-full object-cover transition-all duration-700 block no-styling"
						/>
					) : (
						<div className="w-full h-full flex items-center justify-center">
						</div>
					)}
				</div>

				<div className="flex-1 flex flex-col md:flex-row justify-between gap-4 min-w-0 pt-0">
					<div className="min-w-0 flex flex-col items-start">
						<div className="flex items-start gap-3 mb-1">
							<h1 className="font-display text-3xl md:text-4xl text-lt-ink uppercase tracking-tighter leading-none m-0 p-0">
								{name}
							</h1>
							<span className="font-mono text-[9px] font-bold text-lt-accent uppercase tracking-widest border border-lt-accent/30 px-1">
								Auth_05
							</span>
						</div>
						<p className="font-cn text-[14px] text-lt-ink font-black truncate">
							{slogan}
						</p>

					</div>

					<div className="flex gap-1.5 shrink-0 flex-wrap">
						<a
							href={siteConfig.url}
							target="_blank"
							rel="noopener noreferrer"
							className="w-8 h-8 flex items-center justify-center border border-lt-accent text-lt-accent hover:bg-lt-accent hover:text-lt-bg transition-all active:scale-95 bg-lt-accent/5"
							title={siteConfig.url}
						>
							<Icon icon="material-symbols:home-outline" className="w-4 h-4" />
						</a>
					<a
						href="/subscribe/"
						className="h-8 flex items-center gap-1 px-2 border border-lt-ink text-lt-ink bg-lt-ink/5 hover:bg-lt-ink hover:text-lt-bg transition-all active:scale-95 text-[10px] font-mono font-bold"
						title={i18n(I18nKey.followRss)}
					>
						<Icon icon="material-symbols:rss-feed" className="w-3.5 h-3.5" />
						{i18n(I18nKey.follow)}
					</a>
							{links.map((link) => (
								<a
									key={link.label}
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									className="w-8 h-8 flex items-center justify-center border border-lt-ink text-lt-ink hover:bg-lt-ink hover:text-lt-bg transition-all active:scale-95"
									title={link.label}
								>
									{link.icon === "mdi:github" && <GitHubIcon />}
									{link.icon === "simple-icons:gitee" && <GiteeIcon />}
									{link.icon === "mdi:telegram" && <TelegramIcon />}
									{!link.icon && <span className="text-[10px] font-mono font-bold">{link.label}</span>}
								</a>
							))}
					</div>
				</div>
			</div>

			<StripeFooter />
		</div>
	);
};
