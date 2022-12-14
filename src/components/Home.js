import React, { useState, useEffect, Fragment } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Table from 'react-bootstrap/Table';
import "../assets/css/home.css"

const Home = (props) => {

    const[cliente,setCliente] = useState(null);
    const[domicilio, setDomicilio] = useState(null);

    useEffect(() => {

        getCliente()
        getDomicilio()

    },[])

    const getCliente = async() => {

        try{

            const response = await axios("http://localhost:8080/Heroku_Prueba/ClienteServlet",{

                method:"GET",
                params:{

                    action: "listar",

                }


            })

            const resJson = await response.data

            console.log("DATOS CLIENTE => ", resJson)



        }catch(error){

            alert("Error. Los datos no fueron encontrados")

        }



    }


    const getDomicilio = async() => {

        try{

            const response = await axios("http://localhost:8080/Heroku_Prueba/DomicilioServlet",{

                method:"GET",
                params:{

                    action: "listar",

                }


            })

            const resJson = await response.data

            console.log("DATOS DOMICILIO => ", resJson)



        }catch(error){

            alert("Error. Los datos no fueron encontrados")

        }



    }

    return(

        <Fragment>

            <br></br>

            <Container className='body'>

                <Alert variant="success">

                <Alert.Heading className="alertTitle">PRUEBA HEROKU WEB 3.0</Alert.Heading>

                <br></br>
                <br></br>

                </Alert>  

            </Container>

        </Fragment>


    )


}

export default Home;
