import { Home, Search } from 'lucide-react';

export function NotFoundPage({ navigate }: { navigate: (to: string) => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold-500/5 blur-3xl"
        aria-hidden
      />
      <div className="container-pro relative text-center py-20">
        <div className="text-8xl md:text-9xl font-bold text-gold-400/20 font-display mb-4">404</div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-navy-100/70 max-w-md mx-auto mb-8 leading-relaxed">
          The page you are looking for does not exist or has been moved. Let us help you find what
          you need.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={() => navigate('/')} className="btn-primary">
            <Home className="w-5 h-5" />
            Back to Home
          </button>
          <button
            onClick={() => navigate('/services')}
            className="btn-ghost-light"
          >
            <Search className="w-5 h-5" />
            Browse Services
          </button>
        </div>
      </div>
    </div>
  );
}
