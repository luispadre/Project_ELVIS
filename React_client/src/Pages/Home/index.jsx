import React, { useContext } from 'react'
import { AppContext } from "../../Contexts/App.Context"
import { useNavigate } from 'react-router-dom'

export default function () {
    const Context = useContext(AppContext)
    return (
        <React.Fragment>
            {Context.data?.type ? <>???</> : <NoData />}
        </React.Fragment>
    )
}
const NoData = () => {
    const navigate = useNavigate();

    const navigateTo = (type) => {
        const c = "1212cas5"
        updateData(type)//DU=DataUser
        navigate(`/${c}`)
    }
    return (
        <React.Fragment>
            x
        </React.Fragment>)
}
