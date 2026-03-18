const SelectLang = ({ langs, onChangeLang, selectedLang }) => {
  const optionsLang = langs.map((l, pos) => (
    <option key={pos} value={l}>
      {l.toUpperCase()}
    </option>
  ));
  return (
    <select value={selectedLang} onChange={(e) => onChangeLang(e.target.value)}>
      {optionsLang}
    </select>
  );
};

export default SelectLang;
