import { useState, useCallback, useMemo, useEffect } from 'react';
import Button from '../../common/Button';
import { useTranslation } from 'react-i18next';
import i18n from '../../locale/index';
import { getItem, setItem } from '../../utils/localStorage';

const Test = () => {
  const { t } = useTranslation();
  const [incNumber, setIncNumber] = useState<number>(0);
  const [locale, setLocale] = useState<string>(
    getItem<{ locale: string }>('locale')?.locale || 'ko',
  );
  const useRandom = useCallback(() => {
    setIncNumber(incNumber + 1);
  }, [incNumber]);

  useCallback(() => {
    setIncNumber(Math.floor(Math.random() * incNumber));
  }, [incNumber]);

  const incrementedValue = useMemo(() => {
    return incNumber + 1;
  }, [incNumber]);

  // const incrementData = () => {
  //   setData(data + 1);
  // };

  const selectLocale = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocale(e.target.value);
  };

  useEffect(() => {
    i18n.changeLanguage(locale);
    setItem('locale', { locale: locale });
  }, [locale]);

  return (
    <>
      <div>
        <Button text={t(`common.home`)} onClick={useRandom} />
        {/* <Button text={t(`common.home`)} onClick={incrementData} /> */}
      </div>
      <div>result: {incNumber}</div>
      <div>incrementedValue: {incrementedValue}</div>
      <select onChange={selectLocale} value={locale}>
        <option value="ko">ko</option>
        <option value="en">en</option>
        <option value="fr">fr</option>
      </select>
      <div>locale: {locale}</div>
    </>
  );
};

export default Test;
