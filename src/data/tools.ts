import { AFFILIATE_LINKS } from "@/config/affiliate";

export interface Tool {
    id: string;
    image: string;
    link: string;
    internalLink?: string;
}

export const tools: Tool[] = [
    {
        id: "wise",
        image: "/images/wise_hero_v2.webp",
        link: AFFILIATE_LINKS.wise,
        internalLink: "/nomad-info/wise"
    },
    {
        id: "nordvpn",
        image: "/images/nordvpn_hero.webp",
        link: AFFILIATE_LINKS.nordvpn,
        internalLink: "/nomad-info/nordvpn"
    },
    {
        id: "airalo",
        image: "/images/airalo_hero.webp",
        link: AFFILIATE_LINKS.airalo,
        internalLink: "/nomad-info/airalo"
    },
    {
        id: "safetywing",
        image: "/images/safetywing_hero.webp",
        link: AFFILIATE_LINKS.safetywing,
        internalLink: "/nomad-info/safetywing"
    },
    {
        id: "creditcard",
        image: "/images/credit_card_hero.webp",
        link: AFFILIATE_LINKS.epos, // Placeholder, ideally should be a comparison or specific high-yield card
        internalLink: "/nomad-info/credit-card"
    }
];
