import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size = 20) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

/** Solid round checkmark */
export function Tick({ size, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest} fill="currentColor" stroke="none">
      <path d="M12 1.5a10.5 10.5 0 1 0 0 21 10.5 10.5 0 0 0 0-21Zm5 7.2-6.1 6.1a1 1 0 0 1-1.4 0l-2.6-2.6a1 1 0 1 1 1.4-1.4l1.9 1.9 5.4-5.4a1 1 0 1 1 1.4 1.4Z" />
    </svg>
  );
}

export function Star({ size, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest} fill="currentColor" stroke="none">
      <path d="M12 2.6 14.6 8l5.9.7-4.3 4 1.2 5.8L12 15.5l-5.4 3L7.8 12.7l-4.3-4 5.9-.7L12 2.6Z" />
    </svg>
  );
}

export function ShieldCheck({ size, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M12 2.5 4.5 5.5v5.7c0 4.6 3.2 8.3 7.5 10.3 4.3-2 7.5-5.7 7.5-10.3V5.5L12 2.5Z" />
      <path d="m9 11.7 2.1 2.1L15.4 9" />
    </svg>
  );
}

export function Truck({ size, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M2.5 6.5h12v10h-12z" />
      <path d="M14.5 10h4l3 3.5v3h-7z" />
      <circle cx="6.5" cy="17.5" r="1.8" />
      <circle cx="17.5" cy="17.5" r="1.8" />
    </svg>
  );
}

export function Bike({ size, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <circle cx="5.5" cy="17.5" r="3.5" />
      <circle cx="18.5" cy="17.5" r="3.5" />
      <path d="M15 6h-3l-4 7h7.5" />
      <path d="m12 17.5-3.5-7.5" />
      <path d="M16 17.5 18.5 9H15" />
    </svg>
  );
}

export function Phone({ size, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
}

export function Bank({ size, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="m3 9 9-6 9 6" />
      <path d="M5 9.5V17M9.5 9.5V17M14.5 9.5V17M19 9.5V17" />
      <path d="M3 20.5h18" />
    </svg>
  );
}

export function Play({ size, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest} fill="currentColor" stroke="none">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

export function Award({ size, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

export function Users({ size, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function Cash({ size, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="3" />
      <path d="M6 12h.01M18 12h.01" />
    </svg>
  );
}

export function Layers({ size, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

export function Clock({ size, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export function ArrowRight({ size, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function WhatsApp({ size, ...rest }: IconProps) {
  return (
    <svg width={size ?? 20} height={size ?? 20} viewBox="0 0 24 24" fill="currentColor" {...rest}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.11 3.22 5.1 4.51.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
      <path d="M12.05 2a9.9 9.9 0 0 0-8.5 15.02L2 22l5.13-1.5A9.9 9.9 0 1 0 12.05 2Zm0 18.1a8.16 8.16 0 0 1-4.16-1.14l-.3-.18-3.05.9.9-2.97-.2-.31a8.2 8.2 0 1 1 6.81 3.7Z" />
    </svg>
  );
}
