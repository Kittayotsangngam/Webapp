import { Cardbox } from "./components/Cardbox";

function App() {
  const foodlst =[
  {
    foodtype: "อาหารคาว",
    name: "ส้มตำ",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quae maxime sunt mollitia natus pariatur molestiae eligendi et corporis rem quo labore odit obcaecati dicta nihil cum, doloremque impedit porro consequuntur voluptatibus quam reprehenderit accusamus in tempora? Error sit maiores facere dignissimos totam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quae maxime sunt mollitia natus pariatur molestiae eligendi et corporis rem quo labore odit obcaecati dicta nihil cum, doloremque impedit porro consequuntur",
    img: "https://cdn.pixabay.com/photo/2015/04/07/07/51/papaya-salad-710613__480.jpg"
  },
  {
    foodtype: "อาหารหวาน",
    name: "ชาเขียว",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quae maxime sunt mollitia natus pariatur molestiae eligendi et corporis rem quo labore odit obcaecati dicta nihil cum, doloremque impedit porro consequuntur voluptatibus quam reprehenderit accusamus in tempora? Error sit maiores facere dignissimos totam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quae maxime sunt mollitia natus pariatur molestiae eligendi et corporis rem quo labore odit obcaecati dicta nihil cum, doloremque impedit porro consequuntur",
    img: "https://www.bluemochatea.com/wp-content/uploads/2019/12/%E0%B8%8A%E0%B8%B2%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B8%9F%E0%B8%AD%E0%B8%87%E0%B8%99%E0%B8%A1.jpg"
  }
]
  return (
    <div className='bg-gray-500 p-10'>
      <div className="flex flex-col items-center w-[60%] mx-auto">
        <div className="text-4xl font-black my-8 text-yellow-400">
          <h1>โหวตอาหาร</h1>
        </div>
        <div className="w-full">
          {
            foodlst.map((e,k)=>{
              return(
                <Cardbox foodtype={e.foodtype} name={e.name} info={e.info} img={e.img}/>
              )
            })
          }
        </div>
      </div>

    </div>
  );
}

export default App;
