import { useState, useEffect } from 'react';
import Button from '../Button';
import useUserInfo from '../../store/useUserInfo';
import { useTranslation } from 'react-i18next';
import { useKeycloak } from '@react-keycloak/web';
import i18n from '../../locale/index';
import { getItem, setItem } from '../../utils/localStorage';

const Header = () => {
  const { user } = useUserInfo((state: any) => state);
  const { t } = useTranslation();
  const { keycloak } = useKeycloak();
  const [locale, setLocale] = useState<string>(
    getItem<{ locale: string }>('locale')?.locale || 'ko',
  );

  const login = () => keycloak.login();
  const logout = () => keycloak.logout();

  const selectLocale = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocale(e.target.value);
  };

  useEffect(() => {
    i18n.changeLanguage(locale);
    setItem('locale', { locale: locale });
  }, [locale]);

  return (
    <>
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="md:flex items-center space-x-3 ">
              {Object.keys(user).length > 0 ? (
                <>
                  <div className="flex items-center space-x-3">
                    <p className="text-gray-500 text-sm">
                      안녕하세요, {user.name}님
                    </p>
                    <Button
                      onClick={logout}
                      className="text-sm"
                      text={t('login.logout')}
                    />
                  </div>
                </>
              ) : (
                <>
                  <Button
                    text={t('login.login')}
                    onClick={login}
                    className="text-sm"
                  />
                </>
              )}
            </div>
            <select onChange={selectLocale} value={locale}>
              <option value="ko">ko</option>
              <option value="en">en</option>
              <option value="fr">fr</option>
            </select>
            <div>locale: {locale}</div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
