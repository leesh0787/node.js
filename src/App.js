import "./App.css";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Profile image="https://images.unsplash.com/photo-1606122017369-d782bbb78f32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8JUVDJTlEJUI4JUVCJUFDJUJDJUVDJTgyJUFDJUVDJUE3JTg0fGVufDB8fDB8fHww"
       name="김일자" title="프론트엔드 개발자"/>
      <Profile image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="김이자" title="백엔드 개발자"/>
      <Profile image="https://images.unsplash.com/photo-1603775020644-eb8decd79994?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="김삼자" title="풀스택 개발자"/>
    </div>
  );
}

export default App;