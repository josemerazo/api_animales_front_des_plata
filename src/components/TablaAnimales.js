
import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import ModalAnimales from "./ModalAnimales";

function TablaAnimales() {
    const [data, setData] = useState([]); // data es el estado, setData es la función que se usa para actualizar el estado
    const [showModal, setShowModal] = useState(false);
    const [idAnimal, setIdAnimal] = useState(0);
    const fetchData = () => {
        axios.get('http://127.0.0.1:8000/api/animales').then(response => {
            setData(response.data);
        })
    }
    useEffect(() => {
        fetchData();
    }, []);

    const eliminarAnimal = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/animales/${id}`).then(response => {
            fetchData();
        })
    }

    return (
        <div>
            <Button variant="secondary" onClick={() => { setShowModal(true); setIdAnimal(0) }} >Nuevo</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th></th>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Patas</th>
                        <th>Altura</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return (<tr key={index}>
                            <td><Button onClick={() => { setShowModal(true); setIdAnimal(item.id) }} >Editar</Button>
                                <Button onClick={() => { eliminarAnimal(item.id) }} variant="secondary">Eliminar</Button></td>
                            <td>{item.id}</td>
                            <td>{item.nombre}</td>
                            <td>{item.numero_patas}</td>
                            <td>{item.altura_maxima}</td>
                        </tr>);
                    })}
                </tbody>
            </Table>
            <ModalAnimales show={showModal} handleClose={() => setShowModal(false)} actualizar={fetchData} idAnimal={idAnimal} />
        </div >);
}
export default TablaAnimales;