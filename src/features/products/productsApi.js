import { rootApi } from "../api/api";

const productsApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => {
        return {
          url: "/products",
          method: "GET",
        };
      },
      providesTags: (result) =>
        result.success
          ? [
              ...result.products.map(({ _id }) => ({
                type: "Products",
                id: _id,
              })),
              { type: "Products", id: "LIST" },
            ]
          : [{ type: "Products", id: "LIST" }],
    }),
    addProduct: builder.mutation({
      query: (body) => {
        return {
          url: "/products",
          method: "POST",
          body,
        };
      },
      invalidatesTags: [{ type: "Products", id: "LIST" }],
    }),
  }),
  overrideExisting: false,
});

export const { useGetProductsQuery, useAddProductMutation } = productsApi;
