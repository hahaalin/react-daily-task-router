import './App.css';
import {
  HashRouter,
  NavLink,Route, Routes,useNavigate, Outlet, useParams
} from 'react-router-dom';

const Todo = () => {
  return <>
    <p>這是 Todo 頁面 
  </p><Logout />
  </>
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};

const Logout = ()=>{
  const navigate = useNavigate();

  return <button type="button" onClick={ ()=>{ navigate('/login')} }>登出</button>
}

const Post = () => {
  return <div>
    <h3>Post頁面</h3>
    <Outlet />
  </div>
}

const PostId=()=>{
  let params = useParams();
  return <p>postId: {params.postId}</p>;
}

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/post">
            <p>Post 頁面</p>
          </NavLink>
          <NavLink to="/post/post123">
            <p>Post 詳細頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
        <Route path="/" element={<p>這是首頁</p>} />
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/todo" element={<Todo/>}></Route>
          <Route path="/post" element={<Post/>}>
            <Route path=":postId" element={<PostId />} />
            </Route>
          <Route
  path="*"
  element={
    <main style={{ padding: "1rem" }}>
      <p>There's nothing here!</p>
    </main>
  }
/>
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
