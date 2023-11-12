import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Logo from "@components/layout/Logo";

const Login = () => (
  <Stack
    id="login-background"
    gap={3}
    className="vh-100 justify-content-center bg-light"
  >
    <Container style={{ maxWidth: "400px" }} className="p-0">
      <Stack gap={3} className="align-items-center">
        <div className="mb-5">
          <Logo />
        </div>
        <div className="p-2 fw-bold fs-4 text-dark mb-3">Login</div>
        <form className="d-flex flex-column w-100">
          <div className="mb-4">
            <label className="form-label w-100 text-center text-primary fw-bold">
              Correo
            </label>
            <input
              type="email"
              className="form-control border border-dark text-dark border-2"
            />
          </div>
          <div className="mb-3">
            <label className="form-label w-100 text-center text-primary fw-bold">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control border border-dark border-2"
            />
          </div>
          <Button type="submit" className="text-light mt-5">
            Ingresar
          </Button>
        </form>
        <div className="mt-4">
          <span className="text-primary fw-normal">¿Ya tiene cuenta?</span>
          <a className="text-dark fw-bold text-decoration-none" href="#">
            {" "}
            Inicia Sesion
          </a>
        </div>
      </Stack>
    </Container>
  </Stack>
);

export default Login;
