const menuItems = [
  { id: "inicio", name: "Início" },
  { id: "simulacao", name: "Simulação em 3D" },
  { id: "vendas", name: "Vendas" },
  { id: "analise", name: "Analise de Lentes" },
  { id: "atendimento", name: "Atendimento" },
];

function SideBarHome({ currentPage, onChangePage }) {
  const [isSidebarVisible, setIsSidebarVisible] = React.useState(true);

  const handleMenuClick = (id) => {
    onChangePage(id);
    if (window.innerWidth < 640) {
      setIsSidebarVisible(false);
    }
  };

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsSidebarVisible(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {!isSidebarVisible && (
        <button
          className="fixed top-4 left-4 z-50 bg-white shadow-md p-2 rounded-md sm:hidden"
          onClick={() => setIsSidebarVisible(true)}
        >
          ☰
        </button>
      )}

      <aside
        className={`fixed left-0 top-0 h-screen ${
          isSidebarVisible ? "w-64" : "w-0"
        } sm:w-64 bg-white border-r border-gray-200 flex flex-col transition-all duration-300 overflow-hidden z-40`}
      >
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white"></span>
            </div>
            <div>
              <h1 className="text-gray-900 text-lg font-semibold">Olho Vision</h1>
              <p className="text-xs text-gray-500">Sistema de Atendimento</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className={
                  isActive
                    ? "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all bg-blue-50 text-blue-600 font-medium"
                    : "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-gray-600 hover:bg-gray-50"
                }
              >
                <span className="w-5 h-5">{item.icon}</span>
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 transition-all">
            <span className="w-5 h-5">⚙️</span>
            <span>Configurações</span>
          </button>
        </div>
      </aside>
    </>
  );
}
