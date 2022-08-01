import * as S from "./styles";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const SwitchButton = (props) => {
  const { themeToggler } = props;

  const defaultTheme = useSelector((state) => state.allData.defaultTheme);

  const themeValue = () => (defaultTheme === "light" ? false : true);

  const [checkbox, setCheckbox] = useState(themeValue);

  const switchHandler = () => {
    themeToggler();
    setCheckbox(!checkbox);
  };

  return (
    <S.Label htmlFor={"switch"} label="!value">
      <S.Input
        id={"switch"}
        type="checkbox"
        value={checkbox}
        checked={checkbox}
        onChange={() => switchHandler()}
      />
      <S.Slider />
    </S.Label>
  );
};

export { SwitchButton };
