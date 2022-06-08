import styled from 'styled-components'
import React from 'react'
import GNB from './GNB'

const Containner = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #f8f9fa;
	display: flex;
`

interface ILayout {
	children: JSX.Element
}

function Layout({ children }: ILayout) {
	return (
		<>
			<Containner>
				<GNB></GNB>
				{children}
			</Containner>
		</>
	)
}

export default Layout
