function Header({ heading, isLogin }) {
  return (
    <div className="flex flex-col items-center justify-center bg-teal-700 h-1/5">
      <p className="text-white text-3xl font-bold text-center font-custom">
        {heading}
      </p>
      <p className="text-white text-lg  text-center mt-4 tracking-wider">
        {isLogin && "Sign in to continue"}
      </p>
    </div>
  );
}

export default Header;
