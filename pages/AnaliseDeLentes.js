function AnaliseDeLentes() {
    const [selectedLens, setSelectedLens] = React.useState('progressiva');
    const [selectedDay, setSelectedDay] = React.useState('1');

    const lenses = [
        { id: 'progressiva', name: 'Progressiva', time: '2–3 semanas' },
        { id: 'bifocal', name: 'Bifocal', time: '1–2 semanas' },
        { id: 'simples', name: 'Visão Simples', time: '3–5 dias' },
    ];

    const adaptationCurve = [
        { day: '1', value: '20%' },
        { day: '3', value: '35%' },
        { day: '7', value: '60%' },
        { day: '14', value: '85%' },
        { day: '21', value: '95%' },
    ];

    const discomforts = [
        { id: 'tontura', name: 'Tontura inicial', intensity: 'Leve', duration: '3–5 dias' },
        { id: 'distorsao', name: 'Distorção periférica', intensity: 'Moderada', duration: '1–2 semanas' },
        { id: 'escadas', name: 'Dificuldade ao subir escadas', intensity: 'Leve', duration: '2–3 dias' },
    ];

    const selectedLensData = lenses.find(l => l.id === selectedLens);
    const selectedDayData = adaptationCurve.find(d => d.day === selectedDay);

    return (
        <div className="flex h-screen flex-col sm:flex-row bg-gray-50">
            <div className="flex-1 p-8 sm:ml-64">

                <div className="mb-8 text-center">
                    <h1 className="text-gray-900 mb-2 text-3xl font-semibold">Análise Inteligente de Adaptação</h1>
                    <p className="text-gray-500 mb-4">Previsão baseada em IA para adaptação de lentes</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

                    <div className="sm:col-span-2">
                        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg">

                            <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center">
                                <div className="text-center px-6">

                                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-200 text-blue-600 rounded-full flex items-center justify-center text-2xl">
                                        👁️
                                    </div>

                                    <p className="text-gray-700 mb-2 text-xl font-semibold">
                                        Dia {selectedDay} — Progresso {selectedDayData?.value}
                                    </p>

                                    <p className="text-gray-500 text-sm">
                                        Tipo de lente: {selectedLensData?.name}
                                    </p>
                                </div>
                            </div>

                            <div className="p-6 border-t border-gray-200">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-gray-900 mb-1 text-lg">{selectedLensData?.name}</h3>
                                        <p className="text-sm text-gray-500">
                                            Média de adaptação: {selectedLensData?.time}
                                        </p>
                                    </div>

                                    <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors">
                                        Gerar Relatório
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">

                        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
                            <h3 className="text-gray-900 mb-4 flex items-center gap-2 text-lg">
                                <span>👓</span> Tipo de Lente
                            </h3>

                            <div className="space-y-2">
                                {lenses.map(lens => (
                                    <button
                                        key={lens.id}
                                        onClick={() => setSelectedLens(lens.id)}
                                        className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                                            selectedLens === lens.id
                                                ? 'bg-blue-50 border-2 border-blue-600 text-blue-600'
                                                : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100 text-gray-900'
                                        }`}
                                    >
                                        <div className="font-semibold">{lens.name}</div>
                                        <div className="text-sm text-gray-500">{lens.time}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
                            <h3 className="text-gray-900 mb-4 flex items-center gap-2 text-lg">
                                <span>⏳</span> Tempo de Adaptação
                            </h3>

                            <div className="space-y-2">
                                {adaptationCurve.map(day => (
                                    <div
                                        key={day.day}
                                        className={`w-full px-4 py-3 rounded-xl ${
                                            selectedDay === day.day
                                                ? 'bg-gray-50 border border-gray-200 text-gray-900'
                                                : 'bg-gray-50 border border-gray-200 text-gray-900'
                                        }`}
                                    >
                                        Dia {day.day}: <b>{day.value}</b>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
                            <h3 className="text-gray-900 mb-4 flex items-center gap-2 text-lg">
                                <span>⚠️</span> Desconfortos Previstos
                            </h3>

                            <div className="space-y-4">
                                {discomforts.map(d => (
                                    <div
                                        key={d.id}
                                        className="bg-gray-50 border border-gray-200 rounded-xl p-4"
                                    >
                                        <div className="font-bold">{d.name}</div>
                                        <p className="text-sm">Intensidade: {d.intensity}</p>
                                        <p className="text-sm">Duração: {d.duration}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-200 p-6 shadow-lg">
                            <h3 className="text-gray-900 mb-2">Dica de IA</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Usuários de {selectedLensData?.name} costumam acelerar
                                a adaptação após o dia {selectedDay}.
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
