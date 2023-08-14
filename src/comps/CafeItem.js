import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";
import memoUnderLine from "../images/메모밑줄.png";

const CafeItem = (props) => {
  const navigate = useNavigate();
  const [showMemo, setShowMemo] = useState(false);

  const { item, itemDelete, updateItemSelect } = props;
  const deleteClickHandler = (e, id, c_name) => {
    itemDelete(id, c_name);
  };
  const contentClickHandler = (e, id) => {
    updateItemSelect(id);
    navigate(`/recipe/update/${id}`);
  };
  const memoClickHandler = (e) => {
    setShowMemo(true);
  };
  console.log("Item in CafeItem:", item);
  return (
    <div className="item">
      <p>
        <span>&bull; 작성자: </span>
        <span> {item.c_nickname}</span>
      </p>
      <div className="item_button">
        <button
          className="delete"
          onClick={(e) => deleteClickHandler(e, item.id, item.c_name)}
        >
          삭제
        </button>
        <button
          className="update"
          onClick={(e) => contentClickHandler(e, item.id)}
        >
          수정
        </button>
        {item.c_memo && (
          <button className="memo" onClick={memoClickHandler}>
            메모
          </button>
        )}
      </div>
      <Modal show={showMemo} onClose={() => setShowMemo(false)}>
        <h3>메모있음!</h3>
        <div className="modal_content">
          <p>&bull; 작성자</p>
          <span>{item.c_nickname}</span>
        </div>
        <div className="modal_content">
          <p>&bull; 메뉴 이름</p>
          <span>{item.c_name}</span>
        </div>
        <div className="modal_content">
          <p>&bull; 메모</p>
          <span>{item.c_memo}</span>
        </div>
      </Modal>
      <p>
        <span>&bull; 메뉴 구분:</span>
        <span> {item.c_division}</span>
      </p>
      <p>
        <span>&bull; 메뉴 이름:</span>
        <span> {item.c_name}</span>
      </p>
      <p>
        <span>&bull; 재료:</span>
        <span> {item.c_recipe}</span>
      </p>
      <p>
        <span>&bull; 조리 방법</span>
      </p>
      <ol>
        {Array.isArray(item.c_making) &&
          item.c_making.map((step, index) => <li key={index}>{step}</li>)}
      </ol>
    </div>
  );
};
export default CafeItem;
