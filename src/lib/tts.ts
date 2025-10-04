export const speakKorean = (text: string): void => {
  if (typeof window === 'undefined' || !window.speechSynthesis) {
    console.warn('Speech synthesis not supported');
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ko-KR';
  utterance.rate = 0.9;
  utterance.pitch = 0.7;
  utterance.volume = 1.0;

  const getKoreanVoice = () => {
    const voices = window.speechSynthesis.getVoices();

    const maleKeywords = ['male', 'man', 'boy', '남성', '남자', 'hyeonwoo', 'minsu', 'junho', 'seungho'];
    const femaleKeywords = ['female', 'woman', 'girl', '여성', '여자', 'sora', 'yuna', 'jiyoung', 'heami', 'suyeong'];

    const koreanVoices = voices.filter(voice => voice.lang.startsWith('ko'));

    const explicitMaleVoice = koreanVoices.find((voice) => {
      const nameLower = voice.name.toLowerCase();
      return maleKeywords.some(keyword => nameLower.includes(keyword));
    });

    if (explicitMaleVoice) return explicitMaleVoice;

    const nonFemaleKoreanVoice = koreanVoices.find((voice) => {
      const nameLower = voice.name.toLowerCase();
      const voiceNameFull = (voice.voiceURI || '').toLowerCase();
      const isFemale = femaleKeywords.some(keyword =>
        nameLower.includes(keyword) || voiceNameFull.includes(keyword)
      );
      return !isFemale;
    });

    if (nonFemaleKoreanVoice) return nonFemaleKoreanVoice;

    return koreanVoices[0] || voices[0];
  };

  if (window.speechSynthesis.getVoices().length === 0) {
    window.speechSynthesis.onvoiceschanged = () => {
      const voice = getKoreanVoice();
      if (voice) utterance.voice = voice;
      window.speechSynthesis.speak(utterance);
    };
  } else {
    const voice = getKoreanVoice();
    if (voice) utterance.voice = voice;
    window.speechSynthesis.speak(utterance);
  }
};

export const stopSpeaking = (): void => {
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
};

export const isSpeaking = (): boolean => {
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    return window.speechSynthesis.speaking;
  }
  return false;
};
