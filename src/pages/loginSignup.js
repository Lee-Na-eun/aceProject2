import {LoginBox, SignupInputBox, LoginSignupWrap, SignupButton, InputBox, SignupBox, CloseButton} from "../style/styleLoginSignup";
import {useState} from "react";
import axios from 'axios';
import {useSelector, useDispatch} from "react-redux";
import {userInfoStatus, login} from "../redux/user/userInfo";

axios.defaults.withCredentials = true;

function LoginSignup () {
    const dispatch = useDispatch();
    const statusResult = useSelector(userInfoStatus);
    const [isSignup, setIsSignup] = useState(false);
    const [userInfo, setUserInfo] = useState({
        username : '',
        password : '',
        phone : '',
        email : ''
    });


    const userInfoHandler = (key) => (e) => {
        if(e.target.placeholder === "Nickname"){
            setUserInfo({...userInfo, [key] : e.target.value});
        }else if(e.target.placeholder === "Password"){
            setUserInfo({...userInfo, [key] : e.target.value});
        }
    }

    const handleLogin = () => {
        axios.post(`/api/login`,{
            username : userInfo.username,
            password : userInfo.password
        }).then((res) => {
            if(res.data.success){
                console.log(res.data.response)
                dispatch(login({userToken : res.data.response}));
                alert('로그인 완료');
                window.location.href = '/main'
            }
        }).catch((err) => {
            if(userInfo.username === '' || userInfo.password === '') {
                alert('입력하지 않은 정보가 있습니다.');
            }else{
                alert('아이디 혹은 비밀번호가 틀렸습니다.');
            }
        });
    }

    // console.log(statusResult)

    return (
        <LoginSignupWrap>
            <LoginBox>
                <h3>LOGIN</h3>
                <InputBox>
                    <input placeholder={"Nickname"} onChange={userInfoHandler('username')} />
                    <input type={"password"} placeholder={"Password"} onChange={userInfoHandler('password')} />
                    <button onClick={handleLogin}>GO</button>
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