function showFrenchPhrase() {
    const phrases = [
        "Bon appétit! — Приятного аппетита!",
        "La cuisine est un art. — Кулинария — это искусство.",
        "C'est délicieux! — Это очень вкусно!",
        "La vie est belle. — Жизнь прекрасна.",
        "Maman est la meilleure. — Мама (или бабушка) самая лучшая."
    ];
    
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    document.getElementById('french-phrase').innerText = randomPhrase;
}
