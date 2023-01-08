import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const shipsApi = createApi({
    reducerPath: 'shipsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spacexdata.com/v3/' }),
    endpoints: (builder) => ({
      getAllShips: builder.query({
        query: () => 'ships',
      }),
    }),
  })

  export const {useGetAllShipsQuery}=shipsApi