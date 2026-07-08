import { ReactNode } from "react";

export function VisualFrame({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <div
            className={`relative w-full overflow-hidden rounded-2xl border border-ethereal/10 bg-obsidian/40 ${className}`}
        >
            <div
                aria-hidden="true"
                className="absolute inset-0 opacity-40"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(248,248,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(248,248,248,0.04) 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                }}
            />
            <div className="relative z-10 flex h-full w-full items-center justify-center">
                {children}
            </div>
        </div>
    );
}