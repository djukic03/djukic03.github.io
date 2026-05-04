export function SectionTitle({ as: TitleElement = "a", className, label, line = true }) {
  return (
    <div className="row section-title">
      <p className="hash">#</p>
      <TitleElement className={className}>{label}</TitleElement>
      {line && <div className="pink-line" />}
    </div>
  );
}
