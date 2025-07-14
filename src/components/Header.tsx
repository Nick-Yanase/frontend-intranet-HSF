export default function Header(){
  return(
    <header className="w-full h-24 flex justify-center items-center bg-zinc-900 mb-10">
      <nav className="w-full max-w-7xl flex justify-between items-center">
        <span className="text-purple-500 font-bold text-xl">HSF</span>
        <button className="px-4 py-2 flex items-center justify-center bg-purple-400 rounded-2xl font-semibold"> botão 01 </button>
      </nav>
    </header>
  )
}