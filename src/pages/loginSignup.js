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
        repeatPassword : '',
        phone : '',
        email : ''
    });
    const [isconfirm, setIsconfirm] = useState(false);


    const userInfoHandler = (key) => (e) => {
        if(e.target.placeholder === "Phone Number"){
            e.target.value = e.target.value
            .replace(/[^0-9]/g, '')
            .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
            .replace(/(\-{1,2})$/g, "");
        }
        setUserInfo({...userInfo, [key] : e.target.value});
    }



    const handleConfirmUsername = () => {
        axios.post(`/api/checkUsername`, {
            username : userInfo.username
        }).then((res) => console.log(res))
    }

    const handleSignup = () => {
        const validPassword = userInfo.password.length;
        const validPhone = 0;
        if(!isconfirm){
            alert("아이디 중복확인을 해주세요.");
        }else if(userInfo.password !== userInfo.repeatPassword){
            alert("비밀번호가 일치하지 않습니다.");
        }else if(validPassword > 12 && validPassword < 4){
            alert("비밀번호는 4이상 12이하이어야 합니다.");
        }
        axios.post(`/api/register`, {
            username : userInfo.username,
            password : userInfo.password,
            phone : userInfo.phone,
            email : userInfo.phone
        }).then((res) => {
            console.log(res)
        })
    }

    const handleLogin = () => {
        axios.post(`/api/login`,{
            username : userInfo.username,
            password : userInfo.password
        }).then((res) => {
            console.log(res)
            if(res.data.success){
                console.log(res.data.response)
                window.location.href = '/main'
                dispatch(login({userToken : res.data.response}));
                alert('로그인 완료');
            }
        }).catch((err) => {
            if(userInfo.username === '' || userInfo.password === '') {
                alert('입력하지 않은 정보가 있습니다.');
            }else{
                alert('아이디 혹은 비밀번호가 틀렸습니다.');
            }
        });
    }
    console.log(userInfo.phone.length)
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
                            <input placeholder={"Nickname"} onChange={userInfoHandler('username')} />
                            <button onClick={handleConfirmUsername}>Confirm</button>
                        </div>
                        <input placeholder={"Phone Number"} onChange={userInfoHandler('phone')} />
                        <input placeholder={"Email Address"} onChange={userInfoHandler('email')} />
                        <div id={"passwordWrap"}>
                            <input type={"password"} placeholder={"Password"} onChange={userInfoHandler('password')} />
                            <input type={"password"} placeholder={"Repeat Password"} onChange={userInfoHandler('repeatPassword')} />
                        </div>
                        <button onClick={handleSignup}>GO</button>
                    </SignupInputBox>
                </SignupBox>
            </div>
            {isSignup ? null : <SignupButton onClick={() => setIsSignup(true)}>SIGN UP</SignupButton>}
        </LoginSignupWrap>

    )
}

export default LoginSignup;