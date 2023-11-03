import React from 'react'
import { useLocation } from "react-router-dom";
const UpdateMember = () => {

    const location = useLocation();
    console.log(location.state.object)
    const updateMember = () => {
        
    }
    return (
        <div>UpdateMember</div>
    )
}

export default UpdateMember