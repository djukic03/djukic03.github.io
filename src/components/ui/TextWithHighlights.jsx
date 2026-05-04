import { Highlight } from "./Highlight";

export function TextWithHighlights({ parts }) {
  return (
    <>
      {parts.map((part, index) =>
        part.highlight ? <Highlight key={`${part.text}-${index}`}>{part.text}</Highlight> : part.text,
      )}
    </>
  );
}
