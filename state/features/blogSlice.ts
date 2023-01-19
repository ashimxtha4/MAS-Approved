import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { blogQueryType, fetchBlogs } from "../actions/actions";

type blogItemsResponseType = {
  category: string;
  content: string;
  created: string;
  images: string[];
  slug: string;
  title_np: string;
  title_en: string;
  total_views: string | number;
};

type initialItemType = {
  items: blogItemsResponseType[];
};
export interface BlogState {
  value: number;
  loading: string;
  data: any[];
  market_news: any;
  lifestyle: initialItemType;
  home_loan: initialItemType;
  our_thoughts: initialItemType;
  law_and_policy: initialItemType;
}
type fetchPostActionType = {
  data: any;
  whichCat?: string;
};
const initialState: BlogState = {
  value: 0,
  loading: "",
  data: [],
  market_news: { items: [] },
  lifestyle: { items: [] },
  home_loan: { items: [] },
  our_thoughts: { items: [] },
  law_and_policy: { items: [] },
};

export const blogSlice = createSlice({
  name: "blogData",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBlogs.pending, (state, action: PayloadAction<any>) => {
        state.loading = "loading";
      })
      .addCase(
        fetchBlogs.fulfilled,
        (state, { payload, type }: PayloadAction<any>) => {
          const { data, whichCat } = payload as fetchPostActionType;
          state.loading = "success";
          if (whichCat) {
            //@ts-ignore
            state[whichCat.replaceAll(" ", "").toLowerCase()] = data;
          } else {
            state.data = data.items;
          }
        }
      )
      .addCase(fetchBlogs.rejected, (state, action: PayloadAction<any>) => {
        state.loading = "failed";
        state.data = [];
      });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = blogSlice.actions;

export default blogSlice.reducer;
