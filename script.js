document.getElementById('generateBtn').addEventListener('click', function() {
    // 입력값 가져오기
    const exp = document.getElementById('experience').value;
    const con = document.getElementById('conflictType').value;
    const sol = document.getElementById('solution').value;
    const cha = document.getElementById('character').value;
    const msg = document.getElementById('message').value;

    if (!exp || !sol || !cha || !msg) {
        alert('모든 항목을 입력해야 멋진 소설이 완성됩니다!');
        return;
    }

    // 결과 표시
    document.getElementById('resultSection').classList.remove('hidden');
    document.getElementById('resMessage').innerText = msg;
    document.getElementById('resChar').innerText = cha;

    // 스토리 뼈대 생성
    document.getElementById('part1').innerText = 
        `${cha} 성격을 가진 주인공의 평범한 일상을 보여주세요. 그러다 '${exp}'라는 사건이 그림자처럼 찾아오며 이야기가 시작됩니다.`;

    document.getElementById('part2').innerText = 
        `사건으로 인해 주인공은 '${con}' 상황에 놓입니다. 마음속이 복잡해지거나 타인과 부딪히며 갈등은 점점 깊어지고, 슬픔은 최고조에 달합니다.`;

    document.getElementById('part3').innerText = 
        `갈등의 절정에서 주인공은 '${sol}'(이)라는 결단을 내리거나 계기를 맞이합니다. 이 과정에서 주인공의 성격이 변화하거나 숨겨진 용기가 드러나게 해보세요.`;

    document.getElementById('part4').innerText = 
        `결국 갈등이 해소되고, 주인공은 '${msg}'라는 깨달음을 얻습니다. 슬픔이 지나간 자리에 남은 성숙함을 묘사하며 긴 여운과 함께 마칩니다.`;

    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});
