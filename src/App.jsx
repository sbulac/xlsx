import ComboBox from "./components/ComboBox";
import { ApiContext, ApiProvider } from "./components/Context";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  return (
    <>
      <ApiProvider>
        <ApiContext.Consumer>
          {({ programa, setPrograma, lideres, setLider, nombres, setNombre }) => (
            <>
              <Header />
              <Form>
                <ComboBox
                  setCategory={setPrograma}
                  label="Programa"
                  arr={["1", "2", "3", "4", "5", "6"]}
                />
                <ComboBox setCategory={setLider} label="Lider" arr={lideres} />
                <ComboBox setCategory={setNombre} label="Nombre" arr={nombres} />
              </Form>
            </>
          )}
        </ApiContext.Consumer>
      </ApiProvider>
    </>
  );
}

export default App;
