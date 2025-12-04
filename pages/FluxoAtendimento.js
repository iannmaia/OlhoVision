function FluxoAtendimento() {
  const [selectedFrame, setSelectedFrame] = React.useState('aviator');
  const [selectedLens, setSelectedLens] = React.useState('progressiva');
  const [selectedSize, setSelectedSize] = React.useState('Médio');
  const [clientName, setClientName] = React.useState('');
  const [clientCPF, setClientCPF] = React.useState('');
  const [clientPhone, setClientPhone] = React.useState('');
  const [clientEmail, setClientEmail] = React.useState('');
  const [showPayment, setShowPayment] = React.useState(false);
  const [showPaymentMethods, setShowPaymentMethods] = React.useState(false);

  const frames = [
    { id: 'aviator', name: 'Aviator', brand: 'Ray-Ban', price: 450 },
    { id: 'wayfarer', name: 'Wayfarer', brand: 'Ray-Ban', price: 380 },
    { id: 'frogskin', name: 'Frogskin', brand: 'Oakley', price: 520 },
    { id: 'holbrook', name: 'Holbrook', brand: 'Oakley', price: 490 },
  ];

  const lensTypes = [
    { id: 'progressiva', name: 'Progressiva', price: 500 },
    { id: 'bifocal', name: 'Bifocal', price: 350 },
    { id: 'monofocal', name: 'Monofocal', price: 200 },
  ];

  const sizes = ['Pequeno', 'Médio', 'Grande'];

  const handleFinish = () => {
    const selectedFrameData = frames.find(f => f.id === selectedFrame);
    const selectedLensData = lensTypes.find(l => l.id === selectedLens);
    const total = (selectedFrameData?.price || 0) + (selectedLensData?.price || 0);

    alert(`Atendimento Finalizado!\n\nCliente: ${clientName}\nArmação: ${selectedFrameData?.name}\nLente: ${selectedLensData?.name}\nTotal: R$ ${total.toFixed(2)}`);

    setShowPaymentMethods(true);
  };

  const handlePayment = (paymentMethod) => {
    alert(`Pagamento realizado com sucesso com a forma: ${paymentMethod}`);
    
    setClientName('');
    setClientCPF('');
    setClientPhone('');
    setClientEmail('');
    setSelectedFrame('aviator');
    setSelectedLens('progressiva');
    setSelectedSize('Médio');
    setShowPaymentMethods(false);
    setShowPayment(false);
  };

  return (
    <div className="flex h-screen flex-col sm:flex-row bg-gray-50">
      <div className="flex-1 p-8 sm:ml-64">
        <div className="mb-8 text-center">
          <h1 className="text-gray-900 mb-2 text-3xl font-semibold">Novo Atendimento</h1>
          <p className="text-gray-500 mb-4">Fluxo completo de atendimento ao cliente</p>
        </div>

        {showPaymentMethods ? (
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
            <div className="mb-6">
              <h3 className="text-gray-900 mb-4 text-lg font-semibold">Resumo do Pedido</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Cliente:</span>
                  <span>{clientName}</span>
                </div>
                <div className="flex justify-between">
                  <span>Armação:</span>
                  <span>{frames.find(f => f.id === selectedFrame)?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Lente:</span>
                  <span>{lensTypes.find(l => l.id === selectedLens)?.name}</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total:</span>
                  <span>
                    R$ {(
                      (frames.find(f => f.id === selectedFrame)?.price || 0) +
                      (lensTypes.find(l => l.id === selectedLens)?.price || 0)
                    ).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <h3 className="text-gray-900 mb-4">Escolha a Forma de Pagamento</h3>
            <div className="space-y-4">
              <button
                onClick={() => handlePayment('Cartão de Crédito')}
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
              >
                Cartão de Crédito
              </button>
              <button
                onClick={() => handlePayment('Boleto Bancário')}
                className="w-full px-6 py-3 bg-gray-600 text-white rounded-xl hover:bg-gray-700"
              >
                Boleto Bancário
              </button>
              <button
                onClick={() => handlePayment('Pix')}
                className="w-full px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700"
              >
                Pix
              </button>
            </div>

            <div className="mt-6 flex justify-between">
              <button
                onClick={() => setShowPaymentMethods(false)}
                className="px-6 py-3 bg-gray-300 text-gray-700 rounded-xl"
              >
                Voltar
              </button>
            </div>
          </div>
        ) : showPayment ? (
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
            <h3 className="text-gray-900 mb-4">Tela de Pagamento</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Cliente:</span>
                <span>{clientName}</span>
              </div>
              <div className="flex justify-between">
                <span>Armação:</span>
                <span>{frames.find(f => f.id === selectedFrame)?.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Lente:</span>
                <span>{lensTypes.find(l => l.id === selectedLens)?.name}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span>
                  R$ {(
                    (frames.find(f => f.id === selectedFrame)?.price || 0) +
                    (lensTypes.find(l => l.id === selectedLens)?.price || 0)
                  ).toFixed(2)}
                </span>
              </div>
            </div>

            <div className="mt-6 flex justify-between">
              <button
                onClick={() => setShowPayment(false)}
                className="px-6 py-3 bg-gray-300 text-gray-700 rounded-xl"
              >
                Voltar
              </button>
              <button
                onClick={() => setShowPaymentMethods(true)}
                className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl"
              >
                Escolher Forma de Pagamento
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
              <h3 className="text-gray-900 mb-4">Informações do Cliente</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Nome Completo</label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl"
                    placeholder="Digite o nome completo"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">CPF</label>
                  <input
                    type="text"
                    value={clientCPF}
                    onChange={(e) => setClientCPF(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl"
                    placeholder="Digite o CPF"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Telefone</label>
                  <input
                    type="text"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl"
                    placeholder="Digite o telefone"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl"
                    placeholder="Digite o email"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
              <h3 className="text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-5 h-5">🔲</span>
                Armações
              </h3>
              <div className="space-y-2">
                {frames.map((frame) => (
                  <button
                    key={frame.id}
                    onClick={() => setSelectedFrame(frame.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all ${selectedFrame === frame.id
                      ? 'bg-blue-50 border-2 border-blue-600 text-blue-600'
                      : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100 text-gray-900'
                    }`}
                  >
                    <div className="mb-1">{frame.name}</div>
                    <div className="text-sm text-gray-500">{frame.brand}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
              <h3 className="text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-5 h-5">🎨</span>
                Lentes
              </h3>
              <div className="space-y-2">
                {lensTypes.map((lens) => (
                  <button
                    key={lens.id}
                    onClick={() => setSelectedLens(lens.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all ${selectedLens === lens.id
                      ? 'bg-blue-50 border-2 border-blue-600 text-blue-600'
                      : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100 text-gray-900'
                    }`}
                  >
                    <div className="mb-1">{lens.name}</div>
                    <div className="text-sm text-gray-500">R$ {lens.price}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
              <h3 className="text-gray-900 mb-4">Tamanho</h3>
              <div className="space-y-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-full px-4 py-2 rounded-xl transition-all ${selectedSize === size
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={handleFinish}
                className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl flex items-center gap-2 transition-colors"
              >
                Finalizar Atendimento
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
