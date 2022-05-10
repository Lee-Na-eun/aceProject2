import {LoginSignupBox, LoginSignupWrap, SignupButton, InputBox} from "../style/styleLoginSignup";

function LoginSignup () {
    return (
        <LoginSignupWrap>
            <LoginSignupBox>
                <h3>LOGIN</h3>
                <InputBox>
                    <input placeholder={"Username"}></input>
                    <input type={"password"} placeholder={"Password"}></input>
                    <button>GO</button>
                </InputBox>
            </LoginSignupBox>
            <SignupButton>SIGN UP</SignupButton>
        </LoginSignupWrap>
    )
}

export default LoginSignup;