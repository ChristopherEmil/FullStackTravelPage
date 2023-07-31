import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import React,{useState} from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom"

  function Login() {
    const navigate = useNavigate();
 
    const [userdata, setUserdata] = useState({
      username:"",
      password:""
    })
    function InputChange(event){
      const {name, value }= event.target;

      setUserdata((prevdata)=>({
        ...prevdata,
        [name]: value,
      }))
    }
    function onSubmitUser(){
      axios.post("http://localhost:4000/api/login",userdata)
      .then(({data})=>{
        localStorage.setItem('auth', '"yes"'),
        localStorage.setItem('userdata', JSON.stringify(data))
       // console.log(data)
        navigate("/home")
      //  console.log(data)
      })
      .catch(({response})=>{
        console.log(response.data)
      })
    }

    return (
      
    <div className="mt-11 ml-60" >
<Card className="w-96 ">
      <CardHeader
        variant="gradient"
        color="blue"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Inicio 
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input label="Usuario" size="lg" value={userdata.user} onChange={InputChange} name="username"/>
        <Input label="Contraseña" size="lg" value={userdata.password} onChange={InputChange} name="password" type="password"/>
        <div className="-ml-2.5">
          <Checkbox label="Recordar " />
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth onClick={onSubmitUser}>
          Entrar
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
          Don't have an account?
          <Typography
            as="a"
            href="#signup"
            variant="small"
            color="blue"
            className="ml-1 font-bold"
          >
            Registrarte
          </Typography>
        </Typography>
      </CardFooter>
    </Card>
    </div>
    )
  }
  
  export default Login
  