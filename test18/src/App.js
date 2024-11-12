import ChangeColor from "./components1/color/ChangeColor";
import Color from "./components1/color/Color";
import Count from "./components1/counter/Count";
import Todos from "./components2/todos/Todos";
import ChangeColorProvider from "./context1/ChangeColorContext";
import ColorProvider from "./context1/ColorContext";
import CountProvider from "./context1/CountContext";
import TodosProvider from "./context2/TodosContext";

//context : 별도의 공간을 만들어 데이터를 저장해 놓고 어디서든 사용할 수 있도록 한 데이터

function App() {
  return (
    <div>
      <CountProvider>
      <ColorProvider>
        <Color/>
        <Count/>
      </ColorProvider>
      </CountProvider>      
      
      <hr/>
      
      <ChangeColorProvider>
        <ChangeColor/>
      </ChangeColorProvider>

      <hr/>
      <ColorProvider>
      <TodosProvider>
        <Todos/>
      </TodosProvider>
      </ColorProvider>
    </div>
  );
}

export default App;
