



const createContent = (userInfo, v_code, felink) => {
    return `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
 <style>
            body {
                background-color: cornflowerblue;
                font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                 color: black;
                 padding:2.5% 5%;
            }
            a {
                display: block;
                width: 120px;
                padding: 12px;
                border-radius: 4px;
                background-color: #cfcfcf;
                text-decoration: none;
                text-align: center;
                text-transform: uppercase;
            }
        </style>
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1.0" />
		<title>Verification Code</title>
	</head>
	<body>
		<h1>Hello dear ${userInfo.firstName}</h1>
		<h2>
			Thanks for joining Y & we hope you enjoy our Fiedles and make a
			great Fiedler
		</h2>
		<h4>
			Here is your verification code. please enter it in the link below to
			be able to login and enjoy Y
		</h4>
        <h3>
			${v_code}
		</h3>
        <a href=${felink + "/verify/" + userInfo._id}>to verify Page</a>
	</body>
</html>`
}



export default createContent