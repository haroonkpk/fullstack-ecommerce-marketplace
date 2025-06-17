import React from 'react'

export default function SectionService() {
  const searchIconSvg = [
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.7549 14.255H14.9649L14.6849 13.985C15.6649 12.845 16.2549 11.365 16.2549 9.755C16.2549 6.165 13.3449 3.255 9.75488 3.255C6.16488 3.255 3.25488 6.165 3.25488 9.755C3.25488 13.345 6.16488 16.255 9.75488 16.255C11.3649 16.255 12.8449 15.665 13.9849 14.685L14.2549 14.965V15.755L19.2549 20.745L20.7449 19.255L15.7549 14.255ZM9.75488 14.255C7.26488 14.255 5.25488 12.245 5.25488 9.755C5.25488 7.26501 7.26488 5.255 9.75488 5.255C12.2449 5.255 14.2549 7.26501 14.2549 9.755C14.2549 12.245 12.2449 14.255 9.75488 14.255Z"
        fill="#1C1C1C"
      />
    </svg>,
  ];
  const Icon2Svg = [
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 2H4C3 2 2 2.9 2 4V7.01C2 7.73 2.43 8.35 3 8.7V20C3 21.1 4.1 22 5 22H19C19.9 22 21 21.1 21 20V8.7C21.57 8.35 22 7.73 22 7.01V4C22 2.9 21 2 20 2ZM19 20H5V9H19V20ZM20 7H4V4H20V7Z"
        fill="#1C1C1C"
      />
      <path d="M15 12H9V14H15V12Z" fill="#1C1C1C" />
    </svg>,
  ];
  const Icon3Svg = [
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.51 6.03L11.02 9.25L3.5 8.25L3.51 6.03ZM11.01 14.75L3.5 17.97V15.75L11.01 14.75ZM1.51 3L1.5 10L16.5 12L1.5 14L1.51 21L22.5 12L1.51 3Z"
        fill="#1C1C1C"
      />
    </svg>,
  ];
  const Icon4Svg = [
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z"
        fill="#1C1C1C"
      />
    </svg>,
  ];
    const services = [
      {
        icon: searchIconSvg,
        desc: "Source from Industry Hubs",
        img: "/Image/serveces/1.png",
      },
      {
        icon: Icon2Svg,
        desc: "Customize Your Products",
        img: "/Image/serveces/2.png",
      },
      {
        icon: Icon3Svg,
        desc: "Fast, reliable shipping by ocean or air",
        img: "/Image/serveces/3.png",
      },
      {
        icon: Icon4Svg,
        desc: "Product monitoring and inspection",
        img: "/Image/serveces/4.png",
      },
    ];
  return (
    <div className="w-full max-w-[1180px] space-y-1 mt-7 h-auto mb-5 ">
      <div className="w-full pl-2">
        <h1 className="font-bold">SectionService</h1>
      </div>
      <div className="w-full h-auto flex gap-5 overflow-x-auto">
        {services.map((itm, i) => (
          <div
            key={i}
            className="w-[280px] h-[200px] border border-gray-300 rounded cursor-pointer "
          >
            <div className="w-full h-[120px] flex relative ">
              <img className="object-cover w-full h-full" src={itm.img} alt={itm.desc} />
              <div
                style={{ backgroundColor: "rgba(0, 0, 0, 0.500)" }}
                className="w-full h-[120px] absolute "
              >
                <span className="w-10 h-10 rounded-full bg-[#D1E7FF] absolute bottom-[-17px] right-3 z-20 flex items-center justify-center">
                  {itm.icon}
                </span>
              </div>
            </div>
            <p className="w-[190px] p-3">{itm.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
