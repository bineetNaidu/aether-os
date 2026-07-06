export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="flex h-screen items-center justify-center">
        <h1 className="font-serif text-6xl italic">Section One</h1>
      </section>
      <section className="flex h-screen items-center justify-center bg-ethereal text-obsidian">
        <h1 className="font-serif text-6xl italic">Section Two</h1>
      </section>
      <section className="flex h-screen items-center justify-center">
        <h1 className="font-serif text-6xl italic">Section Three</h1>
      </section>
    </main>
  );
}