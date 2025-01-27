
const Button = () => {
  return (
    <button
      className="flex items-center justify-center px-2 py-1 text-white font-[Phantomsans] text-lg bg-gradient-to-tr from-yellow-300 via-yellow-500 to-[black] rounded-3xl shadow-[rgba(151,65,252,0.2)_0_15px_30px_-5px] transition-all duration-300 ease-in-out hover:outline-none active:outline-none"
      role="button"
    >
      <span className="bg-[black] px-2 py-1 rounded-3xl transition-all duration-300 ease-in-out hover:bg-transparent hover:text-black">
        View more 
      </span>
    </button>
  );
};

export default Button;
