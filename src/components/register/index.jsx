import { Button, Form } from "react-bootstrap";
import Signup from "../../assets/images/undraw_fill_form_re_cwyf.png";
import Select from 'react-select'

// form Hook
import { useForm ,controller} from "react-hook-form";
import { useState } from "react";

function Rgister() {

  const options = [
    { value: 'Alex', label: 'Alex' },
    { value: 'Cairo', label: 'Cairo' },
    { value: 'Matroh', label: 'Matroh' },
    { value: 'herGada', label: 'herGada' },
    { value: 'Aswans', label: 'Aswans' },
    { value: 'Sainai', label: 'Sainai' },
  ]
  
  




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
      <div className="row ">
        <div className="col-md-7 ">
          <h2 className="fw-bolder text-center fs-1 text-danger">
            E L E G A N T
          </h2>

          <Form onSubmit={handleSubmit(onSubmit)} className="row">
            <Form.Group className="w-50" controlId="formfName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                {...register("fName", { required: true })}
              />

              {errors?.fName?.type === "required" && (
                <p className="text-danger">First name is required</p>
              )}

              <Form.Text className="text-muted">
                This Field Is Required
              </Form.Text>
            </Form.Group>

            <Form.Group className="w-50" controlId="formLName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                {...register("lName", { required: true })}
              />

              {errors?.lName?.type === "required" && (
                <p className="text-danger">First name is required</p>
              )}

              <Form.Text className="text-muted">
                This Field Is Required
              </Form.Text>
            </Form.Group>

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

            <Form.Group className="w-50 mb-3" controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register("confirmPass", {
                  required: true,

                  validate: (value) => value === watch("password"),
                })}
              />
              {errors?.confirmPass?.type === "validate" && (
                <p className="text-danger">PassWord didn't match</p>
              )}
            </Form.Group>

            <Form.Group className="w-50" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
            
            <Form.Label>Select Cities</Form.Label>
            <Select options={options} isMulti className="my-3 "/>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <div className="col-md-4">
          <img src={Signup} className="w-100 m-5" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Rgister;
