import React, { useContext } from "react";
import { Toggle } from "./Toggle";
import { Context } from "../store";
import { SettingsWrapper } from "../style";

export const Settings = () => {
  const [state, dispatch] = useContext(Context);
  const { darktheme, settings } = state;

  const settingsConfig = [
    {
      id: 1,
      handleChange: {
        type: "SET_DARKTHEME",
        payload: darktheme,
      },
      label: "Dark Mode",
      enabler: darktheme,
      save: true,
    },
  ];

  return (
    <SettingsWrapper show={settings} dark={darktheme}>
      <ul>
        {settingsConfig.map(item => {
          return (<li key={item.id}>
            <Toggle
              handleChange={item.handleChange}
              label={item.label}
              enabler={item.enabler}
              save={item.save}
            />
          </li>)
        })}
      </ul>
    </SettingsWrapper>
  );
};
