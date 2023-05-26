function translateText(text, sourceLang, targetLang, callback) {
    const url = `https://translation.googleapis.com/language/translate/v2?key=AIzaSyDm11QeQH2Kxcr4NxhNi_QBNUpIOlQO4Cc&q=${encodeURIComponent(text)}&source=${sourceLang}&target=${targetLang}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data && data.data && data.data.translations && data.data.translations.length > 0) {
           callback(null, data.data.translations[0].translatedText);
        } else {
           callback('error al traducir texto');
        }
      })
      .catch(error => {
        callback(`Error: ${error.message}`);
      });
  }
  