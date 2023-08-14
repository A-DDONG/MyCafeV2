import { useEffect } from "react";
import { useCafe } from "./CafeMain";
import { useNavigate } from "react-router-dom";

const CafeInput = () => {
  const navigate = useNavigate();
  const { cafe, setCafe, cafeInput } = useCafe();
  // const [cafe, setCafe] = useState();
  // const [cafe, setCafe, cafeInput] = props;
  // const [recipeCount, setRecipeCount] = useState(1);

  useEffect(() => {
    // 상태 초기화
    setCafe({
      c_nickname: "",
      c_division: "",
      c_name: "",
      c_recipe: "",
      c_making: "",
    });
  }, []);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setCafe({ ...cafe, [name]: value });
  };

  // const addRecipeHandler = () => {
  //   setRecipeCount(recipeCount + 1);
  // };
  const btnClickHandler = (e) => {
    e.preventDefault(); // 폼 제출을 방지하려면 이 코드를 추가해야 합니다.
    const makingSteps = cafe.c_making.split("\n");
    let result = cafeInput({
      c_nickname: cafe.c_nickname,
      c_division: cafe.c_division,
      c_name: cafe.c_name,
      c_recipe: cafe.c_recipe,
      c_making: makingSteps,
    });
    if (result) {
      navigate(`/recipe/list`);
    }
  };

  return (
    <>
      <h1>레시피 만들기</h1>
      <section className="main">
        <div className="cafe input">
          <label>&bull; 작성자</label>
          <input
            name="c_nickname"
            placeholder="작성자"
            onChange={inputChangeHandler}
            value={cafe.c_nickname}
          />
        </div>
        {/* <div className="cafe input">
          <label>메뉴구분</label>
          <input
            name="c_division"
            placeholder="메뉴구분"
            onChange={inputChangeHandler}
          />
        </div> */}
        <div className="cafe input">
          <label>&bull; 메뉴구분</label>
          <select
            name="c_division"
            onChange={inputChangeHandler}
            value={cafe.c_division || ""}
          >
            <option value="">선택</option>
            <option value="커피">커피</option>
            <option value="디카페인커피">디카페인 커피</option>
            <option value="차">차</option>
            <option value="논커피">논커피</option>
            <option value="기타">기타</option>
            {/* 여기에 추가적인 옵션을 추가하실 수 있습니다 */}
          </select>
        </div>
        <div className="cafe input">
          <label>&bull; 메뉴이름</label>
          <input
            name="c_name"
            placeholder="메뉴이름"
            onChange={inputChangeHandler}
            value={cafe.c_name}
          />
        </div>
        <div className="cafe input">
          <label>&bull; 재료</label>
          <input
            name="c_recipe"
            placeholder="레시피"
            onChange={inputChangeHandler}
            value={cafe.c_recipe}
          />
        </div>
        <div className="cafe input">
          <label>&bull; 조리방법</label>
          <textarea
            name="c_making"
            placeholder="작성예시                                                                       
            1. 얼음 넣기 
            2. 물 붓기"
            onChange={inputChangeHandler}
            value={cafe.c_making}
          />
        </div>
        <div className="button">
          <button onClick={btnClickHandler}>저장</button>
        </div>
      </section>
    </>
  );
};
export default CafeInput;
