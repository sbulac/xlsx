import { Box, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box
      sx={{
        minWidth: "100vw",
        backgroundColor: "#00589F",
        color: "#EEE",
        minHeight: "8vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: 2,
      }}
    >
      <Typography sx={{ fontSize: 20 }} variant="h1">
        Registro de Votante
      </Typography>
      <Typography sx={{ fontSize: 20 }} variant="h2">
        Colombia
      </Typography>
    </Box>
  );
};

export default Header;
