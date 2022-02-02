import React from "react";

class Auth extends React.Component{
	render() {
		return (
			<div className="form form_auth">
				<form action="">
					<h3 className="sub-heading">Sign In</h3>
					<div className="form__item">
						<input
							className="form__input"
							name="login"
							type="email"
							placeholder="email"
							spellCheck={false}
						/>
					</div>
					<div className="form__item">
						<input
							className="form__input"
							name="password"
							type="password"
							placeholder="password"/>
					</div>
					<div className="form__item">
						<button className="btn btn_block">Sign In</button>
					</div>
				</form>
			</div>
		)
	}
}










export default Auth;