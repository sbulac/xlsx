import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import React, { useContext } from "react";

const ComboBoxDisable = ({ label, value }) => {
  return (
    <Autocomplete
      disablePortal
      disabled
      defaultValue={""}
      value={`${value ? value[0] : ""}`}
      id="combo-box-demo"
      options={arr}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};
const arr = []

export default ComboBoxDisable;
