import { Box } from "@mui/material";
import ComboBox from "./components/ComboBox";
import ComboBoxDisable from "./components/ComboBoxDisable";
import { ApiContext, ApiProvider } from "./components/Context";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  return (
    <>
      <ApiProvider>
        <ApiContext.Consumer>
          {({ programa, setPrograma, lideres, setLider, nombres, setNombre, zona, mesa, puesto }) => (
            <>
              <Header />
              <Box sx={{display: "flex"}} >
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
              </Form>
            </Box>
        </>
          )}
      </ApiContext.Consumer>
    </ApiProvider >
    </>
  );
}

export default App;
