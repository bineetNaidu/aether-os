export interface FaqEntry {
    question: string;
    answer: string;
}

export const FAQ_ENTRIES: FaqEntry[] = [
    {
        question: "What exactly is AetherOS?",
        answer:
            "AetherOS is an ambient computing layer that runs quietly across your devices, learning your patterns and surfacing what you need before you ask for it — without a traditional app interface getting in the way.",
    },
    {
        question: "Does it work with my existing devices?",
        answer:
            "Yes. AetherOS syncs across desktop, mobile, and any connected surface you already own. There's no separate hardware required — it layers on top of what you have.",
    },
    {
        question: "How is my data handled?",
        answer:
            "On-device processing is the default for everything. Nothing leaves your ecosystem unless you explicitly opt in to a specific integration, and you can review or revoke access at any time.",
    },
    {
        question: "Can I cancel or downgrade anytime?",
        answer:
            "Yes, there's no lock-in. You can move between Standard and Pro, or cancel entirely, from your account settings at any time — changes take effect on your next billing cycle.",
    },
    {
        question: "Is there a free trial?",
        answer:
            "Early access members get a 14-day trial of Aether Pro with full feature access, no card required upfront. You'll get a reminder before anything is charged.",
    },
];