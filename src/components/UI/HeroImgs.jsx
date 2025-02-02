import code from "../../assets/images/code.png";
import web from "../../assets/images/webi.webp";

const HeroImgs = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 w-full px-6">
      <div className="hidden sm:flex flex-row justify-between items-center max-w-7xl mx-auto">
        {/* Left image moves up first */}
        <img 
          src={code} 
          alt="Code" 
          className="w-16 sm:w-20 md:w-20 lg:w-24 animate-up-down"
        />
        
        {/* Right image moves down first */}
        <img 
          src={web} 
          alt="Web" 
          className="w-16 sm:w-20 md:w-20 lg:w-24 animate-down-up"
        />
      </div>
    </div>
  );
};

export default HeroImgs;
