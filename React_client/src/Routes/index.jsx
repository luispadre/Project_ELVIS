import React, { useContext } from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { AppContext } from '../Contexts/App.Context';
import { AuthContext } from '../Contexts/Auth.Context';
import Layout from '../Layout';
import Home from '../Pages/Home';
import NoAuth from '../Pages/NoAuth';
// import { Redirect } from './Redirect';

export default function () {

    const {data} = useContext(AuthContext)
    
    const {data:{type}}=useContext(AppContext)

    return (
        <React.Fragment>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={data.token?<Home/>:<NoAuth/>} />
                        {/* <Route path="/:id"  element={type?<Home />: <Redirect to="/" /> } /> */}
                    </Routes>
                </Layout>
            </BrowserRouter>
        </React.Fragment>
    )
}
