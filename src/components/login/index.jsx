
import { Form } from "react-bootstrap";
import { useForm ,controller} from "react-hook-form";





function Login() {



  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({mode:"onTouched"});
  
  
  const onSubmit = (e) => {
    e.preventDefault();
  
    console.log(e);
  };
  
  
  return (
    <div className="container">
       <Form onSubmit={handleSubmit(onSubmit)} >
       <Form.Group className="w-50" controlId="formBasicEmail">
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

          
            <Form.Group className="w-50" controlId="formBasicPassword">
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
  )
}

export default Login