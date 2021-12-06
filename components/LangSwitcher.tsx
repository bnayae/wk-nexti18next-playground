// import App from 'next/app'

import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useTranslation } from 'react-i18next';

const languages = {
  en: { nativeName: 'English' },
  he: { nativeName: 'Hebrew' },
  zh: { nativeName: 'Chinese' },
};

export const LangSwitcher = () => {
  const router = useRouter();
  const { t, i18n, ready } = useTranslation('components.lang');

  const handleChange = (lng: string) => {
    // i18n.changeLanguage(lng);
    router.push('/', '/', { locale: lng });
  };

  if (!ready) return <></>;

  return (
    <div>
      <header className="App-header">
        <Link href="/" locale={router.locale === 'en' ? 'he' : 'en'}>
          <button
            onClick={() => handleChange(router.locale === 'en' ? 'he' : 'en')}
          >
            {t('change-locale')}
          </button>
        </Link>
        <select
          name="language-picker-select"
          onChange={(e) => handleChange(e.target?.value)}
          value={i18n.resolvedLanguage}
        >
          {Object.keys(languages).map((lng) => (
            <option lang={lng} value={lng}>
              {languages[lng].nativeName}
            </option>
          ))}
        </select>
        <div>
          {Object.keys(languages).map((lng) => (
            <button
              key={lng}
              style={{
                fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal',
              }}
              type="submit"
              onClick={() => handleChange(lng)}
            >
              {languages[lng].nativeName}
            </button>
          ))}
        </div>
      </header>
    </div>
  );
};
