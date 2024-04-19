import useUserInfo from '../../store/useUserInfo';

const New = () => {
  const { user } = useUserInfo((state: any) => state);

  return (
    <div className="m-auto w-[90%] md:w-[30%]">
      <p className="text-center text-sm mb-2">SAAS</p>
      <p className="text-center text-sm mb-3">구매</p>
      {Object.keys(user).map((key, idx) => {
        return (
          <div key={idx}>
            <p className="text-center text-sm mb-3">
              {key}: {user[key]}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default New;
