import React from "react";
import First from "./components/basics/First"; //Exporting JS elements, if First was called "Dagoberto", would still work (only if the <First> tag is renamed)
import WithParams from "./components/basics/WithParams";
import Fragment from "./components/basics/Fragment";
import Random from "./components/basics/Random";
import Card from "./components/Layout/Card";
import "./components/App.css";
import MemberFamily from "./components/basics/MemberFamily";
import Family from "./components/basics/Family";
import StudentList from "./components/Repetition/StudentList";
import TableProducts from "./components/Repetition/TableProducts";
import OddsOrEvens from "./components/conditional/OddsOrEvens";
import UserInfo from "./components/conditional/UserInfo";
import DirectParent from "./components/communication/DirectParent";
import IndirectParent from "./components/communication/IndirectParent";
import Input from "./components/form/Input";
import Counter from "./components/counter/Counter";
import Mega from "./components/Mega/Mega";

export default () => (
  // _, (), props, (props) | This function only takes ONE parameter, so we can use UNDERLINE (_) to say that to the code
  // Or you can use "<React.Fragment><React.Fragment/>""
  <div className="App">
    <h1>React Fundamentals</h1>
    <div className="cards">
      <Card title="#13 - Mega" color="#B9006e">
        <Mega qtd={8}></Mega>
      </Card>

      <Card title="#12 - Counter" color="#424242">
        <Counter initialNumber={10}></Counter>
      </Card>

      <Card title="#11 - Controlled Component (Input)" color="#E45F56">
        <Input></Input>
      </Card>

      <Card title="#10 - Indirect Communication" color="#8bad39">
        <IndirectParent></IndirectParent>
      </Card>

      <Card title="#09 - Direct Communication" color="#59323C">
        <DirectParent></DirectParent>
      </Card>

      <Card title="#08 - Conditional Rendering - Odds or Evens" color="#982395">
        <OddsOrEvens number={21}></OddsOrEvens>
        <UserInfo user={{ name: "Fernando" }}></UserInfo>
        <UserInfo user={{ null: "null" }}></UserInfo>
      </Card>

      <Card title="#07 - Repetition - Products" color="#3A9AD9">
        <TableProducts></TableProducts>
      </Card>

      <Card title="#06 - Repetition - Students" color="#FF4C65">
        <h2>Student List</h2>
        <StudentList></StudentList>
      </Card>

      <Card title="#05 - Components With Children" color="#00C8F8">
        <Family lastName="Parker" />
        <MemberFamily name="Peter" />
        <MemberFamily name="Edward" />
        <MemberFamily name="Barry" />
        <Family />
      </Card>

      <Card title="#04 - Random Number Challenge" color="#588C73">
        <Random minimalValue={0} maxValue={60} />
      </Card>

      <Card title="#03 - Fragment" color="#E8B71A">
        <Fragment />
      </Card>

      <Card title="#02 - With Params" color="#E94C6F">
        {/*Here ⤵ I'm generating two props with their respective values, and in WithParams.jsx calling it for interpolation*/}
        <WithParams
          title="Student's Situation"
          studentName="Peter"
          studentScore={9.3}
        />
      </Card>

      <Card title="#01 - First Component" color="#FA6900">
        <First></First>
      </Card>
    </div>
  </div>
);
