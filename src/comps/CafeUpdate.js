import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCafe } from "./CafeMain";
import { useNavigate } from "react-router-dom";

const CafeUpdate = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { cafeList, cafeInput } = useCafe();
  const selectedItem = cafeList.find((item) => item.id === id);

  const [updatedCafe, setUpdatedCafe] = useState({
    c_nickname: "",
    c_division: "",
    c_name: "",
    c_recipe: "",
    c_making: "",
    c_memo: "", // 새로 추가된 메모 필드
  });

  useEffect(() => {
    if (selectedItem) {
      setUpdatedCafe(selectedItem);
    }
  }, [selectedItem]);
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUpdatedCafe({ ...updatedCafe, [name]: value });
  };
  const btnClickHandler = (e) => {
    e.preventDefault();
    let result = cafeInput({
      c_nickname: updatedCafe.c_nickname,
      c_division: updatedCafe.c_division,
      c_name: updatedCafe.c_name,
      c_recipe: updatedCafe.c_recipe,
      c_making: updatedCafe.c_making,
      c_memo: updatedCafe.c_memo,
    });
    if (result) {
      navigate(`/recipe/list`);
    }
  };

  return (
    <>
      <h1>&bull; 레시피 수정하기</h1>
      <section className="main">
        <div className="cafe input">
          <label>&bull; 작성자</label>
          <input
            name="c_nickname"
            placeholder="작성자"
            onChange={inputChangeHandler}
            value={updatedCafe.c_nickname}
            disabled
          />
        </div>
        <div className="cafe input">
          <label>&bull; 메뉴구분</label>
          <select
            name="c_division"
            onChange={inputChangeHandler}
            value={updatedCafe.c_division || ""}
          >
            <option value="">선택</option>
            <option value="커피">커피</option>
            <option value="디카페인커피">디카페인 커피</option>
            <option value="차">차</option>
            <option value="논커피">논커피</option>
            <option value="기타">기타</option>
          </select>
        </div>
        <div className="cafe input">
          <label>&bull; 메뉴이름</label>
          <input
            name="c_name"
            placeholder="메뉴이름"
            onChange={inputChangeHandler}
            value={updatedCafe.c_name}
          />
        </div>
        <div className="cafe input">
          <label>&bull; 재료</label>
          <input
            name="c_recipe"
            placeholder="레시피"
            onChange={inputChangeHandler}
            value={updatedCafe.c_recipe}
          />
        </div>
        <div className="cafe input">
          <label>&bull; 조리방법</label>
          <textarea
            name="c_making"
            placeholder="조리방법"
            onChange={inputChangeHandler}
            value={updatedCafe.c_making}
          />
        </div>
        <div className="cafe input">
          <label>&#9998; 메모</label>
          <textarea
            name="c_memo"
            placeholder="메모"
            onChange={inputChangeHandler}
            value={updatedCafe.c_memo || ""}
          ></textarea>
        </div>
        <div className="button">
          <button onClick={btnClickHandler}>저장</button>
        </div>
      </section>
    </>
  );
};

export default CafeUpdate;
