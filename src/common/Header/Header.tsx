import Button from '../Button';
import useAuthStore from '../../store/useAuthStore';

const Header = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuthStore(
    (state: any) => state,
  );

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="hidden md:flex items-center space-x-3 ">
            {isAuthenticated && (
              <Button
                text="Logout"
                className="py-3 px-3 font-medium text-white text-xs bg-blue-500 rounded hover:bg-blue-400 transition duration-300"
                onClick={() => {
                  setIsAuthenticated(false);
                }}
              />
            )}
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button">
              <svg
                className=" w-6 h-6 text-gray-500 hover:text-blue-500 "
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
