import { useState, useCallback, useMemo } from 'react';
import Button from '../../common/Button';
import { useTranslation } from 'react-i18next';
import useUserInfo from '../../store/useUserInfo';
import { Link, useNavigate } from 'react-router-dom';
const BtnGrp = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center space-x-4">
      <Link to="/new">LINK</Link>
      <Button text="Contact" onClick={() => navigate('/new')} />
    </div>
  );
};

const Test = () => {
  const { t } = useTranslation();
  const [incNumber, setIncNumber] = useState<number>(0);
  const { user } = useUserInfo((state: any) => state);
  const [show, setShow] = useState<boolean>(false);

  const useRandom = useCallback(() => {
    setIncNumber(incNumber + 1);
  }, [incNumber]);

  useCallback(() => {
    setIncNumber(Math.floor(Math.random() * incNumber));
  }, [incNumber]);

  const incrementedValue = useMemo(() => {
    return incNumber + 1;
  }, [incNumber]);

  return (
    <>
      <BtnGrp />
      <hr />
      <div>
        <Button
          text={
            !show
              ? t('test.getUserInfo')
              : t('test.userInfo', { name: user.name })
          }
          onClick={() => setShow(!show)}
        />
        <div>
          {show &&
            Object.keys(user).map((key, idx) => {
              return (
                <div key={idx}>
                  {key}: {user[key]}
                </div>
              );
            })}
        </div>

        <Button text={t(`common.home`)} onClick={useRandom} />
        {/* <Button text={t(`common.home`)} onClick={incrementData} /> */}
      </div>
      <div>result: {incNumber}</div>
      <div>incrementedValue: {incrementedValue}</div>
      <hr />
    </>
  );
};

export default Test;
