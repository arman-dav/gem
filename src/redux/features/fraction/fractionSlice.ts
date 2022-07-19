import { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Moralis } from "moralis";


import { IFractionType } from './model';


const initialState: IFractionType = {
    fractionList: null,
    fractionRecord: null,
    sortData: [],
    fractionItemPageRoute: null
}

export const fetchFractions = createAsyncThunk(
    'fractions/fetchFractionRecords',
    async (props: any, thunkAPI) => {
        console.log('fetchFractions');
        let state: any = thunkAPI.getState();
        let fractionList: Moralis.Attributes = state.fractionData.fractionList;

        if (!fractionList) {
            console.log('fetching list');
            const moralisEntity = Moralis.Object.extend("Fractionalized");
            let query = new Moralis.Query(moralisEntity);
            fractionList = await query.find();
        }

        return fractionList;
    }
);

export const fetchFractionDetail = createAsyncThunk(
    'fractions/fetchFractionDetailRecord',
    async (fractionalizedTokenId: any, thunkAPI) => {

        let state: any = thunkAPI.getState();
        let fractionList: Moralis.Attributes = state.fractionData.fractionList;
        let fractionRecord: any;

        if (!fractionList) {
            const fractionalizedEntity = Moralis.Object.extend("Fractionalized");
            let query = new Moralis.Query(fractionalizedEntity);
            query.equalTo("tokenId", fractionalizedTokenId);
            fractionList = await query.find();
            fractionRecord = fractionList[0].attributes;
        } else {
            fractionRecord = fractionList.filter((fraction: { attributes: { tokenId: any; }; }) =>
                fraction.attributes.tokenId === fractionalizedTokenId)[0].attributes;
        }

        let tokenId = fractionRecord.tokenId;
        const gemTokenEntity = Moralis.Object.extend("GemToken");
        let query = new Moralis.Query(gemTokenEntity);
        query.equalTo("tokenId", tokenId);
        query.include('data');
        let results = await query.find();

        let newFractionalized = {
            ...fractionRecord,
            gemToken: results[0]
        };

        return newFractionalized;
    }
);

const fractionSlice = createSlice({
    name: 'fraction',
    initialState,
    reducers: {
        setFractionDetailRecord: (state, { payload }: PayloadAction<null | string>) => {
            state.fractionRecord = payload
        },
        setFractionItemPageRoute: (state, { payload }: PayloadAction<null | string>) => {
            state.fractionItemPageRoute = payload
        },
        sortFractionItemsArr: (_, { payload }: PayloadAction<any>) => {
            let sortedData: any = [];

            for (let i = 0, end = payload.length / 5; i < end; ++i) {
                sortedData.push(payload.slice(i * 5, (i + 1) * 5));
            }
            localStorage.setItem('dataLength', JSON.stringify(payload.length))
            localStorage.setItem('fractionListings', JSON.stringify(sortedData))
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFractionDetail.fulfilled, (state, action) => {
            state.fractionRecord = action.payload;
        });

        builder.addCase(fetchFractions.fulfilled, (state, action) => {
            state.fractionList = action.payload;
        });
    }
})

export const {
    setFractionDetailRecord,
    sortFractionItemsArr,
    setFractionItemPageRoute
} = fractionSlice.actions;

export default fractionSlice.reducer;

export const fractionSelector = (state: any) => state;
