import { createFileRoute, Link } from "@tanstack/react-router";
import { products } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TouchTalk – NFC Smart Packaging for the Visually Impaired" },
      { name: "description", content: "Tap your phone on the package to hear product name, dates, dosage, storage and safety warnings." },
      { property: "og:title", content: "TouchTalk – NFC Smart Packaging" },
      { property: "og:description", content: "Tap a package, hear its instructions. Inclusive packaging with NFC and tactile print." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-12">
      <p className="text-primary font-bold uppercase tracking-widest">TouchTalk</p>
      <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-tight">Tap the package. Hear the product.</h1>
      <p className="mt-5 text-muted-foreground">
        Each package carries Braille, embossed tactile symbols and a battery-free NFC tag. Hold an NFC phone near it and this page opens and reads the product information aloud.
      </p>

      <h2 className="mt-12 text-2xl font-bold">Demo packages</h2>
      <p className="text-muted-foreground">Each link is what an NFC tag would open.</p>
      <ul className="mt-4 space-y-3">
        {products.map((p) => (
          <li key={p.id}>
            <Link to="/p/$id" params={{ id: p.id }} className="block rounded-2xl border-2 border-border bg-card p-5 hover:border-primary">
              <span className="block text-xl font-bold">{p.name}</span>
              <span className="text-muted-foreground">{p.category} · Expires {p.exp}</span>
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="mt-12 text-2xl font-bold">How it works</h2>
      <ol className="mt-4 space-y-3 list-decimal pl-6">
        <li>Feel the embossed symbol and Braille to identify the product type.</li>
        <li>Bring your phone close to the NFC symbol on the carton.</li>
        <li>The phone opens this page and speaks the details automatically.</li>
        <li>Replay any section: dates, ingredients, dosage, storage, warnings.</li>
      </ol>
    </main>
  );
}
