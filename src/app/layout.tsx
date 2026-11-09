export const metadata = { title: 'Sito in manutenzione' }

export default function RootLayout() {
  return (
    <html lang="it">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif' }}>
        <main style={{ minHeight: '100dvh', display: 'grid', placeItems: 'center', textAlign: 'center', padding: '1rem', boxSizing: 'border-box' }}>
          <h1>Sito in manutenzione</h1>
        </main>
      </body>
    </html>
  )
}
