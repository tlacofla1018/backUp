const selectBox = document.querySelector('.selectBox'); // 셀렉트객체
    const options = selectBox.querySelector('.options'); // 옵셥
    const optionElements = options.querySelectorAll('.option'); // 옵션들
  
   
    function toggleDropdown() {
      options.style.display = options.style.display === 'block' ? 'none' : 'block';
    }
    
    // 클릭 이벤트로 드롭다운 토글
    selectBox.addEventListener('click', (event) => {
      toggleDropdown();
      event.stopPropagation(); // 이벤트 전파 방지
    });