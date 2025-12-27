
export interface HeroThemeStyles {
    bg: string;
    badgeBg: string;
    badgeText: string;
    highlight: string;
    buttonBg: string;
    buttonHover: string;
    leafColor: string;
}

export interface HeroThemeContent {
    badgeText: string;
    title: string;
    highlightedTitle: string;
    description: string;
    primaryButtonText: string;
    secondaryButtonText: string;
}

export interface HeroThemeMedia {
    imageUrl: string;
    imageAlt: string;
}

export class HeroTheme {
    id: string;
    name: string;
    isActive: boolean;
    order: number;
    styles: HeroThemeStyles;
    content: HeroThemeContent;
    media: HeroThemeMedia;

    constructor(
        id: string,
        name: string,
        isActive: boolean,
        order: number,
        styles: HeroThemeStyles,
        content: HeroThemeContent,
        media: HeroThemeMedia
    ) {
        this.id = id;
        this.name = name;
        this.isActive = isActive;
        this.order = order;
        this.styles = styles;
        this.content = content;
        this.media = media;
    }

    static fromJson(json: any): HeroTheme {
        return new HeroTheme(
            json.id || json._id, // Handle both id and _id
            json.name,
            json.isActive,
            json.order,
            {
                bg: json.styles.bg,
                badgeBg: json.styles.badgeBg,
                badgeText: json.styles.badgeText,
                highlight: json.styles.highlight,
                buttonBg: json.styles.buttonBg,
                buttonHover: json.styles.buttonHover,
                leafColor: json.styles.leafColor
            },
            {
                badgeText: json.content.badgeText,
                title: json.content.title,
                highlightedTitle: json.content.highlightedTitle,
                description: json.content.description,
                primaryButtonText: json.content.primaryButtonText,
                secondaryButtonText: json.content.secondaryButtonText
            },
            {
                imageUrl: json.media.imageUrl,
                imageAlt: json.media.imageAlt
            }
        );
    }
}
