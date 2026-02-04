
export interface Tool {
    id: string;
    image: string;
    link: string;
    internalLink?: string;
}

export const tools: Tool[] = [
    {
        id: "wise",
        image: "/images/wise_hero_v2.png",
        link: "https://wise.com/invite/dic/shunm18",
        internalLink: "/nomad-info/wise"
    },
    {
        id: "nordvpn",
        image: "/images/nordvpn_hero.png",
        link: "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=113693&url_id=902",
        internalLink: "/nomad-info/nordvpn"
    },
    {
        id: "airalo",
        image: "/images/airalo_hero.png",
        link: "https://airalo.tp.st/2x81FqY3",
        internalLink: "/nomad-info/airalo"
    },
    {
        id: "safetywing",
        image: "/images/safetywing_hero.png",
        link: "https://safetywing.com/nomad-insurance/?referenceID=nomadinthailand&utm_source=nomadinthailand&utm_medium=Ambassador",
        internalLink: "/nomad-info/safetywing"
    },
    {
        id: "creditcard",
        image: "/images/credit_card_hero.png",
        link: "https://www.eposcard.co.jp/index.html", // Placeholder, ideally should be a comparison or specific high-yield card
        internalLink: "/nomad-info/credit-card"
    }
];
