import ProfileCard from "./ProfileCard"

const Collection = () => {
  const data = [
  {
    id: "1",
    bgImage: "/assets/girl_with_headphone_image.png",
    title: "Headphone",
    description: "High-quality over-ear headphones",
    price: "$199"
  },
  {
    id: "2",
    bgImage: "/assets/girl_with_earphone_image.png",
    title: "Earphone",
    description: "Premium wireless earphones",
    price: "$149"
  },
  {
    id: "3",
    bgImage: "/assets/boy_with_laptop_image.png",
    title: "Laptop",
    description: "High-performance gaming laptop",
    price: "$59"
  }
];


  return (
    <div>
        <div className="flex justify-center mb-14">
            <h1 className="text-3xl  border-b-4 border-b-sky-800 pb-2">Featured   Products</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-[20px]">
      {data.map(item => (
        <ProfileCard 
          key={item.id} 
          title={item.title} 
          description={item.description} 
          price={item.price} 
          bgImage={item.bgImage}
        />
      ))}
    </div>
    </div>
  )
}

export default Collection
