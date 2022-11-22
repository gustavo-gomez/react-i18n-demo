import logo from './logo.svg';
import './App.css';
import {useTranslation, Trans} from "react-i18next";
import {useState} from "react";

const author = {
  name: 'Gustavo',
  lastName: 'Gomez'
};

const lngs = {
  en: {nativeName: 'English'},
  es: {nativeName: 'Español'},
}

function App() {

  const {t, i18n} = useTranslation();
  const [count, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        {t('name', {author})}
        <p>
          <Trans i18nKey="description.part1">
            sadfasdfsdfsdf <strong>123</strong> ksdgfaksdfgaskdg
          </Trans>
        </p>

        {t('formatCurrency', {val: 1000, author})}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('description.part2')}
        </a>
        { i18n.resolvedLanguage}
        <div>
          {Object.keys(lngs).map((lng) => (
            <button
              key={lng}
              style={{fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal'}}
              type="submit"
              onClick={() => {
                i18n.changeLanguage(lng)
                setCounter(count + 1);
              }}>
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>

        <p>
          <i>{t('counter', {count})}</i>
        </p>

        {t('description.part3', 'default text')}
        <br/>
        {t('testingdev', '123')}
      </header>


    </div>
  );
}

export default App;
