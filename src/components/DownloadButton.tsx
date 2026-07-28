import { DOWNLOAD_APP_URL } from '@/lib/constants';

type DownloadButtonProps = {
  label?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
};

const sizeClasses = {
  sm: 'px-6 py-3 text-sm',
  md: 'px-8 py-4 text-base md:text-lg',
  lg: 'px-10 py-5 text-lg md:text-xl',
};

const iconSizeClasses = {
  sm: 'p-1.5',
  md: 'p-2',
  lg: 'p-2.5',
};

const svgSizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
};

export default function DownloadButton({
  label = 'DOWNLOAD NOW',
  className = '',
  size = 'md',
}: DownloadButtonProps) {
  return (
    <a
      href={DOWNLOAD_APP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download 3 Patti World APK for Android"
      className={`download-btn inline-flex items-center justify-center gap-3 rounded-full border-2 border-[#0ea5e9] bg-[#06091F] text-white font-semibold hover:bg-[#0ea5e9]/10 transition-all group ${sizeClasses[size]} ${className}`}
    >
      <span>{label}</span>
      <span
        className={`download-icon flex-shrink-0 rounded-full bg-[#f97316] group-hover:scale-110 transition-transform ${iconSizeClasses[size]}`}
      >
        <svg
          className={svgSizeClasses[size]}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
      </span>
    </a>
  );
}
