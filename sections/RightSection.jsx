const RightSection = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-end h-16">Icon</div>
      <div className="flex flex-col items-center bg-white h-[80vh] rounded-2xl py-4 px-2 gap-3">
        <h3>Settings</h3>

        <div className="flex flex-col gap-2">
          <div className="set">
            <div className="circular">icon</div>
            <p>Language Settings</p>
          </div>
          <div className="set">
            <div className="circular">icon</div>
            <p>General Settings</p>
          </div>
          <div className="set">
            <div className="circular">icon</div>
            <p>Font Settings</p>
          </div>
          <div className="set">
            <div className="circular">icon</div>
            <p>Appearance Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
