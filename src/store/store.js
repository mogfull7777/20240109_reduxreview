import { configureStore, createSlice } from "@reduxjs/toolkit";

let locallist = createSlice({
  name: "local",
  initialState: [
    { id: 0, name: "Spiderman", point: 8 },
    { id: 1, name: "Ironman", point: 3 },
    { id: 2, name: "Captain America", point: 4 },
  ],
  reducers: {
    change(state, action) {
      const { id } = action.payload;
      return state.map((hero) =>
        hero.id === id ? { ...hero, point: hero.point + 1 } : hero
      );
    },
  },
});

export let { change } = locallist.actions; // 로컬리스트에 액션이 일어날꺼다.

export default configureStore({
  reducer: {
    herolist: locallist.reducer,
  },
});

// 상태관리 : state 변경
// 1. 수정 함수 만들기
// 2. export
// 3. 실행을 위한 요청 - dispatch

// 과제 포인트 +1 씩 증가.
// 12시 전까지 어려웠던, 궁금한 개념 올리기.
