import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
    Home,
    Package,
    ShoppingCart,
    Heart,
    Settings,
    LogOut,
    Menu,
    X,
    Bell,
    User
} from 'lucide-react';

const Navigation = ({ userType = 'client' }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    const clientLinks = [
        { to: '/dashboard', icon: Home, label: 'Tableau de bord' },
        { to: '/products', icon: Package, label: 'Produits' },
        { to: '/orders', icon: ShoppingCart, label: 'Commandes' },
        { to: '/health', icon: Heart, label: 'Santé' },
        { to: '/profile', icon: User, label: 'Profil' },
    ];

    const adminLinks = [
        { to: '/admin/dashboard', icon: Home, label: 'Dashboard' },
        { to: '/admin/products', icon: Package, label: 'Produits' },
        { to: '/admin/orders', icon: ShoppingCart, label: 'Commandes' },
        { to: '/admin/customers', icon: User, label: 'Clients' },
        { to: '/admin/analytics', icon: Settings, label: 'Analytics' },
    ];

    const links = userType === 'admin' ? adminLinks : clientLinks;

    return (
        <>
            { }
            <nav className="hidden lg:flex flex-col w-64 bg-white border-r border-gray-200 min-h-screen">
                { }
                <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                            <span className="text-white font-bold text-xl">PF</span>
                        </div>
                        <div>
                            <h1 className="font-bold text-xl text-gray-800">PetFood TN</h1>
                            <p className="text-sm text-gray-600">{userType === 'admin' ? 'Administration' : 'Espace client'}</p>
                        </div>
                    </div>
                </div>

                { }
                <div className="flex-1 p-4">
                    <div className="space-y-2">
                        {links.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={({ isActive }) =>
                                    `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                        ? 'bg-blue-50 text-blue-600 font-medium'
                                        : 'text-gray-700 hover:bg-gray-100'
                                    }`
                                }
                            >
                                <link.icon size={20} />
                                <span>{link.label}</span>
                            </NavLink>
                        ))}
                    </div>
                </div>

                { }
                <div className="p-4 border-t border-gray-200">
                    <button
                        onClick={() => navigate('/settings')}
                        className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 w-full transition-colors"
                    >
                        <Settings size={20} />
                        <span>Paramètres</span>
                    </button>
                    <button
                        onClick={() => navigate('/logout')}
                        className="flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 w-full transition-colors"
                    >
                        <LogOut size={20} />
                        <span>Déconnexion</span>
                    </button>
                </div>
            </nav>

            { }
            <div className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-40">
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center space-x-3">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 rounded-lg hover:bg-gray-100"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold">PF</span>
                            </div>
                            <span className="font-bold">PetFood TN</span>
                        </div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <button className="relative p-2">
                            <Bell size={20} />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>
                        <button className="p-2">
                            <User size={20} />
                        </button>
                    </div>
                </div>

                { }
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg animate-slide-in">
                        <div className="p-4 space-y-2">
                            {links.map((link) => (
                                <NavLink
                                    key={link.to}
                                    to={link.to}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                            ? 'bg-blue-50 text-blue-600 font-medium'
                                            : 'text-gray-700 hover:bg-gray-100'
                                        }`
                                    }
                                >
                                    <link.icon size={20} />
                                    <span>{link.label}</span>
                                </NavLink>
                            ))}

                            <div className="pt-4 mt-4 border-t border-gray-200 space-y-2">
                                <button className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 w-full">
                                    <Settings size={20} />
                                    <span>Paramètres</span>
                                </button>
                                <button className="flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 w-full">
                                    <LogOut size={20} />
                                    <span>Déconnexion</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Navigation;