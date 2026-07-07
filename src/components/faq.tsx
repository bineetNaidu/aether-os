import { FaqItem } from "@/components/faq-item";
import { Starfield } from "@/components/starfield";
import { FAQ_ENTRIES } from "@/lib/faq-data";

export function Faq() {
    return (
        <section className="relative overflow-hidden bg-obsidian px-8 py-32 md:px-16">
            <Starfield />

            <div className="relative z-10 mx-auto max-w-3xl">
                <div className="mb-16 text-center">
                    <span className="text-sm tracking-[0.3em] text-ethereal/50 uppercase">
                        FAQ
                    </span>
                    <h2 className="mt-6 font-serif text-5xl italic md:text-6xl">
                        Questions from orbit
                    </h2>
                </div>

                <div>
                    {FAQ_ENTRIES.map((entry, i) => (
                        <FaqItem
                            key={entry.question}
                            index={i}
                            question={entry.question}
                            answer={entry.answer}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}