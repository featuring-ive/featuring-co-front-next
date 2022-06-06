import type { NextPage } from 'next'
import Head from 'next/head'


const SignUp: NextPage = () => {
  return (
    <>
    <div>
      <Head>
        <title>Sign-up | featuring-apps</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="h1">Sign up</h1>
    </div>

    <style jsx>{`
          .h1 {
            font-size: 80px;
            color: red;
          }
          div {
            padding: 120px;
          }
        `}</style>
    </>
  )
}

export default SignUp