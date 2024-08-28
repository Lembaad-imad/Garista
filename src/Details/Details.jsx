import React from "react";
import BottomNav from "../layout/BottomNav";

const Details = () => {
  return (
    <div className=" h-screen w-full bg-white">
      <div className="relative">
        <div className="bg-[#f5f5f5] h-[300px] flex items-center justify-center">
          <img
            src="images/infoimage.svg"
            className="w-full h-full object-cover "
            alt="Restaurant"
          />
        </div>

        <div className="absolute -bottom-16 mb-12 z-10  right-6 w-16  rounded-tl-xl rounded-br-xl shadow-lg bg-red-600 text-white px-4 py-2  text-lg font-bold">
          <p className="text-center">4.8</p>
        </div>
      </div>

      <div className=" bg-white h-[650px] relative  p-6">
        <div className="w-full flex justify-between">
          <p className="font-sans text-2xl font-bold">Garista Restaurant</p>
        </div>

        <div className="mt-4">
          <p className="text-lg text-gray-600">
            BD zektouni 233 Maarif, Casablanca
          </p>
          <div className="flex justify-between mt-4">
            <div className="flex gap-1">
              <img src="images/phone.svg" />
              <p className="text-lg text-gray-600 text-nowrap">
                +212 500 000 000
              </p>
            </div>
            <div className="flex gap-1">
              <img src="images/clockp.svg" />
              <p className="text-lg text-gray-600">10AM-11PM</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-base text-gray-500">
            Lorem ipsum dolor sit amet consectetur. Porttitor vel id volutpat
            senectus leo. Ac curabitur eget sed sapien enim ante ut amet. Magna
            tellus purus id risus sit placerat augue magnis ac.
          </p>
        </div>

        <div className="mt-6  bg-gray-100 p-4 rounded-xl flex flex-col justify-between ">
          <div className="flex ">
            <img src="images/wifia.svg" />
            <p className="text-lg font-bold">WiFi Password</p>
          </div>
          <div className="flex justify-between mt-4">
            <p className="text-lg font-bold text-gray-700 ml-2">Lecoinrelax</p>
            <img src="images/copy.svg" />
          </div>
        </div>

        <div className="mt-6 flex flex-col  justify-between ">
          <p className="text-xl font-bold">Follow Us :</p>
          <div className="flex mt-3  w-full justify-between">
            <div className="flex flex-col items-center">
            <img
              src="images/fb.svg"
              alt="Facebook"
              className="w-9 h-9"
            />
            <p className="text-sm font-bold">Facebook</p>
            </div>
            <div className="flex flex-col items-center">
            <img
              src="images/insta.svg"
              alt="Instagram"
             className="w-9 h-9"
            />
            <p className="text-sm font-bold">Instagram</p>
            </div>
            <div className="flex flex-col items-center">
            <img
              src="images/tiktok.svg"
              alt="Tiktok"
              className="w-9 h-9"
            />
            <p className="text-sm font-bold">Tiktok</p>
            </div>
            <div className="flex flex-col items-center">
            <img
              src="images/snap.svg"
              alt="Snapchat"
              className="w-9 h-9"
            />
            <p className="text-sm font-bold">Snapchat</p>
            </div>
            <div className="flex flex-col items-center">
            <img
              src="images/youtube.svg"
              alt="Youtube"
               className="w-9 h-9"
            />
            <p className="text-sm font-bold">Youtube</p>
            </div>
           
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Details;
