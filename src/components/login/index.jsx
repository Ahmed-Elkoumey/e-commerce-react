import { Form } from "react-bootstrap";
import { useForm, controller } from "react-hook-form";

import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import LoginPic from "../../assets/images/login.jpg";

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  const navigate = useNavigate();

  const onSubmit = (e) => {
    navigate("/");
   
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                {...register("email", {
                  required: true,
                  pattern: /\w+\@\w+\.\w+/,
                })}
              />

              {errors?.email?.type === "required" && (
                <p className="text-danger">Email is required</p>
              )}

              {errors?.email?.type === "pattern" && (
                <p className="text-danger">Email isn't Valied</p>
              )}

              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: true,
                })}
              />

              {errors?.password?.type === "required" && (
                <p className="text-danger">PassWord is required</p>
              )}
            </Form.Group>

            <button className="mt-5 w-25 btn btn-primary">Submit</button>
         
          </Form>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img src={LoginPic} className="w-75" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
