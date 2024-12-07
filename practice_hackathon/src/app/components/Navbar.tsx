import Image from "next/image"
import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font bg-white">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

            <span className="ml-3 text-2xl font-inter">Exclusive</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-black hover:underline text-xl text-black font-poppins "  href='/homePage'>Home</Link>
            <a className="mr-5 hover:text-black hover:underline text-xl text-black font-poppins ">Contact</a>
            <a className="mr-5 hover:text-black hover:underline text-xl text-black font-poppins ">About</a>
            <a className="mr-5 hover:text-black hover:underline text-xl text-black font-poppins ">Sign Up</a>
          </nav>


          <div className="bg-searchBgColor text-gray-400 flex justify-between p-2 rounded border0 w-80 max-w-md">


            <span className="text-gray-500">What are you looking for?</span>
            <Image
              src='/search-icon.png'
              alt="Search"
              width={24}
              height={24}
              className="mr-2"
            />
          </div>

          <Image
            src='/fav-icon.png'
            alt="Fav"
            width={24}
            height={24}
            className="mr-2 to-black mx-4"
          />

          <Image
            src='/cart-icon.png'
            alt="Fav"
            width={30}
            height={30}
            className="mr-2 to-black mx-2"
          />


        </div>
      </header>
      <hr/>
    </div>
  )
}

export default Navbar
