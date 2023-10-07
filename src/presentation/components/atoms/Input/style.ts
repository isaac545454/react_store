import styled from 'styled-components'
import { Typography } from 'antd'

const { Text } = Typography
export const Container = styled.div`
	width: 100%;
`

export const TitleInput = styled(Text)`
	margin: 8px;
	font-weight: bold;
`

export const Error = styled.p`
	color: red;
`
