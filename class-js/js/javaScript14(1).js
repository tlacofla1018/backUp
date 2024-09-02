// 주어 정리
const creatKey = document.querySelector('#creatKey');
const creatKeyBtn = document.querySelector('#creatKeyBtn');
const checkKey = document.querySelector('#checkKey');
const checkKeyBtn = document.querySelector('#checkKeyBtn');
const checkNumberDiv = document.querySelector('.checkNumberDiv');

let randomNumber;
let inputSixNumber;
// undefinded 상태
// 같은 변수를 계속 재선언할 이유도 없고 let은 재선언이 불가능함
// 그래서 밖에다 따로 작성

creatKeyBtn.addEventListener('click', function(){
    randomNumber = randomSixNumber(); // 재할당하는 것
    creatKey.textContent = randomNumber;
    checkNumberDiv.classList.remove('disableMode');
    checkKeyBtn.textContent = '확인';
    checkKey.value = ''; // 체크키의 벨류에 빈값을 대입하겠다
    checkKey.disabled = false;
    checkKeyBtn.disabled = false;
});

checkKeyBtn.addEventListener('click', checkSixNumber);

checkKey.addEventListener('keyup', function(event){
    if(event.key === 'Enter'){
        checkSixNumber();
    }
});
// event -> 이벤트객체. 함수의 매개변수로 전달 (이벤트에 달린 함수의 매개변수)
// 사용자의 특정 동작에 대한 정보를 포함하고 있음. 다양한 이벤트 관련 데이터에 접근 가능함
// 키업한 키값이 엔터와 같다면 체크식스넘버함수를 터뜨려라

function randomSixNumber(){
    return Math.floor(100000 + Math.random() * 900000); // 호출될 때마다 6자리의 랜덤 숫자를 뱉음
    // 리턴은 바로 옆에 있는 것만 쭉 실행 (줄바꿈 금지)
    // Math.floor(100 + Math.random() * 9);
    // 이 식 자체가 1에서 9까지의 랜덤한 정수를 반환할 때 쓰이는 식
    // 혼자 공부하는 것은 말리지 않지만 실무에서도 이해하고 쓰기보다는 그때그때 찾아쓰는 경우가 많음
}

function checkSixNumber(){
    inputSixNumber = document.querySelector('#checkKey').value;
    if(randomNumber == inputSixNumber){
        alert('인증되었습니다');
        checkNumberDiv.classList.add('disableMode');
        checkKeyBtn.textContent = '인증완료';
        checkKey.disabled = true;
        checkKeyBtn.disabled = true;
        // 활성화 비활성화 두가지 경우니까 비활성화일 때의 값을 트루, 활성화일 때를 펄스로 걸어서 조절
    }else{
        alert('인증번호가 틀렸습니다');
    }
}
// 함수로 세팅을 해두면 필요할 때 꺼내서 쓰기 편함

console.log(randomSixNumber());