import ComboBox from "./components/ComboBox";
import ComboBoxDisable from "./components/ComboBoxDisable";
import Form from "./components/Form";
import Header from "./components/Header";
import { Box, Button } from "@mui/material";
import { ApiContext, ApiProvider } from "./components/Context";
function App() {

  

  return (
    <Box sx={{ height: "100vh" }}>
      <ApiProvider>
        <ApiContext.Consumer>
          {({ setPrograma, lideres, setLider, nombres, setNombre, zona, mesa, puesto }) => (
            <>
              <Header />
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", mt: 5 }} >
                <Form>
                  <ComboBox
                    setCategory={setPrograma}
                    label="Programa"
                    arr={["1", "2", "3", "4", "5", "6"]}
                  />
                  <ComboBox setCategory={setLider} label="Lider" arr={lideres} />
                  <ComboBox setCategory={setNombre} label="Nombre" arr={nombres} />
                  <ComboBoxDisable label="Zona" value={zona} />
                  <ComboBoxDisable label="Mesa" value={mesa} />
                  <ComboBoxDisable label="Puesto" value={puesto} />
                  <Button type="Submit" variant="contained">Votar</Button>
                </Form>
              </Box>
            </>
          )}
        </ApiContext.Consumer>
      </ApiProvider >
    </Box>
  );
}

export default App;
