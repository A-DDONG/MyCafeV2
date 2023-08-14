import { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import "../css/input.css";
import "../css/list.css";
import { initData } from "../data/initData";
import uuid from "react-uuid";
import { Outlet } from "react-router-dom";

export const CafeContext = createContext();

export const useCafe = () => {
  return useContext(CafeContext);
};

const CafeMain = () => {
  const [cafe, setCafe] = useState(initData);
  const [cafeList, setCafeList] = useState(() => {
    return localStorage.getItem("CAFELIST")
      ? JSON.parse(localStorage.getItem("CAFELIST"))
      : [];
  });
  useEffect(() => {
    const resetCafe = () => {
      setCafe(initData());
      console.log("UseEffect");
      localStorage.setItem("CAFELIST", JSON.stringify(cafeList));
    };
    resetCafe();
  }, [cafeList]);

  const cafeListAdd = ({
    c_nickname,
    c_division,
    c_name,
    c_recipe,
    c_making,
  }) => {
    const newCafe = {
      ...cafe,
      id: uuid(),
      c_nickname: c_nickname,
      c_division: c_division,
      c_name: c_name,
      c_recipe: c_recipe,
      c_making: c_making,
    };
    console.log("New Cafe:", newCafe);
    setCafeList([...cafeList, newCafe]);
  };
  const updateItemSelect = (id) => {
    const selectCafeList = cafeList.filter((item) => {
      return item.id === id;
    });
    setCafe({ ...selectCafeList[0] });
  };
  const cafeInput = ({
    c_nickname,
    c_division,
    c_name,
    c_recipe,
    c_making,
    c_memo,
  }) => {
    if (!inputConfirm({ c_nickname, c_division, c_name, c_recipe, c_making })) {
      window.alert("모든 항목을 입력해주세요!");
      return;
    }
    let confirmMessage = cafe.id
      ? "레시피를 수정할까요?"
      : "레시피를 추가할까요?";
    let successMessage = cafe.id
      ? "레시피 수정이 완료되었습니다."
      : "레시피 등록이 완료되었습니다.";
    if (window.confirm(confirmMessage)) {
      if (!cafe.id) {
        cafeListAdd({
          c_nickname,
          c_division,
          c_name,
          c_recipe,
          c_making,
          ...(c_memo ? { c_memo } : {}), // c_memo 값이 있을 때만 추가
        });
      } else {
        const updateCafeList = cafeList.map((item) => {
          if (item.id === cafe.id) {
            return {
              ...item,
              c_nickname: c_nickname,
              c_division: c_division,
              c_name: c_name,
              c_recipe: c_recipe,
              c_making: c_making,
              ...(c_memo ? { c_memo } : {}), // c_memo 값이 있을 때만 추가
            };
          }
          return item;
        });
        setCafeList(updateCafeList);
      }
      // 저장 후, cafe의 상태를 초기화하여 인풋 박스의 값을 초기화
      setCafe(initData());

      window.alert(successMessage);
      return true;
    }
    return false;
  };
  const itemDelete = (id, c_name) => {
    if (window.confirm(`${c_name} 레시피를 삭제할까요?`)) {
      const deleteCafeList = cafeList.filter((item) => {
        return item.id !== id;
      });
      setCafeList([...deleteCafeList]);
      window.alert("삭제가 완료되었습니다.");
    }
  };
  const inputConfirm = ({
    c_nickname,
    c_division,
    c_name,
    c_recipe,
    c_making,
  }) => {
    // 각 항목이 비어있는지 확인
    return c_nickname && c_division && c_name && c_recipe && c_making;
  };

  return (
    <CafeContext.Provider
      value={{
        cafe,
        setCafe,
        cafeList,
        setCafeList,
        cafeInput,
        itemDelete,
        updateItemSelect,
      }}
    >
      {/* <CafeInput
        cafe={cafe}
        setCafe={setCafe}
        cafeList={cafeList}
        setCafeList={setCafeList}
        cafeInput={cafeInput}
      />

      <CafeList cafeList={cafeList} /> */}
      <Outlet />
    </CafeContext.Provider>
  );
};

export default CafeMain;
