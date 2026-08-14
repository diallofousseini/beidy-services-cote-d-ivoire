import React, { StrictMode, Component, ErrorInfo, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0F172A] text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-md bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl space-y-4">
            <div className="w-16 h-16 bg-[#2563EB]/20 text-[#2563EB] rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
              !
            </div>
            <h1 className="text-2xl font-bold font-serif-heading">Mise à jour du site effectuée</h1>
            <p className="text-sm text-gray-300 leading-relaxed">
              Une nouvelle version de BEIDY SERVICES a été déployée. Cliquez ci-dessous pour rafraîchir la page et afficher le site.
            </p>
            <button
              onClick={() => {
                window.location.reload();
              }}
              className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all"
            >
              Recharger la page maintenant
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
