import Link from "next/link";
import { useRouter } from "next/router";

function GNB() {
  const router = useRouter();
  return (
    <>
        <div className={
          router.pathname === "/sign_up"
          ? "disable"
          : router.pathname === "/login"
          ? "disable"
          : "container"
        }>
          <div className="section">
            <Link href="/home">
              <a>
                  Logo
              </a>
            </Link>
          </div>

          <div className="section">
             <div id="profile">
                <div id="profile_img">M</div>
                <div id="profile_info">
                  <div>Martin</div>
                  <div>martin@comapny.com</div>
                </div>
                <button>▼</button>
             </div>
          </div>

          <div className="section" id="My">
              <Link href="/my_setting">
                <a className={router.pathname === "/my_setting" ? "active" : ""}>내정보/설정</a>
              </Link>
              <Link href="/my_membership">
                <a className={router.pathname === "/my_membership" ? "active" : ""}>멤버십/결제</a>
              </Link>
              <Link href="/my_faq">
                <a className={router.pathname === "/my_faq" ? "active" : ""}>1:1문의하기</a>
              </Link>
          </div>

          <div className="divide"></div>

          <div className="section">
              <Link href="/message">
                <a className={router.pathname === "/message" ? "active" : ""}>메시지</a>
              </Link>
              <Link href="/notification">
                <a className={router.pathname === "/notification" ? "active" : ""}>알림</a>
              </Link>
          </div>

          <div className="divide"></div>

          <div className="section">
              <Link href="/home">
                <a className={router.pathname === "/home" ? "active" : ""}>대시보드</a> 
              </Link>
          </div>

          <div className="divide"></div>

          <div className="section">
              <Link href="/discover">
                <a className={router.pathname === "/discover" ? "active" : ""}>인플루언서 찾기</a>
              </Link>
          </div>

          <div className="divide"></div>

          <div className="section">
            <Link href="/favorit">
              <a className={router.pathname === "/favorit" ? "active" : ""}>인플루언서 관리</a>
            </Link>
            <Link href="/campaign">
              <a className={router.pathname === "/campaign" ? "active" : ""}>캠페인 관리</a>
            </Link>
          </div>

        </div>

        <style jsx>{`
          .disable {
            display: none;
          }

          .container {
            display: flex;
            flex-direction: column;
            padding: 0 24px;
            gap: 24px;

            width: 320px;
            height: 100%;

            background-color: #F8F9FA;

            overflow-x: hidden;
            padding-top: 40px;

            border-right: 1px solid #DEE2E6; 
          }

          .section {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          .divide {
            height: 1px;
            background-color: #DEE2E6;
            margin: 0 16px;
          }
          
          .section a {
            display: flex;
            align-items: center;
            height: 40px;
            padding: 0 16px;
            background-color:none;
            border-radius:8px;
          }

          .section a:hover {
            background-color: white;
            color: black;
          }

          .active {
              color: red;
          }

          #My {
            display: none;
          }

          #profile {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 8px;
            padding: 0 16px;
          }

          #profile_img {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #D5EFE0;
            min-width: 48px;
            height: 48px;
            border-radius: 8px;
          }

          #profile_info {
            display: block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: fill;
          }
        `}</style>
    </>
  )
}


export default GNB