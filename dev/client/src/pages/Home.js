import './Home.css';
import React, {useState, useEffect} from 'react';
import axios from "axios";


import Header from '../components/Header';
import EndScreen from '../components/EndScreen';
import { TextContext } from '../TextContext';

function Home() {
  const [hasText, setHasText] = useState(false);
  const [textInfo, setTextInfo] = useState(false);

  const getWiseWords = async () => {
    // fetching from api here
    await axios.get('http://localhost:3001/api/getWords')
      .then((res)=>{
        let {wiseWords, author, title} = res['data']
        // console.log(res['data'])
        setTextInfo({wiseWords, author, title});

        return res['data'];
    });
  }

  useEffect(() => {
    if (hasText)
      getWiseWords();
  }, [hasText]);


  useEffect(()=> {
    setHasText(true);
  }, [])

  let allHeaders = [];
  let accumDelay = 0;
  if (textInfo !== false) {
    for (let i=0; i<textInfo.wiseWords.length; i++) {
      let animDur = (textInfo.wiseWords[i].length<20) ? 2 : textInfo.wiseWords[i].length/10;
      allHeaders.push(<Header text={textInfo.wiseWords[i]} dur={animDur} delay={accumDelay} key={i} />);
      accumDelay += animDur;
    }
  }
  
  useEffect(()=> {
    if (hasText && textInfo)
    {
      setTimeout(()=>{
        setHasText(false);
      }, accumDelay*1000);
    }
  }, [textInfo]);

  return (
    <div className="Home fill-content">

      <div style={{whiteSpace: "pre-wrap"}}>
        {(hasText) ? allHeaders : ''}
      </div>

      <TextContext.Provider value={{setHasText, textInfo}}>
        {(!hasText) ? <EndScreen />: ''}
      </TextContext.Provider>

    </div>
  );

}

export default Home;
