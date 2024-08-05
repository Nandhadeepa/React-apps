import logo from './logo.svg';
import './App.css';
import Demo from './Component/Demo';
import Arrow from './Component/Arrow';
import Sample from './Component/Class Component/Sample';
import Product from './Component/Props Component/Product';
import Employee from './Component/Props Component/Employee';
import Mobile from './Component/Props Component/Mobile';
import Login from './Component/Login/Login';
import DestructDemo from './Component/Props Component/DestructDemo';
import StateInFunc from './Component/Props Component/StateInFunc';
import EBinding from './Component/EventBinding/EBinding';
import DestructDemofun from './Component/Props Component/DestructDemofun';
import BindFunction from './Component/EventBinding/BindFunction';
import Handler from './Component/EventBinding/Handler';
import PParent from './Component/PassingMethodAsProps/PParent';
import SimpleIfElse from './Component/Conditional Rendering/SimpleIfElse';
import LetVariable from './Component/Conditional Rendering/LetVariable';
import Conditionaloperator from './Component/Conditional Rendering/Conditionaloperator';
import ShortCircuitOperator from './Component/Conditional Rendering/ShortCircuitOperator';
import SimpleArray from './Component/Map/SimpleArray';
import TableFormat from './Component/Map/TableFormat';
import SimpleExternalcss from './Component/CSS Styling/SimpleExternalcss';
import InternalCSS from './Component/CSS Styling/InternalCSS';
import Modulecss from './Component/CSS Styling/Modulecss';
import SimpleForm from './Component/FormHandling/SimpleForm';
import AssignValue from './Component/FormHandling/AssignValue';
import WithBootStrap from './Component/FormHandling/WithBootStrap';
import { BootstrapSingleProp } from './Component/FormHandling/BootstrapSingleProp';
import Table from './Component/Fragment/Table';
import PortalDemo from './Component/Portals/PortalDemo';
import Footer from './Component/Portals/Footer';
import SampleLog from './Component/LifeCycleHooks/SampleLog';
import RegularComponent from './Component/Regular Component/RegularComponent';
import Purecompo from './Component/Regular Component/PureCompo';
import Parent from './Component/Memo Component/Parent';
import RefDemo from './Component/Reference Component/RefDemo';
import ErrorHandler from './Component/ErrorHandling/ErrorHandler';
import ProductComponent from './Component/ErrorHandling/ProductComponent';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Service from './Component/Website/Service';
import About from './Component/Website/About';
import Home from './Component/Website/Home';
import Contact from './Component/Website/Contact';

function App() {
  return (
    <div>
      {/* <p><Login/></p> */}
      
      {/* <Demo/>
      <Arrow/>
      <Sample/>
      <Product id="1" name="John">
        Mobile:987654321
      </Product>
      <hr/>
      <Product id="2" name="Sam">
        Mobile:987654321
      </Product>
      <hr/>
     
      <Employee id='3' name='Mike'>
        <Mobile/>
        </Employee>
      <hr/>
      <Employee id='4' name='steve'>
        <Mobile/>
      </Employee> */}
      
      {/* { <DestructDemo id='2' name='Ram' city='BLG'/> } */}
      {/* <StateInFunc/> */}
      {/* <EBinding/> */}
      {/* <DestructDemofun id='2' name='ram' city='blg'/> */}
      {/* <BindFunction/> */}
      {/* <Handler/> */}
      {/* <PParent/> */}
      {/* <SimpleIfElse/> */}
      {/* <LetVariable/> */}
      {/* <Conditionaloperator/> */}
      {/* <ShortCircuitOperator/> */}
      {/* <SimpleArray/> */}
      {/* <TableFormat/> */}
      {/* <SimpleExternalcss/> */}
      {/* <InternalCSS/> */}
      {/* <Modulecss/> */}
      {/* <SimpleForm/>  */}
      {/* <AssignValue/> */}
      {/* <WithBootStrap/> */}
      {/* <BootstrapSingleProp/> */}
      {/* <Table/> */}
      {/* <PortalDemo/> */}
      {/* <Footer/> */}
      {/* <SampleLog/> */}
      {/* <RegularComponent/>
      <Purecompo/> */}
      {/* <Parent/> */}
      {/* <RefDemo/> */}
      {/* <ErrorHandler>
        <ProductComponent name='Samsung' category='Electronics'/>
      </ErrorHandler>
      <ErrorHandler>
      <ProductComponent name='Swift' category='Auto'/>
      </ErrorHandler> */}
      <BrowserRouter>
      <a href="/">Home</a>|
      <a href="/service">Service</a>|
      <a href="/about">About</a>|
      <a href="/conatct">Contact</a>
      <Routes>
        <Route path='' element={<Home/>}></Route>
        <Route path='service' element={<Service/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>
     </div>
  );
}

export default App;
