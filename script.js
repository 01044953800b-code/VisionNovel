document.getElementById('generateBtn').addEventListener('click', function() {
    const experience = document.getElementById('userExperience').value.trim();

    if (experience.length < 5) {
        alert('조금 더 자세한 경험을 적어주세요!');
        return;
    }

    // 결과 섹션 보여주기
    document.getElementById('resultSection').classList.remove('hidden');
    
    // 기승전결 로직 (학생의 입력을 바탕으로 문장을 재구성)
    const plots = {
        ki: `평범한 일상 속에서 '${experience}'(이)라는 사건이 다가오기 전의 고요한 풍경을 묘사하며 이야기를 시작해보자.`,
        seung: `사건이 본격적으로 일어나며 느꼈던 당혹감과 슬픔을 주인공의 행동(눈물, 한숨, 방황 등)을 통해 구체적으로 보여주자.`,
        jeon: `슬픔의 정점에서 예상치 못한 위로를 받거나, 스스로 마음을 다잡게 되는 작은 계기(누군가의 한마디, 우연히 본 풍경 등)를 만들어보자.`,
        gyeol: `그 경험을 통해 한 뼘 더 성장한 주인공의 모습을 그리며, 슬픔을 마음 한구석에 소중한 조각으로 남기는 법을 배우며 마무리하자.`
    };

    // 화면에 텍스트 주입
    document.getElementById('part1').innerText = plots.ki;
    document.getElementById('part2').innerText = plots.seung;
    document.getElementById('part3').innerText = plots.jeon;
    document.getElementById('part4').innerText = plots.gyeol;

    // 결과창으로 스크롤 이동
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});
