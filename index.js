const { useState } = React;

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState("inicio");

  function handleLoginSuccess() {
    setIsLoggedIn(true);
  }

  function renderPage() {
    if (currentPage === "simulacao") {
      return <Simulation3D />;
    }

    if (currentPage === "vendas") {
      return <Vendas />;
    }

    return (
      <div className="ml-64 p-8">
        <h1 className="text-2xl text-gray-900 mb-2">Início</h1>
        <p className="text-gray-600">
          Selecione uma opção no menu à esquerda.
        </p>
      </div>
    );
  }

  if (!isLoggedIn) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div>
      <SideBarHome
        currentPage={currentPage}
        onChangePage={setCurrentPage}
      />
      {renderPage()}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));