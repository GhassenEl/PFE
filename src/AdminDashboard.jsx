import React from 'react';
import {
    Users,
    Package,
    DollarSign,
    TrendingUp,
    AlertCircle,
    ShoppingBag,
    BarChart3,
    MapPin,
    Clock
} from 'lucide-react';
import StatCard from '../components/admin/StatCard';
import SalesChart from '../components/admin/SalesChart';
import RecentOrders from '../components/admin/RecentOrders';
import StockAlert from '../components/admin/StockAlert';

const AdminDashboard = () => {
    const stats = [
        {
            title: 'Clients actifs',
            value: '2,458',
            change: '+12%',
            icon: Users,
            color: 'blue'
        },
        {
            title: 'Commandes du jour',
            value: '147',
            change: '+8%',
            icon: Package,
            color: 'green'
        },
        {
            title: 'Chiffre d\'affaires',
            value: '45,8K€',
            change: '+15%',
            icon: DollarSign,
            color: 'purple'
        },
        {
            title: 'Satisfaction',
            value: '4.7/5',
            change: '+0.2',
            icon: TrendingUp,
            color: 'orange'
        }
    ];

    const alerts = [
        { id: 1, type: 'stock', message: 'Stock bas: Croquettes chat sensible', level: 'high' },
        { id: 2, type: 'delivery', message: 'Retard livraison: Zone Tunis Centre', level: 'medium' },
        { id: 3, type: 'payment', message: '3 paiements en attente > 48h', level: 'low' }
    ];

    const topProducts = [
        { name: 'Croquettes Chien Medium', sales: 245, revenue: '12,250€' },
        { name: 'Pâtée Chat Bio', sales: 187, revenue: '8,415€' },
        { name: 'Friandises Dentaires', sales: 312, revenue: '3,744€' },
        { name: 'Litière Aglomérante', sales: 156, revenue: '2,184€' }
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-6">
            { }
            <div className="mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Tableau de bord Admin - PetFood TN
                </h1>
                <p className="text-gray-600 mt-2">
                    Données en temps réel • Mis à jour il y a 5 minutes
                </p>
            </div>

            { }
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                { }
                <div className="lg:col-span-2 space-y-6">
                    { }
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-semibold text-gray-800">
                                Performance des ventes
                            </h2>
                            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                                <option>30 derniers jours</option>
                                <option>7 derniers jours</option>
                                <option>Cette année</option>
                            </select>
                        </div>
                        <SalesChart />
                    </div>

                    { }
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <h2 className="text-lg font-semibold text-gray-800 mb-6">
                            Commandes récentes
                        </h2>
                        <RecentOrders />
                    </div>
                </div>

                { }
                <div className="space-y-6">
                    { }
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold text-gray-800 flex items-center">
                                <AlertCircle className="mr-2" size={20} />
                                Alertes en cours
                            </h3>
                            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                                3 non résolues
                            </span>
                        </div>

                        <div className="space-y-3">
                            {alerts.map(alert => (
                                <StockAlert key={alert.id} alert={alert} />
                            ))}
                        </div>

                        <button className="w-full mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium">
                            Voir toutes les alertes →
                        </button>
                    </div>

                    { }
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <h3 className="font-semibold text-gray-800 mb-4">
                            Produits les plus vendus
                        </h3>
                        <div className="space-y-4">
                            {topProducts.map((product, index) => (
                                <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                                            <ShoppingBag size={20} className="text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800">{product.name}</p>
                                            <p className="text-sm text-gray-600">{product.sales} ventes</p>
                                        </div>
                                    </div>
                                    <span className="font-semibold">{product.revenue}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    { }
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                            <MapPin className="mr-2" size={20} />
                            Distribution géographique
                        </h3>
                        <div className="space-y-3">
                            {[
                                { region: 'Grand Tunis', percentage: 45, color: 'bg-blue-500' },
                                { region: 'Sousse', percentage: 22, color: 'bg-green-500' },
                                { region: 'Sfax', percentage: 18, color: 'bg-purple-500' },
                                { region: 'Autres', percentage: 15, color: 'bg-gray-300' }
                            ].map((item, index) => (
                                <div key={index} className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-700">{item.region}</span>
                                        <span className="font-medium">{item.percentage}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className={`${item.color} h-2 rounded-full`}
                                            style={{ width: `${item.percentage}%` }}
                                        ></div>
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

export default AdminDashboard;