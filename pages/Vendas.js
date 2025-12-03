function Vendas() {
  const [termoBusca, setTermoBusca] = React.useState('');
  const [carrinho, setCarrinho] = React.useState([]);
  const [nomeCliente, setNomeCliente] = React.useState('');
  const [carrinhoExpandido, setCarrinhoExpandido] = React.useState(false);

  const produtos = [
    { id: '1', nome: 'Aviator Classic', marca: 'Ray-Ban', preco: 450, categoria: 'Sol' },
    { id: '2', nome: 'Wayfarer', marca: 'Ray-Ban', preco: 380, categoria: 'Sol' },
    { id: '3', nome: 'Frogskin', marca: 'Oakley', preco: 520, categoria: 'Sol' },
    { id: '4', nome: 'Holbrook', marca: 'Oakley', preco: 490, categoria: 'Sol' },
    { id: '5', nome: 'PR 17WS', marca: 'Prada', preco: 890, categoria: 'Grau' },
    { id: '6', nome: 'CH 3281', marca: 'Chanel', preco: 1200, categoria: 'Grau' },
    { id: '7', nome: 'GG0061S', marca: 'Gucci', preco: 950, categoria: 'Sol' },
    { id: '8', nome: 'TF 5178', marca: 'Tom Ford', preco: 780, categoria: 'Grau' }
  ];

  const produtosFiltrados = produtos.filter(
    (produto) =>
      produto.nome.toLowerCase().includes(termoBusca.toLowerCase()) ||
      produto.marca.toLowerCase().includes(termoBusca.toLowerCase())
  );

  const adicionarAoCarrinho = (produto) => {
    const itemExistente = carrinho.find((item) => item.id === produto.id);
    if (itemExistente) {
      setCarrinho(carrinho.map((item) =>
        item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
      ));
    } else {
      setCarrinho([...carrinho, { ...produto, quantidade: 1 }]);
    }
  };

  const removerDoCarrinho = (idProduto) => {
    setCarrinho(carrinho.filter((item) => item.id !== idProduto));
  };

  const atualizarQuantidade = (idProduto, novaQuantidade) => {
    if (novaQuantidade === 0) {
      removerDoCarrinho(idProduto);
    } else {
      setCarrinho(carrinho.map((item) =>
        item.id === idProduto ? { ...item, quantidade: novaQuantidade } : item
      ));
    }
  };

  const total = carrinho.reduce((soma, item) => soma + item.preco * item.quantidade, 0);

  return (
    <div className="flex h-screen flex-col sm:flex-row bg-gray-50">
      <div className="flex-1 p-8 sm:ml-64">
        <div className="mb-8 text-center">
          <h1 className="text-gray-900 mb-2 text-3xl font-semibold">Vendas</h1>
          <p className="text-gray-500 mb-4">Busque e adicione produtos ao carrinho</p>
        </div>

        <div className="barra-busca mb-6">
          <input
            type="text"
            placeholder="Buscar armações por nome ou marca..."
            value={termoBusca}
            onChange={(e) => setTermoBusca(e.target.value)}
            className="p-3 border rounded-lg w-full"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="sm:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Produtos</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                  {produtosFiltrados.map((produto) => (
                    <div
                      key={produto.id}
                      className="cartao-produto bg-gray-50 p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-100"
                      onClick={() => adicionarAoCarrinho(produto)}
                    >
                      <h4 className="text-gray-900">{produto.nome}</h4>
                      <p className="text-sm text-gray-500">{produto.marca}</p>
                      <span className="block text-lg font-semibold">R$ {produto.preco.toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
              <h3 className="text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-5 h-5">🛒</span>
                Carrinho
              </h3>
              <div className="space-y-4">
                {carrinho.length === 0 ? (
                  <p className="text-gray-500">Carrinho vazio</p>
                ) : (
                  carrinho.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-semibold">{item.nome}</p>
                        <p className="text-xs text-gray-500">{item.marca}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => atualizarQuantidade(item.id, item.quantidade - 1)}
                          className="p-1 border rounded-full text-gray-600"
                        >
                          -
                        </button>
                        <span>{item.quantidade}</span>
                        <button
                          onClick={() => atualizarQuantidade(item.id, item.quantidade + 1)}
                          className="p-1 border rounded-full text-gray-600"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removerDoCarrinho(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remover
                      </button>
                    </div>
                  ))
                )}
              </div>
              <div className="flex justify-between mt-4">
                <span>Total</span>
                <span className="font-semibold">R$ {total.toFixed(2)}</span>
              </div>
              <button
                disabled={carrinho.length === 0 || !nomeCliente}
                className="w-full bg-blue-600 text-white py-3 mt-4 rounded-lg"
              >
                Finalizar Venda
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
