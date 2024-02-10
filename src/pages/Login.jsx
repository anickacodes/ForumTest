

const API = import.meta.env.VITE_BASE_URL;
const Login = () => {
  fetch(`${API}`)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  return (
    <div className="login_container">
      <h2> Log In</h2>
    </div>
  );
};

export default Login;
