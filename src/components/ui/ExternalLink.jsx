export function ExternalLink({ children, href, className, ariaLabel }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer" aria-label={ariaLabel}>
      {children}
    </a>
  );
}
