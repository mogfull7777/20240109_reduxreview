import { configureStore, createSlice } from "@reduxjs/toolkit";

let locallist = createSlice({
  name: "local",
  initialState: [
    { id: 1, name: "Spiderman", point: 8 },
    { id: 2, name: "Ironman", point: 3 },
    { id: 3, name: "Captain America", point: 4 },
  ],
  reducers: {
    change(state) {
      return [
        { id: 4, name: "Green Goblin", point: 4 },
        { id: 5, name: "Mandarin", point: 6 },
        { id: 6, name: "Red Skull", point: 6 },
      ];
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
