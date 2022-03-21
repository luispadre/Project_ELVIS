import React, { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../../Contexts/Auth.Context";

export default function () {
    const { updateData } = useContext(AuthContext)

    const Login = (e) => {
        e.preventDefault();
        updateData({
            token: "c38bb0c4-b7c6-493a-8228-0aa225f2e82a",
            rol: "admin",
            name: "luis"
        })
    }

    return (
        <React.Fragment>
            <Container className="loginContainer">
                <h1>Login</h1>
                <Form className="col-md-5">
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label className="form-label">Correo</label>
                        <input type="email" placeholder="Ingresa tu usuario o correo electronico" aria-describedby="Email" />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label className="form-label">Contraseña</label>
                        <input type="password" placeholder="Ingresa tu contraseña" />
                    </div>
                    <button type="submit" onClick={Login} className="btn btn-primary">Entrar</button>
                </Form>
                <a>Necesitas una cuenta? Registrarse aquí.</a>
            </Container>
        </React.Fragment>
    );
}

const Container = styled.div`
// height:100vh;
// display:flex;
// justify-content:center;
// align-items:center;
`
const Form = styled.form`
padding:1rem;
// border-radius:.7rem;
// background-color:red;
margin:3rem;

`