import Link from 'next/link'
import React, { useState } from 'react'
import styled from 'styled-components'

function GNB() {
	const [myMenuOpen, setMyMenuOpen] = useState(false)
	const toggleMyMenu = () => {
		setMyMenuOpen((myMenuOpen) => !myMenuOpen)
	}

	return (
		<>
			<Containner>
				<Section>
					<Logo>Logo</Logo>
				</Section>
				<Profile>
					<Profile_img>M</Profile_img>
					<Profile_info>
						<p>Martin</p>
						<span>martin@featuring.in</span>
					</Profile_info>
					<button onClick={() => toggleMyMenu()}>
						{myMenuOpen ? '▲' : '▼'}
					</button>
				</Profile>
				{myMenuOpen ? (
					<>
						<Mebership>
							<p>스탠다드 멤버십을 이용중</p>
							<span>결제 예정일 2022.05.20</span>
							<button>멤버십 관리</button>
						</Mebership>
						<Section>
							<Link href="/my-setting">
								<a>my_setting</a>
							</Link>
							<Link href="/my-membership">
								<a>my_membership</a>
							</Link>
							<Link href="/my-faq">
								<a>my_faq</a>
							</Link>
						</Section>
					</>
				) : (
					''
				)}

				<Divide />

				<Section>
					<Link href="/message">
						<a>message</a>
					</Link>
					<Link href="/alarm">
						<a>alarm</a>
					</Link>
				</Section>

				<Divide />

				<Section>
					<Link href="/dash-board">
						<a>dash_board</a>
					</Link>
				</Section>

				<Divide />

				<Section>
					<Link href="/discover">
						<a>discover</a>
					</Link>
				</Section>

				<Divide />

				<Section>
					<Link href="/favorit">
						<a>favorit</a>
					</Link>
					<Link href="/campaign">
						<a>campaign</a>
					</Link>
				</Section>
				<BottomSection>
					<Box />
					<BottomMenu>
						<Link href="https://naver.com">
							<a target="_blank">서비스 활용 가이드</a>
						</Link>
						<Link href="https://naver.com">
							<a target="_blank">인사이트 블로그</a>
						</Link>
						<select name="Languages">
							<option value="KOR">KOR</option>
							<option value="ENG">ENG</option>
						</select>
					</BottomMenu>
				</BottomSection>
			</Containner>
		</>
	)
}

const Containner = styled.div`
	display: flex;
	flex-direction: column;
	padding: 24px;
	padding-bottom: 80px;
	width: 320px;
	height: fill;
	background-color: #f8f9fa;
	gap: 24px;
	text-decoration: none;
	overflow-y: scroll;
	overflow-x: hidden;

	::-webkit-scrollbar {
		width: 8px;
	}

	::-webkit-scrollbar-thumb {
		height: 20%;
		background-color: #dee2e6;
		border-radius: 4px;
		background-clip: padding-box;
		border: 2px solid transparent;
	}

	::-webkit-scrollbar-track {
		background: none;
	}
`

const Section = styled.div`
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
			background-color: #f1f3f5;
		}
	}
`

const Logo = styled.div`
	padding: 0 16px;
`

const Divide = styled.div`
	display: block;
	min-height: 1px;
	width: 240px;
	margin: 0 16px;
	background-color: #dee2e6;
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
	background-color: #d5efe0;
	border-radius: 16px;
`

const Profile_info = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	gap: 4px;

	span {
		font-size: 14px;
		color: #51575c;
	}
`

const Mebership = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 8px;
	margin: 0 16px;
	padding: 24px;

	background-color: #f1f3f5;
	border-radius: 8px;
	border: 1px solid #dee2e6;

	p {
		font-weight: bold;
	}
	span {
		font-size: 14px;
	}
	button {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 40px;
		background-color: #31363a;
		border-radius: 8px;
		color: white;
		font-weight: bold;
		font-size: 14px;

		&:hover {
			background-color: black;
		}
	}
`

const BottomSection = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 320px;
	padding: 0 40px;
`

const Box = styled.div`
	display: block;
	height: 40px;
	background: linear-gradient(
		0deg,
		rgba(248, 249, 250, 1) 0%,
		rgba(248, 249, 250, 0) 100%
	);
`

const BottomMenu = styled.div`
	border-top: 1px solid #dee2e6;
	display: flex;
	flex-direction: column;
	gap: 16px;
	padding: 24px 0;
	background-color: #f8f9fa;
`

export default GNB
