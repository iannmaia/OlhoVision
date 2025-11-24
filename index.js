const { useState } = React;

function LoginForm() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function onSubmit(event) {
    event.preventDefault();

    const validUsuario = 'vendedor1';
    const validPassword = 'vendedor123';

    if (usuario === validUsuario && password === validPassword) {
      alert('Login bem-sucedido!');
      setError('');
    } else {
      setError('Usuário ou senha incorretos.');
    }
  }

  return (
    <div className="container">
      <form onSubmit={onSubmit} className="form-container">
        <div>
          <h1 className="title">Bem-vindo</h1>
        </div>

        <div className="input-group">
          <label htmlFor="usuario" className="label">Usuário</label>
          <input
            id="usuario"
            type="text"
            placeholder="Digite seu usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
            className="input-field"
          />
        </div>

        <div className="input-group">
          <label htmlFor="password" className="label">Senha</label>
          <input
            id="password"
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-field"
          />
        </div>

        {error && <div className="error-message">{error}</div>} {}

        <button type="submit" className="submit-btn">
          Entrar
        </button>
      </form>
    </div>
  );
}

ReactDOM.render(
  <LoginForm />,
  document.getElementById('login')
);
