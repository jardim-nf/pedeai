function Header() {
  return (
    <header className="p-4 shadow-md bg-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">PedeAí</h1>
        <nav className="space-x-4">
          <a href="#features" className="text-gray-600 hover:text-indigo-600">Funcionalidades</a>
          <a href="#plans" className="text-gray-600 hover:text-indigo-600">Planos</a>
          <a href="#" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Comece Grátis</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;