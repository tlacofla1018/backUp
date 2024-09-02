let randomNumber;
let inputSixNumber;

$('#creatKeyBtn').on('click', function(){
    randomNumber = randomSixNumber();
    $('#creatKey').text(randomNumber);
    $('.checkNumberDiv').removeClass('disableMode');
    $('#checkKeyBtn').text('확인').prop('disabled', false);
    $('#checkKey').val('').prop('disabled', false);
    // 모든 메써드는 값을 넣으면 주어의 값으로 들어가는 것
    // 특정 매써드들만 값을 가져올 수 있음
    // 값을 비워두면 상태가 어떠냐고 물어보는 것
    // 값을 비워두고 변수를 선언하면 해당 주어의 값을 가져와서 변수에 집어넣는 것
    // 상태를 서술해주지 않으면 값을 가져오기만 하는 것
    // 주어가 같으면 매써드체인으로 한방에 해결할 수 있음
});

$('#checkKeyBtn').on('click', checkSixNumber);

$('#checkKey').on('keyup', function(event){
    if(event.key === 'Enter'){
        checkSixNumber();
    }
});


function randomSixNumber(){
    return Math.floor(100000 + Math.random() * 900000);
}

function checkSixNumber(){
    inputSixNumber = $('#checkKey').val();
    if(randomNumber == inputSixNumber){
        alert('인증되었습니다');
        $('.checkNumberDiv').addClass('disableMode');
        $('#checkKeyBtn').text('인증완료').prop('disabled', true);
        $('#checkKey').prop('disabled', true);
    }else{
        alert('인증번호가 틀렸습니다');
    }
}