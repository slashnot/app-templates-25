import React from "react";
import { NavLink } from "react-router";
import classes from "./Sidebar.module.css"

const navigationItems = [
    { name: 'Home', icon: 'icon-[heroicons--chart-bar] w-5 h-5 mr-3', href: '/', active: true },
    { name: 'About', icon: 'icon-[heroicons--folder] w-5 h-5 mr-3', href: '/about', active: false },
    { name: 'Analytics', icon: 'icon-[heroicons--chart-bar-square] w-5 h-5 mr-3', href: '/analytics', active: false },
    { name: 'Team', icon: 'icon-[heroicons--users] w-5 h-5 mr-3', href: '/team', active: false },
    { name: 'Settings', icon: 'icon-[heroicons--cog-6-tooth] w-5 h-5 mr-3', href: '/settings', active: false },
];
// -------- x --------

const quickActions = [
    { name: 'New Project', icon: 'icon-[heroicons--plus] w-4 h-4 mr-3' },
    { name: 'Import Data', icon: 'icon-[heroicons--arrow-down-tray] w-4 h-4 mr-3' },
    { name: 'Export Report', icon: 'icon-[heroicons--arrow-up-tray] w-4 h-4 mr-3' },
];
// -------- x --------

const Sidebar = () => {
    return (
        <div className={`${classes.sidebar} bg-slate-50 border-r border-slate-200 h-screen w-64 flex flex-col shadow-lg`}>
            {/* Logo Section */}
            <div className="p-6 border-b border-slate-200">
                <div className={`${classes['logo-container']} flex items-center space-x-3`}>
                    <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center shadow-md">
                        <span className="text-white font-bold text-lg">L</span>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-slate-800">LLM Chain</h1>
                        <p className="text-xs text-slate-500">AI Platform</p>
                    </div>
                </div>
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1 p-4">
                <div className="space-y-2">
                    <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                        Navigation
                    </h2>
                    {navigationItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.href}
                            className={({ isActive }) =>
                                `${classes['nav-item']} flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 
                                    ${isActive
                                    ? `${classes.active} bg-indigo-600 text-white font-[500]`
                                    : 'text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                                }`
                            }
                        >
                            <span className={item.icon}></span>
                            {item.name}
                        </NavLink>
                    ))}
                </div>

                {/* Quick Actions */}
                <div className="mt-8">
                    <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                        Quick Actions
                    </h2>
                    <div className="space-y-2">
                        {quickActions.map((action) => (
                            <button
                                key={action.name}
                                className="w-full flex items-center px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors duration-200"
                            >
                                <span className={action.icon}></span>
                                {action.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Status Card */}
                <div className="mt-8 p-4 bg-slate-100 rounded-xl border border-slate-200">
                    <h3 className="text-sm font-semibold text-slate-800 mb-2">System Status</h3>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                            <span className="text-slate-600">AI Models</span>
                            <div className="flex items-center">
                                <div className={`w-2 h-2 bg-emerald-400 rounded-full mr-1 ${classes['status-dot']}`}></div>
                                <span className="text-emerald-600 font-medium">Online</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                            <span className="text-slate-600">API Health</span>
                            <div className="flex items-center">
                                <div className={`w-2 h-2 bg-emerald-400 rounded-full mr-1 ${classes['status-dot']}`}></div>
                                <span className="text-emerald-600 font-medium">Healthy</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* User Profile Section */}
            <div className="p-4 border-t border-slate-200">
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-200 transition-colors duration-200 cursor-pointer">
                    <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">JD</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-900 truncate">John Doe</p>
                        <p className="text-xs text-slate-500 truncate">john@example.com</p>
                    </div>
                    <div className="text-slate-400 hover:text-slate-600">
                        <span className="iconify--heroicons--chevron-down w-4 h-4"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Sidebar }
export default Sidebar