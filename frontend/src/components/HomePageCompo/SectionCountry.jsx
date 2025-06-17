import React from 'react'

export default function SectionCountry() {
    const countrys = [
      {
        desc: "shopname.ae",
        name: "Arab Emirates",
        img: "/Image/flags/Property 1=AE.png",
      },
      {
        desc: "shopname.ae",
        name: "Italy",
        img: "/Image/flags/Property 1=IT.png",
      },
      {
        desc: "shopname.ae",
        name: "Australia",
        img: "/Image/flags/Property 1=AU.png",
      },
      {
        desc: "shopname.ae",
        name: "China",
        img: "/Image/flags/Property 1=CN.png",
      },
      {
        desc: "shopname.ae",
        name: "Denmark",
        img: "/Image/flags/Property 1=DK.png",
      },
      {
        desc: "shopname.ae",
        name: "France",
        img: "/Image/flags/Property 1=FR.png",
      },
      {
        desc: "shopname.ae",
        name: "China",
        img: "/Image/flags/Property 1=CN.png",
      },
      {
        desc: "shopname.ae",
        name: "Italy",
        img: "/Image/flags/Property 1=IT.png",
      },
      {
        desc: "shopname.ae",
        name: "Russia",
        img: "/Image/flags/Property 1=RU.png",
      },
      {
        desc: "shopname.ae",
        name: "United States",
        img: "/Image/flags/Property 1=US.png",
      },
    ];
  return (
    <div className="w-full max-w-[1180px] h-auto mb-6 ">
      <div className="w-full font-bold py-3">
        <h1>Suppliers by region</h1>
      </div>
      <div className="w-full h-auto flex overflow-x-auto md:grid md:grid-cols-5 md:grid-rows-2 gap-5">
        {countrys.map((itm, i) => (
          <div key={i} className="flex gap-3">
            <div className="w-9 h-9 overflow-hidden">
              <img className="object-fill" src={itm.img} alt="" />
            </div>
            <div className="leading-tight">
              <p className='text-black'>{itm.name}</p>
              <p className="text-[13px] text-gray-500">{itm.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
