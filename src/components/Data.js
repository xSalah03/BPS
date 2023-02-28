import { useGetAllProductsQuery, useGetProductQuery } from "../features/apiSlice";
import Table from 'react-bootstrap/Table';

const Card = ({ data }) => {
    return (
        <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.title}</td>
            <td><img width='300' height='200' src={data.img} /></td>
            <td>{data.price}</td>
        </tr>
    );
};

const Data = () => {
    const {
        data,
        error,
        isError,
        isSuccess,
        isLoading,
    } = useGetAllProductsQuery();

    let content;

    if (isLoading) {
        content = (
            <h1>Loading...</h1>
        );
    }
    else if (isSuccess) {
        content = (
            <Table striped bordered variant="dark" className="mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {data.data?.map((res) => {
                        return <Card data={res} key={res.id} />;
                    })}
                </tbody>
            </Table>
        );
    }
    else if (isError) {
        content = <div className="alert alert-danger">{error}</div>
    }

    return <div>{content}</div>
}

export default Data;
