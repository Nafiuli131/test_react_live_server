import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import EventBind from "./components/EventBind";
import Prac from "./components/Prac";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import KeyIndex from "./components/KeyIndex";
import StyleSheet from "./components/StyleSheet";
import Form from "./components/Form";
import Fragment from "./components/Fragment";
import RefsDemo from "./components/RefsDemo";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/userContext";
import Router from "./components/Router";
import Router1 from "./components/Router";
import UseHook from "./components/UseHook";
import UseHook2 from "./components/UseHook2";
import { useStore, useSelector, useDispatch } from "react-redux";
import { increment, incrementByAmount } from "./Redux/slice";
import AvatarEditor from "react-avatar-editor";
import Highlight from "./components/Highlight";
function App() {
  const { value } = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1 style={{ color: "tomato" }}>See my portfolio here</h1>
      {/* <h1>The count is {value}</h1>
      <button onClick={() => dispatch(incrementByAmount(11))}>Increment</button> */}
      {/* <UseHook/>
      <UseHook2/> */}
      {/* <Router></Router> */}
      {/* <UserProvider value='Nayeem'>
      <ComponentC></ComponentC> 
      </UserProvider>   */}
      {/* consume the context value from F components */}
      {/* <PostForm></PostForm> */}
      <PostList></PostList>
      {/* <RefsDemo></RefsDemo> */}
      {/* <Fragment></Fragment> */}
      {/* <Form></Form> */}
      {/* <StyleSheet primary={true}></StyleSheet> */}
      {/* <KeyIndex></KeyIndex> */}
      {/* <UserGreeting></UserGreeting>
      <NameList></NameList> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <Prac name="Nafiul"></Prac> */}
      {/* <EventBind></EventBind> */}
      {/* <FunctionClick></FunctionClick> */}
      {/* <Hello></Hello>
     <Counter></Counter> */}
      {/* <Greet name="nafiul"></Greet>
      
       <Greet name="islam"></Greet>
       <Greet name="nayeem"></Greet> */}
      {/* <Welcome name="yes"></Welcome> */}
      {/* <Highlight></Highlight> */}
      {/* <AvatarEditor
        // ref={this.setEditorRef}
        image="http://example.com/initialimage.jpg"
        width={250}
        height={250}
        border={50}
        scale={1.2}
      /> */}
    </div>
  );
}

export default App;
