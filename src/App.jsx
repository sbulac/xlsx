import ComboBox from "./components/ComboBox";
import ComboBoxDisable from "./components/ComboBoxDisable";
import Form from "./components/Form";
import Header from "./components/Header";
import { Alert, Box, Button, Snackbar } from "@mui/material";
import { ApiContext, ApiProvider } from "./components/Context";
function App() {
  return (
    <Box sx={{ height: "100vh" }}>
      <ApiProvider>
        <ApiContext.Consumer>
          {({
            setPrograma,
            lideres,
            setLider,
            nombres,
            setNombre,
            zona,
            mesa,
            puesto,
            setOpen,
            open,
          }) => (
            <>
              <Header />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: 5,
                }}
              >
                <Form>
                  <ComboBox
                    setCategory={setPrograma}
                    label="Programa"
                    arr={["1", "2", "3", "4", "5", "6"]}
                  />
                  <ComboBox
                    setCategory={setLider}
                    label="Lider"
                    arr={lideres}
                  />
                  <ComboBox
                    setCategory={setNombre}
                    label="Nombre"
                    arr={nombres}
                  />
                  <ComboBoxDisable label="Zona" value={zona} />
                  <ComboBoxDisable label="Puesto" value={puesto} />
                  <ComboBoxDisable label="Mesa" value={mesa} />
                  <Button
                    onClick={() => setOpen(true)}
                    type="Submit"
                    variant="contained"
                  >
                    Registrar
                  </Button>
                  <Snackbar open={open}>
                    <Alert
                      onClose={() => setOpen(false)}
                      severity="success"
                      sx={{ width: "100%" }}
                    >
                      Registro Exitoso!
                    </Alert>
                  </Snackbar>
                </Form>
              </Box>
            </>
          )}
        </ApiContext.Consumer>
      </ApiProvider>
    </Box>
  );
}

export default App;
