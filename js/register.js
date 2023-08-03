const onRegister = () =>{
let userNameInput = document.querySelector('#username');
// userNameInput.value
let emailInput = document.querySelector('#email');
// emailInput.value
let passwordInput = document.querySelector('#password');
// passwordInput.value
let verify_passwordInput = document.querySelector('#verify-password');
// verify_passwordInput.value

// 입력이 들어오는지 확인
// console.log(userNameInput.value);
// console.log(emailInput.value);
// console.log(passwordInput.value);
// console.log(verify_passwordInput.value);

// check에는 true가 입력
let check = true;
// 이름 입력 여부
let userNameErrMsg = document.querySelector('#username-err-msg');
if(userNameInput.value === ''){
    userNameErrMsg.style.display = 'block';
    check = false;
}else{
    userNameErrMsg.style.display = 'none';
}
// 이메일 입력 여부
let emailErrMsg = document.querySelector('#email-err-msg');
if(emailInput.value === ''){
    emailErrMsg.style.display = 'block';
    check = false;
}
else{
    emailErrMsg.style.display = 'none';
}
// 비밀번호 입력 여부
let passwordErrMsg = document.querySelector('#password-err-msg');
if(passwordInput.value === ''){
    passwordErrMsg.style.display = 'block';
    check = false;
}else{
    passwordErrMsg.style.display = 'none';
}
// 비밀번호 확인 입력 여부
let verify_passwordErrMsg = document.querySelector('#verify-password-err-msg');
if(verify_passwordInput.value === ''){
    verify_passwordErrMsg.textContent ='비밀번호 확인은 필수 입력값입니다.'
    verify_passwordErrMsg.style.display = 'block';
    check = false;
}else{
    if(verify_passwordInput.value !== passwordInput.value){
        verify_passwordErrMsg.textContent = '비밀번호에 입력된 값과 다릅니다.';
        verify_passwordErrMsg.style.display ='block';
        check = false;
    }else{
    verify_passwordErrMsg.style.display = 'none';
    }
}
// if 영역으로 한번도 들어간 적이 없다 -> 모든값 정상입력
if(check){
    // 모달 창을 보여줘
    //alert('회원가입이 성공했습니다!');  
    let modalWrapper = document.querySelector('.modal-wrapper');
    modalWrapper.style.display = 'flex';
}
}

const moveTo = () => {
    //console.log('확인')
    //메인화면으로 이동시켜줘
    location.replace('../pages/index.html');
}