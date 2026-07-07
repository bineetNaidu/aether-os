export function EyebrowBadge() {
    return (
        <span className="inline-flex items-center gap-2.5 rounded-full border border-ethereal/15 bg-ethereal/5 px-4 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-pink opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-neon-pink" />
            </span>
            <span className="text-xs tracking-[0.3em] text-ethereal/70 uppercase">
                Introducing AetherOS
            </span>
        </span>
    );
}