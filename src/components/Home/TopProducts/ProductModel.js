import { useState } from "react";
import { Card, ListGroup, Modal } from "react-bootstrap";
import Rating from "react-rating";
import useLocalStorage, { addToDb } from "../../Hooks/useLocalStorage";

const ProductModel = ({ show, setShow, onHide, product }) => {
    const [itemCount, setItemCount] = useState(1);

    const handleOnChange = (e) => {
        setItemCount(e.target.value)
    };
    const handleIncrease = () => {
        const newCount = parseInt(itemCount) + 1;
        setItemCount(newCount)
    }
    const handleDecrease = () => {
        let newCount = parseInt(itemCount);
        if (itemCount > 1) {
            newCount -= 1;
        }
        setItemCount(newCount)
    }
    const handleOnclick = () => {
        const id = product?._id;
        const value = itemCount;
        addToDb(id, value);
        setShow(false)
    };
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    current Product
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-lg-4 shadow-sm">
                        <div className="modal-image">
                            <img src={product?.img} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <Card style={{ minWidth: '18rem' }}>
                            <Card.Header>{product?.title}</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    Material:  {product?.material}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Price:  ${product?.price}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Rating:  <Rating
                                        readonly
                                        initialRating={product?.rating}
                                        emptySymbol="fa fa-star-o product-rating"
                                        fullSymbol="fa fa-star product-rating "
                                    />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Description:  {product?.info}
                                </ListGroup.Item>
                                {
                                    product?.safety &&
                                    <ListGroup.Item>
                                        Safety:  {product?.safety}
                                    </ListGroup.Item>
                                }
                                <ListGroup.Item>
                                    Stock:
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="d-flex justify-content-between">
                                        <div className='count-btn'>
                                            <div onClick={handleDecrease} className='count-down'>
                                                <i className="fa-solid fa-circle-minus"></i>
                                            </div>
                                            <input onChange={handleOnChange} type="number" min={1} value={itemCount} id="" />
                                            <div onClick={handleIncrease} className='count-up'>
                                                <i className="fa-solid fa-circle-plus"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <button onClick={handleOnclick} className="btn-regular">Add to Cart</button>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>
                </div>
            </Modal.Body>
        </Modal >
    );
};
export default ProductModel;