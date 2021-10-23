import { HashRouter, Route, Switch } from "react-router-dom";
import Header_01 from './components/Header_01';
import HomePage_01 from './pages/HomePage_01/HomePage_01';
import Shop_01 from './Shop_01';

import './App_01.scss';

//此為自己上網找資料用HashRouter處理路由分頁的問題，但會顯示成/#/Homepage_01 (多一個#)
function App_01() {
  return (
    <HashRouter>
      <Header_01 />
      <Switch>
        <Route exact path="/" component={HomePage_01} />
        <Route path="/shop_01" component={Shop_01} />
      </Switch>
    </HashRouter>
  )
};

export default App_01;

{/* <div>
<Homepage_01 />
</div> */}

