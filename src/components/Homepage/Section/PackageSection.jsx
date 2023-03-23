import React, { useState } from "react";
import CheckPackage from "../../../assets/check-kotak.svg";
import CheckBenefit from "../../../assets/checklist.svg";
import "../../../index.css";
import { listPackage } from "../../../ListPackage";
import {AiTwotoneLeftCircle} from 'react-icons/ai'

const PackageSection = ({ matches }) => {
  // const [active, setActive] = useState(0)
  // const [currentIndex, setCurrentIndex] = useState(0)

  // const 
  return (
    <div className="mt-40" id="package">
      {matches ? (
        <div></div>
      ) : (
        <div className=" flex space-x-8 bg-package p-10">
          <div className="text-white">
            <h4 className="text-[24px] font-bold">
              Pilihan Paket Terbaik Kami
            </h4>
            <p className="font-semibold mt-3">Semua sudah termasuk:</p>
            <ul className="mt-2 space-y-3">
              <li className="flex items-center space-x-2">
                <img src={CheckBenefit} alt="checklist" />
                <p>Guru berpengalaman</p>
              </li>
              <li className="flex space-x-3">
                <img src={CheckBenefit} alt="checklist" />
                <p>
                  Durasi belajar <span className="font-bold">90 menit</span>
                </p>
              </li>
              <li className="flex space-x-3">
                <img src={CheckBenefit} alt="checklist" />
                <p>Biaya terjangkau dengan privat kelompok (2-5 orang)</p>
              </li>
            </ul>
          </div>
          {/* Package Section */}
          <div className="w-[60vw]">
          <div className="grid grid-flow-col-dense gap-5 overflow-x-scroll scrollbar-hide">
            {listPackage.map((val, idx) => (
              <div
                key={idx}
                className="bg-white p-3 w-[20vw] rounded-xl space-y-3 h-[50vh] relative"
              >
                <h4 className="font-bold text-[20px]">{val.title}</h4>
                <p className="text-[14px] text-gray-500 w-[70%]">
                  {val.subtitle}
                </p>
                <p className="text-[18px] text-red-500 font-semibold">
                  {val.price}
                </p>
                <div className="border-[1px] border-dashed border-gray-200 w-full " />
                <div className="space-y-2">
                  {val.class?.map((val, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <img src={CheckPackage} alt="" className="w-5" />
                      <p>{val}</p>
                    </div>
                  ))}
                </div>
                <button className="bg-[#F59300] py-2.5 rounded-full w-[18vw] absolute bottom-5 text-white shadow-lg px-5">
                  Pesan Sekarang
                </button>
              </div>
            ))}
          </div>

          {/* Button Slider */}
          {/* <div className="flex space-x-1.5 mt-5 cursor-pointer">
            {
              listPackage.map((slide, slideIndex) => (
                <div key={slideIndex}>
                    <AiTwotoneLeftCircle className="text-gray-200 text-[12px]"/>
                </div>  
              ))
            }
          </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default PackageSection;
