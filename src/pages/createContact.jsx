import { useState } from "react";
import { useNavigate } from "react-router-dom";
import contactServices from "../services/contactServices";

export const CreateContact = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        email: ''
    });

    const handleChange = e => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        });
    };

    const handleCancel = () => {
        navigate('/');
    };

    const handleReset = e => {
        e.preventDefault();
        setFormData({
            name: '',
            phone: '',
            address: '',
            email: ''
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        contactServices.createContact('Andres', formData);
        navigate('/');
    };

    return (
        <div className="container">
            <h2 className="text-center">NEW Contact</h2>
            <form onSubmit={handleSubmit}className="bg-secondary bg-opacity-25 rounded align-items-center m-5 p-5 " >
                <div className="row">
                    {/* Name Input */}
                    <div className="form-group col-md-6 p-3">
                        <label htmlFor="inputName" className="form-label">Name</label>
                        <input
                            className="form-control"
                            onChange={handleChange}
                            value={formData.name}
                            placeholder="name"
                            name="name"
                            type="text"
                            id="inputName"/>

                    </div>

                    {/* Phone Input */}
                    <div className="form-group col-md-6 p-3">
                        <label htmlFor="inputPhone" className="form-label">Phone</label>
                        <input
                            className="form-control"
                            onChange={handleChange}
                            value={formData.phone}
                            placeholder="phone number"
                            name="phone"
                            type="number"
                            id="inputPhone"/>
                    </div>
                </div>
                <div className="row">
                    {/* Email Input */}
                    <div className="form-group col-md-6 p-3">
                        <label htmlFor="inputEmail" className="form-label">Email</label>
                        <input
                            className="form-control"
                            id="inputEmail"
                            aria-describedby="emailHelp"
                            onChange={handleChange}
                            value={formData.email}
                            placeholder="name@example.com"
                            name="email"
                            type="email"/>

                    </div>

                    {/* Address Input */}
                    <div className="form-group col-md-6 p-3">
                        <label htmlFor="inputAddress" className="form-label">Address</label>
                        <input
                            className="form-control"
                            onChange={handleChange}
                            value={formData.address}
                            placeholder="address"
                            name="address"
                            type="text"
                            id="inputAddress"/>
                    </div>
                </div>
                <div className="d-flex justify-content-center mx-2 mt-4">
                    <button className="btn btn-success mx-2" type="submit">Submit</button>
                    <button className="btn btn-warning mx-2" type="reset" onClick={handleReset}>Reset</button>
                    <button className="btn btn-danger mx-2" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
};