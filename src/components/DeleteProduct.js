import { useState } from 'react';
import axios from 'axios';
import './style.css';
import { toast, ToastContainer } from 'react-toastify';

const DeleteProduct = () => {
    const url = 'http://localhost:4000/api/products';
    const [productId, setProductId] = useState('');

    const notifyError = () => {
        toast.error("id didn't exist", {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    };

    const notifySuccess = () => {
        toast.success("Product deleted successfully", {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    };

    const handleDelete = () => {
        axios.get(`${url}/${productId}`)
            .then(res => {
                const toto = res.data.data;
                const final = toto[0].id;
                if (final == productId) {
                    axios.delete(`${url}/${productId}`)
                        .then(res => {
                            console.log(res.data);
                            setProductId('');
                            notifySuccess();
                        })
                        .catch(err => {
                            notifyError();
                            console.log(err);
                        });
                } else {
                    notifyError();
                }
            })
            .catch(err => {
                notifyError();
                console.log(err);
            });
    };


    return (
        <div className="delete-product-container">
            <h3>Delete product</h3>
            <input placeholder='id' type="number" name="productId" id="productId" required onChange={(e) => setProductId(e.target.value)} value={productId} />
            <button type="button" onClick={() => handleDelete()}>Delete</button>
            <ToastContainer />
        </div>
    );
};

export default DeleteProduct;
