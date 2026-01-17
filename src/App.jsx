import React, { useState } from 'react';
import {
    Home,
    Package,
    ShoppingCart,
    Heart,
    User,
    Bell,
    Search,
    Star,
    MapPin,
    Clock,
    ChevronRight,
    Plus
} from 'lucide-react';

function App() {
    const [activeTab, setActiveTab] = useState('dashboard');

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                                    <span className="text-white font-bold">PF</span>
                                </div>
                                <div className="ml-3">
                                    <h1 className="text-xl font-bold text-gray-900">PetFood Tunisia</h1>
                                    <p className="text-sm text-gray-500">Nourriture pour animaux</p>
                                </div>
                            </div>

                            <nav className="hidden md:ml-10 md:flex md:space-x-8">
                                {['dashboard', 'produits', 'commandes', 'sante'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeTab === tab
                                            ? 'bg-blue-50 text-blue-700'
                                            : 'text-gray-700 hover:bg-gray-50'
                                            }`}
                                    >
                                        <span className="capitalize">{tab}</span>
                                    </button>
                                ))}
                            </nav>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="Rechercher..."
                                    className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <button className="relative p-2">
                                <Bell size={24} className="text-gray-600" />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                            </button>

                            <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                    <User size={20} className="text-blue-600" />
                                </div>
                                <span className="hidden md:inline font-medium">Mohamed</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Welcome Banner */}
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white mb-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Bonjour, Mohamed! 👋</h2>
                            <p className="text-blue-100">Commandez la meilleure nourriture pour vos animaux</p>
                        </div>
                        <button className="mt-4 md:mt-0 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center">
                            <ShoppingCart className="mr-2" size={20} />
                            Nouvelle commande
                        </button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <div className="flex items-center">
                            <div className="p-3 bg-blue-100 rounded-lg">
                                <Package className="text-blue-600" size={24} />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm text-gray-600">Commandes actives</p>
                                <p className="text-2xl font-bold">3</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <div className="flex items-center">
                            <div className="p-3 bg-green-100 rounded-lg">
                                <Heart className="text-green-600" size={24} />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm text-gray-600">Animaux</p>
                                <p className="text-2xl font-bold">2</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <div className="flex items-center">
                            <div className="p-3 bg-purple-100 rounded-lg">
                                <Clock className="text-purple-600" size={24} />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm text-gray-600">Prochaine livraison</p>
                                <p className="text-2xl font-bold">3 jours</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mes Animaux */}
                <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">🐕 Mes Animaux</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { name: 'Rex', type: 'Chien', breed: 'Golden Retriever', age: 4 },
                            { name: 'Mina', type: 'Chat', breed: 'Persan', age: 2 }
                        ].map((pet, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                                        {pet.type === 'Chien' ? '🐕' : '🐈'}
                                    </div>
                                    <div className="ml-3">
                                        <h4 className="font-semibold text-gray-800">{pet.name}</h4>
                                        <p className="text-sm text-gray-600">{pet.breed}, {pet.age} ans</p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Prochain achat</span>
                                        <span className="font-medium">Dans 5 jours</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Préférence</span>
                                        <span className="font-medium text-blue-600">Bio</span>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <button className="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-400 hover:bg-blue-50 transition-colors flex flex-col items-center justify-center">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                                <Plus className="text-gray-400" size={24} />
                            </div>
                            <span className="text-gray-600 font-medium">Ajouter un animal</span>
                        </button>
                    </div>
                </div>

                {/* Produits Recommandés */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-semibold text-gray-800">🎯 Recommandations</h3>
                        <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                            Voir tout <ChevronRight size={16} className="ml-1" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                name: 'Croquettes Premium Chien',
                                brand: 'Royal Canin',
                                price: '45,90€',
                                rating: 4.5,
                                features: ['Sans céréales', 'Riche en protéines', 'Pour chiens actifs']
                            },
                            {
                                name: 'Pâtée Bio Chat',
                                brand: 'BioPet',
                                price: '28,50€',
                                rating: 4.7,
                                features: ['100% Bio', 'Sans conservateurs', 'Saumon']
                            },
                            {
                                name: 'Friandises Dentaires',
                                brand: 'DentalCare',
                                price: '15,90€',
                                rating: 4.3,
                                features: ['Soin dentaire', 'Haleine fraîche', 'Naturel']
                            }
                        ].map((product, index) => (
                            <div key={index} className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h4 className="font-bold text-gray-800 text-lg">{product.name}</h4>
                                        <p className="text-gray-600">{product.brand}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <Star size={16} className="text-yellow-400 fill-current" />
                                        <span className="ml-1 font-medium">{product.rating}</span>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    {product.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center text-sm text-gray-600 mb-1">
                                            <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-2xl font-bold text-gray-800">{product.price}</span>
                                    <button className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                        Commander
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {/* Mobile Navigation */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t">
                <div className="flex justify-around items-center h-16">
                    {['dashboard', 'produits', 'commandes', 'sante'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex flex-col items-center p-2 ${activeTab === tab ? 'text-blue-600' : 'text-gray-600'
                                }`}
                        >
                            {tab === 'dashboard' && <Home size={24} />}
                            {tab === 'produits' && <Package size={24} />}
                            {tab === 'commandes' && <ShoppingCart size={24} />}
                            {tab === 'sante' && <Heart size={24} />}
                            <span className="text-xs mt-1 capitalize">{tab}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;