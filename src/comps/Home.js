import React, { useState } from "react";
import "../css/home.css";
import underlineImage1 from "../images/밑줄1.png";
import underlineImage2 from "../images/밑줄2.png";
import underlineImage3 from "../images/밑줄3.png";
import underlineImage4 from "../images/밑줄4.png";

const Home = () => {
  const [showMenuTitle, setShowMenuTitle] = useState(false);
  const [showTeams, setShowTeams] = useState(false);
  const [activeTeam, setActiveTeam] = useState({});
  const [showUnderline, setShowUnderline] = useState({
    footprint: false,
    godlife: false,
    damples: false,
    bus: false,
  });
  const [orderComplete, setOrderComplete] = useState(false);

  const handleOrder = () => {
    setOrderComplete(true);
  };

  return (
    <div>
      <h1 className="menu_cafe" onClick={() => setShowMenuTitle(true)}>
        CAFE 505
      </h1>

      {showMenuTitle && (
        <div className="menu_title" onClick={() => setShowTeams(true)}>
          <p>Menu</p>
        </div>
      )}

      {showTeams && (
        <>
          <div className="team_box di">
            <div
              className="team_title"
              id="footprint"
              onClick={() =>
                setActiveTeam({
                  ...activeTeam,
                  footprint: !activeTeam.footprint,
                })
              }
            >
              FootPrint
            </div>
            {activeTeam.footprint && (
              <>
                <div className="team_member">
                  <p
                    className="team_leader"
                    onClick={() =>
                      setShowUnderline({ ...showUnderline, footprint: true })
                    }
                  >
                    Choi Yoonyoung
                  </p>
                  {showUnderline.footprint && (
                    <img
                      src={underlineImage1}
                      alt="밑줄"
                      width="220px"
                      className="line1"
                    ></img>
                  )}
                </div>
                <div className="team_member">
                  <p>Oh Myunghoon</p>
                </div>
                <div className="team_member">
                  <p>Kim Sunjae</p>
                </div>
              </>
            )}
          </div>

          <div className="team_box">
            <div
              className="team_title"
              id="godlife"
              onClick={() =>
                setActiveTeam({ ...activeTeam, godlife: !activeTeam.godlife })
              }
            >
              God Life
            </div>
            {activeTeam.godlife && (
              <>
                <div className="team_member">
                  <p
                    className="team_leader"
                    onClick={() =>
                      setShowUnderline({ ...showUnderline, godlife: true })
                    }
                  >
                    Byun Heesun
                  </p>
                  {showUnderline.godlife && (
                    <img
                      src={underlineImage2}
                      alt="밑줄"
                      width="185px"
                      className="line2"
                    ></img>
                  )}
                </div>
                <div className="team_member">
                  <p>Kim Doyeon</p>
                </div>
                <div className="team_member">
                  <p>Lee Jungmin</p>
                </div>
              </>
            )}
          </div>

          <div className="team_box di">
            <div
              className="team_title"
              id="damples"
              onClick={() =>
                setActiveTeam({ ...activeTeam, damples: !activeTeam.damples })
              }
            >
              DAMPLES
            </div>
            {activeTeam.damples && (
              <>
                <div className="team_member">
                  <p
                    className="team_leader"
                    onClick={() =>
                      setShowUnderline({ ...showUnderline, damples: true })
                    }
                  >
                    Kang Yueun
                  </p>
                  {showUnderline.damples && (
                    <img
                      src={underlineImage3}
                      alt="밑줄"
                      width="170px"
                      className="line3"
                    ></img>
                  )}
                </div>
                <div className="team_member">
                  <p>Seon Dongcheol</p>
                </div>
                <div className="team_member">
                  <p>Jung Hojin</p>
                </div>
              </>
            )}
          </div>

          <div className="team_box">
            <div
              className="team_title"
              id="bus"
              onClick={() =>
                setActiveTeam({ ...activeTeam, bus: !activeTeam.bus })
              }
            >
              Bus
            </div>
            {activeTeam.bus && (
              <>
                <div className="team_member">
                  <p
                    className="team_leader"
                    onClick={() =>
                      setShowUnderline({ ...showUnderline, bus: true })
                    }
                  >
                    Kim Gukju
                  </p>
                  {showUnderline.bus && (
                    <img
                      src={underlineImage4}
                      alt="밑줄"
                      width="140px"
                      className="line4"
                    ></img>
                  )}
                </div>
                <div className="team_member">
                  <p>Lee Sechan</p>
                </div>
                <div className="team_member">
                  <p>Heo Kwangyoung</p>
                </div>
              </>
            )}
          </div>
        </>
      )}

      <div className="line"></div>
      <div>
        {orderComplete ? (
          <p className="thanks">감사합니다.</p>
        ) : (
          <button className="menu_button" onClick={handleOrder}>
            주문하기
          </button>
        )}
        <div className={`teacher ${orderComplete ? "visible" : ""}`}>
          <p>Jang Hyunjung</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
