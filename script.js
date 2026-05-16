document.getElementById('generateBtn').onclick = function() {
    const exp = document.getElementById('experience').value;
    const con = document.getElementById('conflictType').value;
    const sol = document.getElementById('solution').value;
    const cha = document.getElementById('character').value;
    const msg = document.getElementById('message').value;

    if (!exp || !sol || !cha || !msg) {
        alert('모든 항목을 입력해 주세요!');
        return;
    }

    document.getElementById('resultSection').style.display = 'block';
    
    document.getElementById('part1').innerText = cha + " 성격의 주인공이 '" + exp + "'라는 일을 겪으며 이야기가 시작됩니다.";
    document.getElementById('part2').innerText = "주인공은 이로 인해 '" + con + "' 상황에 처하며 갈등이 깊어집니다.";
    document.getElementById('part3').innerText = "이때 주인공은 '" + sol + "'(이)라는 방법으로 문제를 해결하려 노력합니다.";
    document.getElementById('part4').innerText = "결국 주인공은 '" + msg + "'라는 점을 깨달으며 소설이 마무리됩니다.";
};
