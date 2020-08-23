import styled from 'styled-components'

export const Styles = styled.div`
	width: 300px;
	margin:20px auto;

	form{
		display: flex;
		flex-direction: column;
	}
	h3{
		text-align:center;
		margin-top:40px;
	}
	label{
		font-weight:bold;
		text-transform:capitalize;
		margin-top:20px;
	}
	input[type='checkbox']{
		margin-right:10px;
	}
	.submit{
		margin-top: 20px;
	}
	input{
		padding: 5px ;
		border-radius:15px;
		outline: none;
	}
	.name{
		display:flex;
		flex-direction:column;
	}
`