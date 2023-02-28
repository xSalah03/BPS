import axios from "axios";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useGetAllProductsQuery } from "../features/apiSlice";
import "react-toastify/dist/ReactToastify.css";

const CreateProduct = () => {
    const url = 'http://localhost:4000/api/products';
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const [price, setPrice] = useState('');

    const { refetch } = useGetAllProductsQuery(); // get the refetch function from the hook

    const handleCreate = async (e) => {
        e.preventDefault();

        console.log(title, image, price); // verify that the states are properly set

        try {
            const response = await axios.post(url, {
                'title': title,
                'image': image,
                'price': price,
            });

            if (response.status === 200) {
                console.log(response.data);
                refetch();
                toast.success("Product added successfully", {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
            } else {
                toast.error("Error adding product", {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
            }
        } catch (error) {
            console.log(error);
            toast.error("Error adding product", {
                position: toast.POSITION.BOTTOM_RIGHT
            });
        }
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    return (
        <div>
            <form className="delete-product-container" onSubmit={(e) => handleCreate(e)}>
                <h3>Create product</h3>
                <input type="text" placeholder='title' name="title" id="title" required onChange={(e) => setTitle(e.target.value)} value={title} />
                <input type="file" name="img" id="img" required onChange={handleImageChange} />
                <input type="number" placeholder='price' name="price" id="price" required onChange={(e) => setPrice(e.target.value)} value={price} />
                <button type="submit">Create</button>
                <ToastContainer />
            </form>
        </div>
    );
};

export default CreateProduct;
