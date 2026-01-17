import React, { useState } from 'react';
import {
    Package,
    Heart,
    Calendar,
    Bell,
    ShoppingCart,
    TrendingUp,
    MapPin,
    Clock,
    Users
} from 'lucide-react';

const ClientDashboard = () => {
    const [activePet, setActivePet] = useState('rex');

    const pets = [
        { id: 'rex', name: 'Rex', type: 'Chien', breed: 'Golden Retriever', age: 4 },
        { id: 'mina', name: 'Mina', type: 'Chat', breed: 'Persan', age: 2 }
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-6">
            { }
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                        🐕 Bonjour, Mohamed!
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Gérez la nutrition de vos compagnons
                    </p>
                </div>

                <div className="flex items-center space-x-4 mt-4 md:mt-0">
                    <button className="relative p-2 text-gray-600 hover:text-gray-800">
                        <Bell size={24} />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="font-bold text-blue-600">M</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                { }
                <div className="lg:col-span-2 space-y-6">
                    { }
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">
                            Mes Animaux
                        </h2>
                        <div className="flex space-x-4">
                            {pets.map(pet => (
                                <button
                                    key={pet.id}
                                    onClick={() => setActivePet(pet.id)}
                                    className={`flex-1 p-4 rounded-lg border-2 transition-all ${activePet === pet.id
                                        ? 'border-blue-500 bg-blue-50'
                                        : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                >
                                    <div className="flex items-center space-x-3">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                            <span className="text-2xl">
                                                {pet.type === 'Chien' ? '🐕' : '🐈'}
                                            </span>
                                        </div>
                                        <div className="text-left">
                                            <h3 className="font-semibold text-gray-800">{pet.name}</h3>
                                            <p className="text-sm text-gray-600">{pet.breed}, {pet.age} ans</p>
                                        </div>
                                    </div>
                                </button>
                            ))}
                            <button className="flex-1 p-4 rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all">
                                <div className="flex items-center justify-center space-x-2">
                                    <span className="text-2xl">+</span>
                                    <span className="text-gray-600">Ajouter</span>
                                </div>
                            </button>
                        </div>
                    </div>

                    { }
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <h2 className="text-lg font-semibold text-gray-800 mb-6">
                            Statistiques
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <div className="flex items-center justify-between">
                                    <span className="text-blue-600 font-semibold">3</span>
                                    <Package className="text-blue-500" size={20} />
                                </div>
                                <p className="text-sm text-gray-600 mt-2">Commandes actives</p>
                            </div>

                            <div className="bg-green-50 p-4 rounded-lg">
                                <div className="flex items-center justify-between">
                                    <span className="text-green-600 font-semibold">28</span>
                                    <Heart className="text-green-500" size={20} />
                                </div>
                                <p className="text-sm text-gray-600 mt-2">Jours de suivi</p>
                            </div>

                            <div className="bg-purple-50 p-4 rounded-lg">
                                <div className="flex items-center justify-between">
                                    <span className="text-purple-600 font-semibold">2</span>
                                    <Users className="text-purple-500" size={20} />
                                </div>
                                <p className="text-sm text-gray-600 mt-2">Animaux</p>
                            </div>

                            <div className="bg-orange-50 p-4 rounded-lg">
                                <div className="flex items-center justify-between">
                                    <span className="text-orange-600 font-semibold">85%</span>
                                    <TrendingUp className="text-orange-500" size={20} />
                                </div>
                                <p className="text-sm text-gray-600 mt-2">Santé moyenne</p>
                            </div>
                        </div>
                    </div>
                </div>

                { }
                <div className="space-y-6">
                    { }
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-sm p-6 text-white">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold text-lg">Prochaine livraison</h3>
                            <Package size={24} />
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <Clock size={20} />
                                <span>Dans 3 jours</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MapPin size={20} />
                                <span>Tunis, Lafayette</span>
                            </div>

                            <div className="pt-4">
                                <div className="flex items-center justify-between text-sm mb-2">
                                    <span>Préparation</span>
                                    <span>Livraison</span>
                                </div>
                                <div className="w-full bg-white/20 rounded-full h-2">
                                    <div className="w-2/3 bg-white h-2 rounded-full"></div>
                                </div>
                            </div>

                            <button className="w-full mt-4 bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                                Suivre la commande
                            </button>
                        </div>
                    </div>

                    { }
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <h3 className="font-semibold text-gray-800 mb-4">📅 Calendrier Santé</h3>
                        <div className="space-y-3">
                            {[
                                { date: '15 mai', event: 'Vaccin annuel', type: 'vaccin' },
                                { date: '22 mai', event: 'Vermifuge', type: 'traitement' },
                                { date: '30 mai', event: 'Contrôle poids', type: 'controle' }
                            ].map((item, index) => (
                                <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${item.type === 'vaccin' ? 'bg-red-100 text-red-600' :
                                        item.type === 'traitement' ? 'bg-blue-100 text-blue-600' :
                                            'bg-green-100 text-green-600'
                                        }`}>
                                        <Calendar size={20} />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800">{item.event}</p>
                                        <p className="text-sm text-gray-600">{item.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientDashboard;