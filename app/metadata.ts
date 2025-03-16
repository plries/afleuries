import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Afleuries Illustrated: Live Portrait Art",
    description: "Live digital portraits, drawn on the spot and projected in real time for everyone to see. It’s live art in action—plus a keepsake to take home!",
    authors: { name: "Abigail Aries"},
    keywords: [],
    viewport: "width=device-width, initial-scale=1.0",
    openGraph: {
        title: "Afleuries Illustrated: Live Portrait Art",
        description: "Live digital portraits, drawn on the spot and projected in real time for everyone to see. It’s live art in action—plus a keepsake to take home!",
        images: [
            {
                url: "https://afleuries.com/opengraph-image.png",
                width: 1200,
                height: 630,
                alt: "Afleuries Illustrated: Live Portrait Art",
            },
        ],
        siteName: "Afleuries Illustrated: Live Portrait Art",
    },
    robots: {
        index: true,
        follow: true,
    }
};