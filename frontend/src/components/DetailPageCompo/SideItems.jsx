export default function SideItems() {
    const products = [
      {
        name: "Men Blazers Sets Elegant Formal",
        price: "$7.00 - $99.50",
        img: "/Image/cloth/1.jpg",
      },
      {
        name: "Men Shirt Sleeve Polo Contrast",
        price: "$7.00 - $99.50",
        img: "/Image/cloth/2.jpg",
      },
      {
        name: "Apple Watch Series Space Gray",
        price: "$7.00 - $99.50",
        img: "/Image/cloth/3.jpg",
      },
      {
        name: "Basketball Crew Socks Long Stuff",
        price: "$7.00 - $99.50",
        img: "/Image/cloth/4.jpg",
      },
      {
        name: "New Summer Men's castrol T-Shirts",
        price: "$7.00 - $99.50",
        img: "/Image/cloth/5.jpg",
      },
    ];
      
  return (
    <div className="hidden md:flex w-full max-w-[280px] h-fit container border border-gray-300 rounded bg-base-100 p-4 flex-col gap-3">
      <div>
        <h1 className="font-semibold">You may like</h1>
      </div>
      <div className="w-full h-auto flex flex-col gap-3">
        {products.map((itm,i)=>(
        <div key={i} className="flex gap-2 cursor-pointer">
          <div className="max-w-[80px] max-h-[80px] border border-gray-300 rounded">
            <img className="object-cover" src={itm.img} alt={itm.name} />
          </div>
          <div>
            <h1 className="font-semibold">{itm.name}</h1>
            <p className="text-gray-400">{itm.price}</p>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}
