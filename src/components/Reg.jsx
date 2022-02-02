import React from "react";

class Reg extends React.Component {
	render() {
		return (
			<div className="form form_reg">
				<form action="">
					<h3 className="sub-heading">Sign Up</h3>
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
						<input
							className="form__input"
							name="password-repeat"
							type="password"
							placeholder="repeat password"/>
					</div>
					<div className="form__item">
						<button className="btn btn_block">Sign Up</button>
					</div>
				</form>
			</div>
		)
	}
}

export default Reg;