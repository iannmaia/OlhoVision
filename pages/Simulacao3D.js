function Simulation3D() {
    const [selectedFrame, setSelectedFrame] = React.useState('aviator');
    const [selectedColor, setSelectedColor] = React.useState('black');
    const [selectedSize, setSelectedSize] = React.useState('Médio');

    const frames = [
        { id: 'aviator', name: 'Aviator', brand: 'Ray-Ban' },
        { id: 'wayfarer', name: 'Wayfarer', brand: 'Ray-Ban' },
        { id: 'frogskin', name: 'Frogskin', brand: 'Oakley' },
        { id: 'holbrook', name: 'Holbrook', brand: 'Oakley' },
    ];

    const colors = [
        { id: 'black', name: 'Preto', hex: '#000000' },
        { id: 'brown', name: 'Marrom', hex: '#8B4513' },
        { id: 'blue', name: 'Azul', hex: '#0066CC' },
        { id: 'gold', name: 'Dourado', hex: '#FFD700' },
    ];

    const sizes = ['Pequeno', 'Médio', 'Grande'];

    return (
        <div className="flex h-screen flex-col sm:flex-row bg-gray-50">
            <div className="flex-1 p-8 sm:ml-64">
                <div className="mb-8 text-center">
                    <h1 className="text-gray-900 mb-2 text-3xl font-semibold">Simulação 3D com IA</h1>
                    <p className="text-gray-500 mb-4">Visualize como as armações ficam no rosto do cliente</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="sm:col-span-2">
                        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
                            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                                <div className="text-center">
                                    <div className="w-16 h-16 text-gray-400 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                                        <span className="text-white">📸</span>
                                    </div>
                                    <p className="text-gray-600 mb-4">Captura de Imagem</p>
                                    <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
                                        <span className="w-5 h-5">📷</span>
                                        Iniciar Webcam
                                    </button>
                                </div>
                            </div>

                            <div className="p-6 border-t border-gray-200">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-gray-900 mb-1">
                                            {frames.find(f => f.id === selectedFrame)?.name}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            {frames.find(f => f.id === selectedFrame)?.brand} • {selectedColor} • {selectedSize}
                                        </p>
                                    </div>
                                    <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors">
                                        Adicionar ao Carrinho
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
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
                                Cores
                            </h3>
                            <div className="grid grid-cols-4 gap-2">
                                {colors.map((color) => (
                                    <button
                                        key={color.id}
                                        onClick={() => setSelectedColor(color.id)}
                                        className={`aspect-square rounded-xl flex items-center justify-center transition-all ${selectedColor === color.id
                                                ? 'ring-2 ring-blue-600 ring-offset-2'
                                                : 'hover:scale-110'
                                            }`}
                                        style={{ backgroundColor: color.hex }}
                                        title={color.name}
                                    >
                                        {selectedColor === color.id && (
                                            <div className="w-2 h-2 bg-white rounded-full"></div>
                                        )}
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

                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-200 p-6 shadow-lg">
                            <h3 className="text-gray-900 mb-2">Dica de IA</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Esta armação combina perfeitamente com o formato de rosto oval do cliente.
                            </p>
                            <button className="w-full bg-white text-blue-600 px-4 py-2 rounded-xl hover:bg-blue-50 transition-colors">
                                Ver Análise Completa
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
