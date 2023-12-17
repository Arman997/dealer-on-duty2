function getLanguages(num) {
    const languageScores = {
        "C#": 1,
        "C++": 2,
        "Java": 4,
        "JavaScript": 8,
        "PHP": 16,
        "Python": 32,
        "Ruby": 64,
        "Swift": 128
    };

    const proficientLanguages = [];
    Object.keys(languageScores).reverse().forEach(language => {
        if (num >= languageScores[language]) {
            proficientLanguages.push(language);
            num -= languageScores[language];
        }
    });

    return proficientLanguages;
}

console.log(getLanguages(53)); 
