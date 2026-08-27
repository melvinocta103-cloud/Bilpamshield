import { COMPANY } from '@/config';

export function Logo({
  variant = 'dark',
  onClick,
}: {
  variant?: 'dark' | 'light';
  onClick?: () => void;
}) {
  const textColor = variant === 'light' ? 'text-white' : 'text-navy-900';
  const subColor = variant === 'light' ? 'text-navy-100/80' : 'text-navy-700/70';

  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 group"
      aria-label={`${COMPANY.name} home`}
    >
      <img
        src="/asset/IMG_9660.JPG"
        alt="Bilpam Shield Security logo"
        className="w-12 h-12 rounded-lg object-cover bg-white shadow-md ring-1 ring-gold-500/20 transition-transform group-hover:scale-105"
      />
      <div className="text-left leading-tight">
        <div className={`font-display font-bold text-base ${textColor}`}>
          {COMPANY.name}
        </div>
        <div className={`text-[10px] font-medium tracking-wide uppercase ${subColor}`}>
          {COMPANY.location}
        </div>
      </div>
    </button>
  );
}
