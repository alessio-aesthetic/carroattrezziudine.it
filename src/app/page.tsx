import CityHome from '@/components/CityHome'

export default function Home() {
  return (
    <>
      <aside aria-label="Avviso di manutenzione" className="border-b border-amber-200 bg-amber-50 px-4 py-3 text-center text-sm font-semibold text-amber-950">
        Sito in manutenzione
      </aside>
      <CityHome />
    </>
  )
}
