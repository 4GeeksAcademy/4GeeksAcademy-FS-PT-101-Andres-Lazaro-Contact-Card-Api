import { useNavigate } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
import contactServices from "../services/contactServices"

export const ContactCard = props => {

    const { store, dispatch } = useGlobalReducer()
    const navigate = useNavigate();
    const handleDelete = async () => {
        try {
            const resp = await contactServices.deleteContact('Andres', props.cid)
            dispatch({ type: 'get_agenda_by_slug', payload: resp.contacts })

        } catch (error) {

        }
    }

    const handleEdit = () => {
        navigate('/edit/' + props.cid)
    }


    const handleCreate = () => {
        navigate('/new_contact')
    }


    return (



        <div className="card container border border-5 ">


            <div className="d-flex">
                <div className="w-25">
                    <img className="img-fluid"
                        src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                        alt={props.name}
                    />
                </div>
                <div className="w-75 text-start align-content-center">

                    <ul>
                        <h4>Nombre: {props.name}</h4>
                        <p> Telefono: {props.phone}</p>
                        <p>E-mail: {props.email}</p>
                        <p>Address: {props.address}</p>
                    </ul>
                    <ul>
                        <button className="btn btn-danger mx-2" onClick={handleDelete}><span><i className="fa-solid fa-trash"></i></span></button>
                        <button className="btn btn-success mx-2" onClick={handleEdit}><span><i className="fa-solid fa-pen-to-square"></i></span></button>
                    </ul>
                </div>



            </div>
        </div>

    )
}








