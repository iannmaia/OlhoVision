function Login({ onLoginSuccess }) {
  const [usuario, setUsuario] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  function onSubmit(e) {
    e.preventDefault();

    const validUsuario = "vendedor1";
    const validPassword = "vendedor1";

    if (usuario === validUsuario && password === validPassword) {
      onLoginSuccess();
      setError("");
    } else {
      setError("Usuário ou senha incorretos.");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full sm:w-96">
        <h1 className="text-2xl text-center font-bold text-gray-900 mb-6">Bem-vindo</h1>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Usuário</label>
            <input
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2"
              placeholder="Digite seu usuário"
            />
          </div>

          <div>
            <label className="block text-gray-700">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2"
              placeholder="Digite sua senha"
            />
          </div>

          {error && <div className="text-red-500 text-sm">{error}</div>}

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
