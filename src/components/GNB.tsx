import Link from 'next/link'
import React, { useState } from 'react'
import styled from 'styled-components'

const Containner = styled.div `
    display: flex;
    flex-direction: column;
    padding: 24px;
    width: 320px;
    background-color: #F8F9FA;
    gap: 24px;
    text-decoration: none;
`

const Section = styled.div `
    display: flex;
    flex-direction: column;
    gap: 8px;

    a {
        display: flex;
        align-items: center;
        width: 100%;
        height: 40px;
        padding: 0 16px;
        border-radius: 8px;

        &:hover {
            background-color: #F1F3F5;
        }
    }
`
const Divide = styled.div`
    height: 1px;
    width: 240px;
    margin: 0 16px;
    background-color: #DEE2E6;
`

const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 16px;
`

const Profile_img = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background-color: #D5EFE0;
    border-radius: 16px;
`

const Profile_info = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 4px;

    span {
        font-size: 14px;
        color: #51575C;
    }
`

function GNB() {
    const [myMenuOpen, setMyMenuOpen] = useState(false);
    const toggleMyMenu = () => {
        setMyMenuOpen (myMenuOpen => !myMenuOpen);
        console.log(myMenuOpen)
    }

  return (
    <>
        <Containner>
            <Section>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/login">
                    <a>Login</a>
                </Link>
                <Link href="/sign">
                    <a>Sign</a>
                </Link>
            </Section>

            <Divide/>

            <Profile>
                <Profile_img>
                    M
                </Profile_img>
                <Profile_info>
                    <p>Martin</p>
                    <span>martin@featuring.in</span>
                </Profile_info>
                <button onClick={()=>toggleMyMenu}>
                    접기
                </button>
            </Profile>

            <Section>
                <Link href="/my_setting">
                    <a>my_setting</a>
                </Link>
                <Link href="/my_membership">
                    <a>my_membership</a>
                </Link>
                <Link href="/my_faq">
                    <a>my_faq</a>
                </Link>
            </Section>

            <Divide/>

            <Section>
                <Link href="/message">
                    <a>message</a>
                </Link>
                <Link href="/alarm">
                    <a>alarm</a>
                </Link>
            </Section>

            <Divide/>

            <Section>
                <Link href="/dash_board">
                    <a>dash_board</a>
                </Link>
            </Section>

            <Divide/>

            <Section>
                <Link href="/discover">
                    <a>discover</a>
                </Link>
            </Section>

            <Divide/>

            <Section>
                <Link href="/favorit">
                    <a>favorit</a>
                </Link>
                <Link href="/campaign">
                    <a>campaign</a>
                </Link>
            </Section>
        </Containner>
    </>
  )
}


export default GNB