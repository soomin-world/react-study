import React from "react";
import styled from "styled-components";

// 1. styled-components를 만들었습니다.
const STBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid ${(props) => props.borderColor}; // 4.부모 컴포넌트에서 보낸 props를 받아 사용합니다.
  margin: 20px;
`;
const boxList = ["red", "green", "blue"];

// 색을 넣으면, 이름을 반환해주는 함수를 만듭니다.
const getBoxName = (color) => {
  switch (color) {
    case "red":
      return "빨간 박스";
    case "green":
      return "초록 박스";
    case "blue":
      return "파란 박스";
    default:
      return "검정 박스";
  }
};

const App = () => {
  return (
    <div>
      {boxList.map((box) => (
        <STBox borderColor={box}>{getBoxName(box)}</STBox>
      ))}
    </div>
  );
};

export default App;
