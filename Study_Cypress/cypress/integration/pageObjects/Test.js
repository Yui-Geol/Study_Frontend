function tryJson(text) {
  try {
    return JSON.parse(text);
  } catch (e) {
    return {
      error: {
        message: text
      }
    }
  }
}

async function getJson(res) {
  const text = await res.text();
  const data = tryJson(text);
  if (res.ok) {  
    console.log(data);
    return data;
  }
  else
    throw {
      error: data
    }
}


class Recognition extends EventTarget{
  #language = 'en-US';
  #recorder = null;
  
  #throwError(data) {
    if (data.error != null) {
      const event = new ErrorEvent('error', {
        error: data.error
      })
      this.dispatchEvent(event);
      return true;
    }
    return false;
  }

  #sendData(data) {
    const event = new CustomEvent('result', { detail: data });
    this.dispatchEvent(event);
  }
  
  #speakHandler = async (event) => {
    const res = await fetch(`https://recognition.speakease.co/recognize/en-US`, {
      method: 'POST',
      body: event
    });
  
    const data = await getJson(res);
    if (!this.#throwError(data))
      this.#sendData(data); 
  };
  
  constructor(language, audio) {
    super();
    this.language = language;
    this.#recorder = audio
    this.#speakHandler(audio); 
    
  }

  set language(value) {
    this.#language = value;
  }
  
  set recorder(value) {
    this.#recorder = value;
  }

  get language() { return this.#language };

}

let recognition = null;
function get(lang, wav) {
  if (recognition != null) {
    recognition.language = lang
    recognition.audio = wav
    return recognition;
  }
  return new Recognition(lang, wav);
}


export default {
  get
}
