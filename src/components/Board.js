import React from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../store/store";

const Board = () => {
  let herolist = useSelector((state) => state.herolist); // store에서 state가져올 수 있는 훅.
  console.log("herolist", herolist);
  console.log("herolist detail", herolist[1]);

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
                  dispatch(change());
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
