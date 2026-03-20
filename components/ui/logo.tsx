interface LogoProps {
  className?: string;
  initials?: string;
  siteName?: string;
}

export function Logo({ className, initials = "SW", siteName }: LogoProps) {
  // Split siteName to highlight the second word in primary color
  // e.g. "SWEverse" → "SWE" + "verse", "Saleh Yassin" → "Saleh" + "Yassin"
  const parts = siteName
    ? siteName.includes(" ")
      ? siteName.split(" ")
      : [siteName.slice(0, Math.ceil(siteName.length / 2)), siteName.slice(Math.ceil(siteName.length / 2))]
    : ["SWE", "verse"];

  return (
    <span
      className={`inline-flex items-center gap-1.5 ${className ?? ""}`}
      aria-label={`${siteName || "Portfolio"} logo`}
    >
      {/* Initials badge */}
      <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary/10 dark:bg-primary/15 ring-1 ring-primary/20 text-xs font-bold font-mono text-primary">
        {initials.slice(0, 2).toUpperCase()}
      </span>

      {/* Wordmark */}
      <span className="text-[15px] font-bold tracking-tight text-neutral-900 dark:text-white">
        {parts[0]}
        {parts.length > 1 && (
          <span className="text-primary">{parts.slice(1).join(" ")}</span>
        )}
      </span>
    </span>
  );
}
