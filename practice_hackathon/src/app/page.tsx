import Image from "next/image"

export default function Home() {

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden bg-white">
      <div className="px-14 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6  flex flex-col border-r border-gray-300 py-8">
                <div className="flex w-64 h-10 my-1">
                  <p className=" text-xl text-black font-poppins px-2">Woman’s Fashion</p>
                  <Image
                    src='/arrow.png'
                    alt="Search"
                    width={15}
                    height={1}
                    className="my-2 mx-2 h-3 w-3"
                  />
                </div>
                <div className="flex w-64 h-10 my-1">
                  <p className=" text-xl text-black font-poppins px-2">Men’s Fashion</p>
                  <Image
                    src='/arrow.png'
                    alt="Search"
                    width={15}
                    height={1}
                    className="my-2 mx-11 h-3 w-3"
                  />
                </div>
                <p className="w-64 h-10  text-xl my-1 text-black font-poppins px-2">Electronics</p>
                <p className="w-64 h-10  text-xl my-1 text-black font-poppins px-2">Home & Lifestyle</p>
                <p className="w-64 h-10  text-xl my-1 text-black font-poppins px-2">Medicine</p>
                <p className="w-64 h-10  text-xl my-1 text-black font-poppins px-2">Sports & Outdoor</p>
                <p className="w-64 h-10  text-xl my-1 text-black font-poppins px-2">Baby’s & Toys</p>
                <p className="w-64 h-10  text-xl my-1 text-black font-poppins px-2">Groceries & Pets</p>
                <p className="w-64 h-10  text-xl my-1 text-black font-poppins px-2">Health & Beauty</p>


              </div>
              <div className="my-10 mx-10">
              <Image
              src='/hero_section.png'
              alt="Search"
              width={1000}
              height={300}
              className="h-full"            />
                {/* <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
                <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a> */}
              </div>
            </div>
      </section>
    </div>
  );
}
