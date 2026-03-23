import { MessageCircle } from "lucide-react"


export const Player = () => {
  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-6xl flex-col gap-6">
        <div className="flex items-center justify-between">
          {/* header */}
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold"> Fundamentos Redux</h1>
            <span className="text-sm text-zinc-400">Modulo - Desvendando o redux</span>
          </div>

          <button className="flex items-center gap-2 bg-violet-500 hover:bg-violet-600 text-white py-2 px-3 rounded text-sm font-medium"><MessageCircle className="w-4 h-4" /> Deixar feedback</button>
        </div>
        <main className="relative flex overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 shadow">
          <div className="flex-1">video</div>
          <aside className="w-80 border-l border-zinc-700 h-[600px]">sidebar</aside>
        </main>
      </div>
    </div>
  )
}
