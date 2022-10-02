import React, { useState } from "react";
import { ItemType } from "../../App";
import styles from "./MySelect.module.css";
import tickSvg from "../../images/tick_svg.svg";

type PropsType = {
  mySelValue: string;
  setMySelValue: (newSelVal: string) => void;
  selectOptions: ItemType[];
};

export const MySelect: React.FC<PropsType> = (props) => {
  const { mySelValue, setMySelValue, selectOptions } = props;
  const [selectMode, setSelectMode] = useState(false);
  const onSetSelectModeChange = () => {
    setSelectMode((prevState) => !prevState);
  };
  const onSetMySelValue = (newValue: string) => {
    setMySelValue(newValue);
    setSelectMode(false);
  };

  const selectModeClassName = selectMode
    ? styles.my__select__options_displayed
    : styles.my__select__options_invisible;
  const mappedOptionsForMySelect = (
    <div
      className={selectModeClassName}
      onMouseLeave={() => onSetMySelValue(mySelValue)}
    >
      {selectOptions.map((o, idx) => {
        return (
          <div
            className={
              styles.my__select__item +
              "" +
              (o.title === mySelValue ? styles.selected : "")
            }
            onClick={() => onSetMySelValue(o.title)}
            key={idx}
          >
            {o.title}
          </div>
        );
      })}
    </div>
  );
  return (
    <div className={styles.my__select__wrapper}>
      <h4 className={styles.my__select__title}>Select user:</h4>
      <div onClick={onSetSelectModeChange} className={styles.my__select}>
        {mySelValue}
        <img className={styles.tick__svg} src={tickSvg} />
      </div>
      {mappedOptionsForMySelect}
    </div>
  );
};
