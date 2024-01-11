import React from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../store/store";

const Board = () => {
  // useSelector = store 상태를 읽어와서 herolist 변수에 저장.
  let herolist = useSelector((state) => state.herolist);
  console.log("herolist", herolist);
  console.log("herolist detail", herolist[1]);

  // useDispatch = store에 정의된 액션을 dispatch.
  let dispatch = useDispatch();

  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>별명</th>
          <th>포인트</th>
          <th>변경하기</th>
        </tr>
      </thead>
      <tbody>
        {herolist.map((hero, i) => (
          <tr key={i}>
            <td>{i}</td>
            <td>{hero.name}</td>
            <td>{hero.point}</td>
            <td>
              <button
                onClick={() => {
                  // id는 hero.id로 사용.
                  dispatch(change({ id: hero.id }));
                }}
              >
                변경하기
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Board;
