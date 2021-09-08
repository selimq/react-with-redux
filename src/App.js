import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

function App() {
  const state = useSelector((state) => state);
  const account = useSelector((state) => state.account);

  const dispatch = useDispatch();
  const { depositMoney, drawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  console.log();
  console.log(state);
  console.log(account);
  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={() => depositMoney(100)}> Deposit</button>
      <button onClick={() => drawMoney(50)}> Draw</button>
    </div>
  );
}

export default App;
