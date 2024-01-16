import axios from "axios";
import react, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function ModalAnimales(props) {
    const [animal, setAnimal] = useState({});
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/animales/${props.idAnimal}`).then(response => {
            setAnimal(response.data);
        });
    }, [props.idAnimal]);

    const grabarAnimal = () => {
        axios.put(`http://127.0.0.1:8000/api/animales/${props.idAnimal}`, animal).then(response => {
            props.actualizar();
            props.handleClose();
        });
    }
    const handleChange = (event) => {
        setAnimal({ ...animal, [event.target.name]: event.target.value });
    }
    return (

        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Editar animal</Modal.Title>
            </Modal.Header>
            <Modal.Body>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control placeholder="Ingrese nombre" name="nombre" value={animal.nombre} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Número de Patas</Form.Label>
                    <Form.Control placeholder="Ingrese nombre" name="numero_patas" value={animal.numero_patas} onChange={handleChange} />
                </Form.Group>  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Altura Máxima</Form.Label>
                    <Form.Control placeholder="Ingrese nombre" name="altura_maxima" value={animal.altura_maxima} onChange={handleChange} />
                </Form.Group>


            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={grabarAnimal}>
                    Grabar
                </Button>
            </Modal.Footer>
        </Modal>

    );
}
export default ModalAnimales;