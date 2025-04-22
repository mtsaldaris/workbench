export async function GET() {
  const quotes = [
    "Stay hungry, stay foolish.",
    "Code is like humor. When you have to explain it, it’s bad.",
    "Simplicity is the soul of efficiency.",
  ]
  const quote = quotes[Math.floor(Math.random() * quotes.length)]
  return Response.json({ quote })
}