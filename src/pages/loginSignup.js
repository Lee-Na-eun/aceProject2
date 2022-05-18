import {LoginBox, SignupInputBox, LoginSignupWrap, SignupButton, InputBox, SignupBox, CloseButton} from "style/styleLoginSignup";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {login} from "redux/user/userInfo";
import {useNavigate} from "react-router";
import {axiosApiInstance} from 'common/axiosToken'

function LoginSignup () {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isSignup, setIsSignup] = useState(false);
    const [userInfo, setUserInfo] = useState({
        username : '',
        password : '',
        repeatPassword : '',
        phone : '',
        email : ''
    });
    const [isConfirm, setIsConfirm] = useState(false);
    const [confirmUsername, setConfirmUsername] = useState('');


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
        if(userInfo.username.length === 0) {
            alert("아이디를 먼저 입력해주세요.");
        }else{
            axiosApiInstance.post(`/api/usernameCheck?username=${userInfo.username}`)
            .then((res) => {
                if(res.data.response){
                    setIsConfirm(false);
                    alert("사용 중인 아이디 입니다.");
                }else{
                    setIsConfirm(true);
                    setConfirmUsername(userInfo.username)
                    alert("사용할 수 있는 아이디 입니다.");
                }
            })
        }
    }

    const handleSignup = () => {
        const validPassword = userInfo.password.length;
        const hyphenPhone = userInfo.phone.split('-');
        if(!isConfirm || userInfo.username !== confirmUsername){
            alert("아이디 중복확인을 해주세요.");
        }else if(userInfo.password !== userInfo.repeatPassword){
            alert("비밀번호가 일치하지 않습니다.");
        }else if(validPassword > 12 && validPassword < 4){
            alert("비밀번호는 4이상 12이하이어야 합니다.");
        }else if(userInfo.phone.length !== 14 && hyphenPhone.length !== 3){
            alert("11자리의 전화번호를 입력해주세요.");
        }else{
            axiosApiInstance.post(`/api/register`, {
                username : userInfo.username,
                password : userInfo.password,
                phone : userInfo.phone,
                email : userInfo.phone
            }).then((res) => {
                if(res.data.response === "REGIST OK"){
                    alert("회원가입이 완료 되었습니다.");
                    setIsSignup(false);
                    setIsConfirm(false);
                    setUserInfo({
                        username : '',
                        password : '',
                        repeatPassword : '',
                        phone : '',
                        email : ''
                    })
                }
            }).catch(() => {
                alert("잠시 후 다시 이용해 주세요.");
            })
        }
    }

    const handleLogin = () => {
        axiosApiInstance.post(`/api/login`,{
            username : userInfo.username,
            password : userInfo.password
        }).then((res) => {
            // console.log(res)
            if(res.data.success){
                // console.log(res.data.response)
                dispatch(login({userToken : res.data.response}));
                alert('로그인 완료');
                navigate('/main');
            }
        }).catch(() => {
            if(userInfo.username === '' || userInfo.password === '') {
                alert('입력하지 않은 정보가 있습니다.');
            }else{
                alert('아이디 혹은 비밀번호가 틀렸습니다.');
            }
        });
    }

    console.log('중복유저 : ',confirmUsername);
    console.log('유저 : ',userInfo.username);
    console.log(confirmUsername === userInfo.username)

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
                            <input placeholder={"Nickname"} onChange={userInfoHandler('username')} value={userInfo.username} />
                            <button onClick={handleConfirmUsername}>Confirm</button>
                        </div>
                        <input placeholder={"Phone Number"} onChange={userInfoHandler('phone')} value={userInfo.phone} />
                        <input placeholder={"Email Address"} onChange={userInfoHandler('email')} value={userInfo.email} />
                        <div id={"passwordWrap"}>
                            <input type={"password"} placeholder={"Password"} onChange={userInfoHandler('password')} value={userInfo.password} />
                            <input type={"password"} placeholder={"Repeat Password"} onChange={userInfoHandler('repeatPassword')} value={userInfo.repeatPassword} />
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