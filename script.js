document.getElementById('generateBtn').addEventListener('click', function() {
    const exp = document.getElementById('experience').value;
    const con = document.getElementById('conflictType').value;
    const sol = document.getElementById('solution').value;
    const cha = document.getElementById('character').value;
    const msg = document.getElementById('message').value;

    if (!exp || !sol || !cha || !msg) {
        alert('모든 항목을 입력해 주세요!');
        return;
    }

    document.getElementById('resultSection').classList.remove('hidden');
    document.getElementById('part1').innerText = `${cha} 성격의 주인공이 '${exp}'라는 사건을 겪으며 이야기가 시작됩니다.`;
    document.getElementById('part2').innerText = `사건 이후 주인공은 '${con}' 상황에 빠져 괴로워하며 갈등이 깊어집니다.`;
    document.getElementById('part3').innerText = `하지만 주인공은 '${sol}'(이)라는 행동을 통해 갈등을 극복할 실마리를 찾습니다.`;
    document.getElementById('part4').innerText = `결국 주인공은 고난을 이겨내고 '${msg}'라는 소중한 교훈을 얻으며 성장합니다.`;
});
