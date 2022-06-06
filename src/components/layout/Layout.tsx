import GNB from "@components/common/GNB"

export interface ILayout {
    children: JSX.Element
}

function Layout({children}: ILayout) {
  return (
      <>
        <div className="container">
          <GNB/>
          <div className="content">
            {children}
          </div>
        </div>

        <style jsx>{`
          .container{
            display: flex;
            flex-direction: row;

            width: 100vw;
            height: 100vh;
            overflow: hidden;
          }
          .content {
            display: flex;

            width: fill;
            height: fill;

            background-color: #F8F9FA;

            padding: 40px;
          }
        `}</style>
      </>
  )
}

export default Layout