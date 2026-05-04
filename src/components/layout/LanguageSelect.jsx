import { useLanguage } from "../../context/LanguageContext";

const optionStyle = {
  color: "white",
  backgroundColor: "#282C33",
};

export function LanguageSelect() {
  const { language, setLanguage } = useLanguage();

  return (
    <select
      name="language"
      className="language"
      value={language}
      onChange={(event) => setLanguage(event.target.value)}
      aria-label="Language"
    >
      <option value="en" style={optionStyle}>
        ENG
      </option>
      <option value="sr" style={optionStyle}>
        СРБ
      </option>
    </select>
  );
}
