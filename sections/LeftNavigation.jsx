const LeftNavigation = () => {
  return (
    <div className="flex flex-col bg-white w-full h-[90vh] justify-between items-center p-4 rounded-2xl">
      <div>Hand</div>
      <div>
        <ul className="flex flex-col gap-6">
          <li className="circular">home</li>
          <li className="circular">icon</li>
          <li className="circular">icon</li>
          <li className="circular">icon</li>
          <li className="circular">icon</li>
          <li className="circular">icon</li>
          <li className="circular">icon</li>
        </ul>
      </div>
      <div>Support</div>
    </div>
  );
};

export default LeftNavigation;
