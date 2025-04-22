export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Hey,  I&apos;m Myron</h1>
      <p className="text-gray-700 mb-4">
        I&apos;m a software engineer with a backend focus, currently building things at Wrkr and exploring the intersection
        of APIs, autonomy, and adventure. This site is part portfolio, part playground — a space to explore what  I&apos;m
        learning and building.
      </p>

      <p className="text-gray-700 mb-4">
        Right now  I&apos;m working on becoming a more self-sufficient engineer, growing my product sense, and sharing more
        of what I make.  I&apos;m also experimenting with ideas around location independence, creative side projects, and
        meaningful software.
      </p>

      <p className="text-gray-700">
        Feel free to explore the <a href="/projects" className="text-blue-600 underline">Projects</a> and
        <a href="/api-showcase" className="text-blue-600 underline ml-1">API Playground</a> — or reach out if you yo&apos;re
        building something interesting.
      </p>
    </main>
  );
}