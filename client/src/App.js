import logo from './logo.svg';
import './App.css';
import ImportComponent from './R003_ImportComponent'
import LifecycleEx from './R004_LifecycleEx'
import LifecycleEx1 from './R005_LifecycleEx'
import LifecycleEx2 from './R006_LifecycleEx'
import LifecycleEx3 from './R007_LifecycleEx'
import LifecycleEx4 from './R008_LifecycleEx'
import Es6 from './R009_Es6'
import Variable from './R010_Variable';
import SpreadOperator from './R011_SpreadOperator'
import ClassPrototype from './R012_Class&Prototype'
import ArrowFunc from './R013_ArrowFunction'
import ForEach from './R014_ForEach'
import Map from './R015_Map'
import Jquery from './R016_Jquery'
import Props from './R017_Props'
import PropsDatatype from './R018_PropsDatatype'
import PropsBoolean from './R019_PropsBoolean'
import PropsObjVal from './R020_PropsObjVal'
import PropsRequired from './R021_PropsRequired'
import PropsDefault from './R022_PropsDefault'
import PropsNode from './R023_PropsNode'
import ReactState from './R024_ReactState'
import SetState from './R025_SetState'
import ForceUpdate from './R026_ForceUpdate'
import ComponentClass from './R027_ComponentClass'
import PureComponentClass from './R028_PureComponentClass'
import ShallowEqual from './R029_ShallowEqual'
import FunctionComponent from './R030_FunctionComponent'
import ReactHook from './R031_ReactHook'
import Fragments from './R032_Fragments'

function App() {
  // DB 에서 데이터 읽어오기
  // let bno = 35;
  // let title = "글제목입니다.";
  // let obj1 = {
  //   String:{title},
  //       Number:{bno},
  //       Boolean:1==1,
  //       Array:[0,1,8],
  //       o1:{react:"리액트", twohundred:"200"},
  //       f1:console.log("FunctionProps: function!"),
  //       BooleanTrueFalse:true
  // };
  return (
    <div className="App">
      <h1>Hello React</h1>
      {/* <ImportComponent></ImportComponent>
      <LifecycleEx></LifecycleEx>
      <LifecycleEx1></LifecycleEx1> */}
      {/* <LifecycleEx2
        prop_value = 'FromApp.js'
      /> */}
      {/* <LifecycleEx3
        prop_value = 'FromApp.js'
      /> */}
      {/* <LifecycleEx4
        prop_value = 'FromApp.js'
      /> */}
      
      <p>CSS 적용하기</p>
      {/* <Es6/> */}
      {/* <Variable/> */}
      {/* <SpreadOperator/> */}
      {/* <ClassPrototype/> */}
      {/* <ArrowFunc/> */}
      {/* <ForEach/> */}
      {/* <Map/> */}
      {/* <Jquery/> */}
      {/* <Props props_val = "THIS IS PROPS"/> */}
      {/* <PropsDatatype
        String="react"
        Number={200}
        Boolean={1==1}
        Array={[0,1,8]}
        o1={{react:"리액트", twohundred:"200"}}
        f1={console.log(("FunctionProps: function!"))}
        BooleanTrueFalse={1 != 1}
      />
      <PropsDatatype
        String={title}
        Number={bno}
        Boolean={1==1}
        Array={[0,1,8]}
        o1={{react:"리액트", twohundred:"200"}}
        f1={console.log(("FunctionProps: function!"))}
        BooleanTrueFalse={true}
      /> */}
      {/* <PropsDatatype
        Object Json={obj1}
      /> */}
      {/* <PropsObjVal ObjectJson= {{react:"리액트",twohundred:"200"}}/> */}
      {/* <PropsRequired ReactNumber={200} /> */}
      {/* <PropsDefault ReactNumber={200}/> */}
      {/* <PropsNode>
        <span>node from App.js</span>
      </PropsNode> */}

      {/* <ReactState reactString={"react"}/> */}
      {/* <SetState/> */}
      {/* <ForceUpdate/> */}
      {/* <ComponentClass/> */}
      {/* <PureComponentClass/> */}
      {/* <ShallowEqual/> */}
      {/* <FunctionComponent contents="[THIS IS FunctionComponent]"/> */}
      {/* <ReactHook/> */}
      <Fragments/>

    </div>
  );
}

export default App;