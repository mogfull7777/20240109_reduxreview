import { configureStore, createSlice } from "@reduxjs/toolkit";

// createSlice = 리듀서 함수의 객체 , 이름 , 초기 상태 값을 받고
//               해당 액션 생성자와 액션 유형으로 슬라이스 리듀서를 자동으로 생성.
//               useState와 유사.
let locallist = createSlice({
  name: "local",
  // initialState = 초기 값
  initialState: [
    { id: 0, name: "Spiderman", point: 8 },
    { id: 1, name: "Ironman", point: 3 },
    { id: 2, name: "Captain America", point: 4 },
  ],
  // 액션 설정 (usestate의 set머시기와 유사.)
  reducers: {
    // 특정 id에 해당하는 hero의 포인트를 1 증가.
    change(state, action) {
      // 액션에서 필요한 임의의 데이터(payload)인 id
      const idNum = action.payload.id;
      return state.map((hero) =>
        // 현재 객체의 id가 주어진 id와 같은지 확인 후,
        // 만약 id가 같다면 현재 객체의 모든 속성을 그대로 가져오면서 point 1 증가.
        // 아니라면 현재 객페를 그대로 사용.
        hero.id === idNum ? { ...hero, point: hero.point + 1 } : hero
      );
    },
  },
});

export let { change } = locallist.actions;

// configureStore = 전체 스토어 생성
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
