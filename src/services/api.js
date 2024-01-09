import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = "http://localhost:8080";
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: "include" }), // Adjust the base URL accordingly
  endpoints: (builder) => ({
    // fetching the user profile form the database 
    getProfile: builder.query({
      query: () => "auth/profile",
    }),

    // add products to the database,it is only for amdin user 
    addProducts: builder.mutation({
      query: (formData) => ({
        url: "admin/user/addProduct",
        method: "POST",
        body: formData,
        headers: { "Content-Type": "application/json" },
      }),
    }),

    // add products to the user cart,it is general endpoint for all the user and admin user
    addProductsInCart: builder.mutation({
        query: (formData) => ({
            url:'api/data/userProduct',
            method: 'POST',
            body: formData,
            headers: { 'Content-Type': 'application/json' }
        }),
        
      }),
      //add user feedback to the database,it is general endpoint for all the user and admin user
    addFeedBack: builder.mutation({
      query: (formData) => ({
        url:'/api/user/userFeedback',
        method:'POST',
        body:formData,
        headers: { 'Content-Type': 'application/json' }
      })
    }),
    // get all the products in the user cart,it is general endpoint for all the user and admin user
    getUserCartProducts:builder.query({
        query:()=>'api/data/userProduct'
    }),
    
    getAllProducts:builder.query({
        query:()=>'api/data/allProducts'
    }),

    getBestSellingProducts:builder.query({
        query:()=>'api/data/bestSellingProducts'
    }),

    getNewProducts:builder.query({
        query:()=>'api/data/newProducts'
    })
  }),
});

export const { useGetProfileQuery,
     useAddProductsMutation,
     useAddProductsInCartMutation,
     useGetUserCartProductsQuery,
     useGetAllProductsQuery,
     useGetNewProductsQuery,
     useGetBestSellingProductsQuery,
     useAddFeedBackMutation

     } = baseApi;
