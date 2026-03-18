import { useEffect, useState } from "react";

export const useInputForm = (initValue, regexps) => {
  const [value, setValue] = useState(initValue);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    const valid = regexps.every((r) => {
      const rexp = new RegExp(r);
      return rexp.text(value);
    });
    setIsValid(valid);
  }, [value]);
  return {
    value,
    onChange: (e) => setValue(e.target.value),
  };
};
