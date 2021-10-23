import {Route, Switch} from "react-router-dom";
import Header_01 from "./components/Header_01";
import HomePage2_01 from './pages/HomePage2_01/HomePage2_01';
import Shop_01 from './Shop_01';
import ShowTwoPage2_01 from './pages/ShowTwoPage2_01/ShowTwoPage2_01';
import ContactPage2_01 from './pages/ContactPage2_01/ContactPage2_01';
import SignInPage2_01 from './pages/SignInPage2_01/SignInPage2_01';

import './App2_01.scss';

function App2_01() {
  return (
    <div>
      <Header_01 />
      <Switch>
        <Route exact path = '/react-1101-crown-209410801' component = {HomePage2_01} />
        <Route exact path = '/' component = {HomePage2_01} />
        <Route exact path = '/react-1101-crown-209410801/shop_01' component = {Shop_01} />
        <Route exact path = '/shop_01' component = {Shop_01} />
        <Route exact path = '/showtwo_01' component = {ShowTwoPage2_01} />
        <Route exact path = '/contact_01' component = {ContactPage2_01} />
        <Route exact path = '/signin_01' component = {SignInPage2_01} />
      </Switch>
    </div>
  )
};

export default App2_01;