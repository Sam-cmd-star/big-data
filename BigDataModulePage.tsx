import React from 'react';
import { BarChart3, FileText, LayoutDashboard, Upload, Database, Sparkles } from 'lucide-react';
import { NavLink, Outlet, Route, Routes, Navigate } from 'react-router-dom';
import { DatasetProvider } from './context/DatasetContext';
import { ResumenPage } from './pages/ResumenPage';
import { CargasPage } from './pages/CargasPage';
import { AnalisisPage } from './pages/AnalisisPage';
import { MisDatasets } from './components/MisDatasets';
import { DocumentUploader } from './components/DocumentUploader';
import { ReportePage } from './pages/ReportePage';
import { ThemeProvider } from './src/shared/context/ThemeContext';
import { ThemeToggle } from './src/shared/components/ThemeToggle';

const links = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/cargas', label: 'Subir datasets', icon: Upload },
  { to: '/mis-datasets', label: 'Mis datasets', icon: Database },
  { to: '/analisis', label: 'Análisis y comparación', icon: BarChart3 },
  { to: '/reporte', label: 'Reporte e insight IA', icon: Sparkles },
  { to: '/documentos', label: 'Documentos', icon: FileText },
];

const BigDataShell: React.FC = () => {
  return (
    <div className="h-screen flex overflow-hidden bg-transparent">
      <aside className="w-64 shrink-0 border-r nx-shell flex flex-col">
        <div className="h-16 px-5 flex items-center justify-between border-b" style={{ borderColor: 'var(--nx-border)' }}>
          <div>
            <p className="text-[10px] tracking-[.25em] text-blue-400 font-bold">NEXUS</p>
            <p className="font-display font-bold nx-shell-text">BIG DATA</p>
          </div>
          <ThemeToggle />
        </div>
        <nav className="p-3 space-y-1 flex-1 overflow-y-auto">
          {links.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                    : 'nx-shell-muted hover:bg-slate-200/70 hover:text-slate-900 dark:hover:bg-white/5 dark:hover:text-white'
                }`
              }
            >
              <Icon size={18} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="p-3 border-t" style={{ borderColor: 'var(--nx-border)' }}>
          <button
            onClick={() => {
              // Redirige al Dashboard/Lanzador principal de NEXUS (ajusta el puerto o dominio si es necesario)
              window.location.href = 'http://localhost:5173';
            }}
            className="w-full nx-btn-ghost text-xs"
          >
            ← Volver a NEXUS
          </button>
        </div>
      </aside>
      <main className="flex-1 min-w-0 overflow-y-auto">
        <header
          className="h-16 sticky top-0 z-20 border-b nx-shell backdrop-blur px-7 flex items-center justify-between"
          style={{ borderColor: 'var(--nx-border)' }}
        >
          <div>
            <p className="text-sm font-semibold nx-shell-text">Big Data & Analítica</p>
            <p className="text-xs nx-shell-muted">Datos → visualización → comparación → inteligencia</p>
          </div>
          <span className="text-xs text-emerald-500">● Módulo activo</span>
        </header>
        <div className="p-7">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export const BigDataModulePage: React.FC = () => (
  <ThemeProvider>
    <DatasetProvider>
      <Routes>
        <Route element={<BigDataShell />}>
          <Route index element={<ResumenPage />} />
          <Route path="cargas" element={<CargasPage />} />
          <Route path="mis-datasets" element={<MisDatasets />} />
          <Route path="analisis" element={<AnalisisPage />} />
          <Route path="reporte" element={<ReportePage />} />
          <Route path="documentos" element={<DocumentUploader />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </DatasetProvider>
  </ThemeProvider>
);