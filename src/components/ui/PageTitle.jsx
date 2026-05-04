export function PageTitle({ className, title }) {
  return (
    <div className="page-title">
      <p className="hash">/</p>
      <h1 className={className}>{title}</h1>
    </div>
  );
}
