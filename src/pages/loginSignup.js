import {LoginBox, SignupInputBox, LoginSignupWrap, SignupButton, InputBox, SignupBox, CloseButton} from "../style/styleLoginSignup";
import {useState} from "react";

function LoginSignup () {
    const [isSignup, setIsSignup] = useState(false);

    console.log(isSignup)

    return (
        <LoginSignupWrap>
            <LoginBox>
                <h3>LOGIN</h3>
                <InputBox>
                    <input placeholder={"Nickname"} />
                    <input type={"password"} placeholder={"Password"} />
                    <button>GO</button>
                </InputBox>
            </LoginBox>
            <div className={isSignup ? "fadeInAnimation" : "fadeOutAnimation"}>
                <SignupBox>
                    <CloseButton onClick={() => setIsSignup(false)}>&times;</CloseButton>
                    <h3>SIGNUP</h3>
                    <SignupInputBox>
                        <div id={"nicknameWrap"}>
                            <input placeholder={"Nickname"} />
                            <button>Confirm</button>
                        </div>
                        <input placeholder={"Phone Number"} />
                        <input placeholder={"Email Address"} />
                        <div id={"passwordWrap"}>
                            <input type={"password"} placeholder={"Password"} />
                            <input type={"password"} placeholder={"Repeat Password"} />
                        </div>
                        <button>GO</button>
                    </SignupInputBox>
                </SignupBox>
            </div>
            {isSignup ? null : <SignupButton onClick={() => setIsSignup(true)}>SIGN UP</SignupButton>}
        </LoginSignupWrap>
    )
}

export default LoginSignup;