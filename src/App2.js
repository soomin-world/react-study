import React, { useEffect, useState } from "react";

const App = () => {
  const [value, setValue] = useState("");
  //2. useState 가 value값을 setValue한다.
  //3. state가 변경되었기 때문에  App컴포넌트가 리렌더링 된다.
  useEffect(() => {
    console.log("hello useEffect");
  }, []); // 비어있는 의존성 배열 -> 한번만 실행된후 멈춰라
  //4. 리렌더링 되었기 때문에 useEffect가 다시 실행된다.
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }} // 1. inut에 값을 입력 한다.
      />
    </div>
  );
};

export default App;
