import React from "react";
import { image1, facebook, insta, linkdin, twitter } from "../../images/Index";

const Foot = () => {
  return (
    <>
      <div className="h-[200px] w-[500px]   mx-10  text-left md:flex md:w-full md:mt-5">
        <div className="space-y-5 pb-5 flex-row md:w-1/3">
          <div className="flex flex-row items-center">
            <img src={image1} alt="" />
            <div className="font-bold text-xl">House Linkup</div>
          </div>
          <div className="font-semibold">
            Properties to rent. Find rental property listed directly from
            private landlords and letting agents from all over.
          </div>
          <div className="flex flex-row space-x-3">
            <button>
              <img src={facebook} alt="" />
            </button>
            <button>
              <img src={linkdin} alt="" />
            </button>
            <button>
              <img src={insta} alt="" />
            </button>
            <button>
              <img src={twitter} alt="" />
            </button>
          </div>
        </div>
        <div className="h-[200px] flex flex-row text-center  md:w-1/2">
          <div className="w-1/3  flex flex-col space-y-4">
            <div className="font-bold text-xl">Resources</div>
            <button>Feature</button>
            <button>pricing</button>
            <button>Login</button>
            <button>Signup</button>
          </div>
          <div className="w-1/3  flex flex-col space-y-4">
            <div className="font-bold text-xl">Legal</div>
            <button>Terms of use </button>
            <button>Privacy policy</button>
            <button>Legal notice</button>
          </div>
          <div className="w-1/3  flex flex-col space-y-4 ">
            <div className="font-bold text-xl"> Links</div>
            <button>Feedback</button>
            <button>Agent</button>
            <button>About us</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Foot;
