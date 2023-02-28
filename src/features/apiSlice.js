import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api/' }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => 'products'
        }),
        getProduct: builder.query({
            query: (product) => `products/search?q=${product}`
        }),
        addProduct: builder.mutation({
            query: (newProduct) => ({
                url: 'products',
                method: 'POST',
                body: newProduct,
            }),
        }),
    })
})

export const { useGetAllProductsQuery, useGetProductQuery, useAddProductMutation } = productsApi;
