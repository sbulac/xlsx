import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import React, { useContext } from "react";
import { ApiContext } from "../Context";

const ComboBox = ({ arr, label, setCategory }) => {
  return (
    <Autocomplete
      disablePortal
      onChange={(e, v) => setCategory(v)}
      id="combo-box-demo"
      options={arr}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};

export default ComboBox;
