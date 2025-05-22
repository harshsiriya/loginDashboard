import { FiBell, FiMail, FiUser,FiSearch} from "react-icons/fi";
function Navbar(){
    return(
        <div className="flex items-center justify-between p-4">
<div className="hidden md:flex gap-2 items-center justify-center border border-gray-300 rounded-3xl px-3 py-1">
                  <span ><FiSearch/></span> 
                  <input type="text" placeholder="Search..."/>
            </div>
            <div className="flex gap-6 text-xl">
              <span className="cursor-pointer"><FiMail/></span>
              <span  className="cursor-pointer"><FiBell/></span>
               <div className="flex flex-col">
                <span className="text-xs">Pallavi Patil</span>
                <span  className="text-xs">Admin</span>
              </div>
              <span className="cursor-pointer"><FiUser/></span>
             
            </div>
        </div>
    )
}
export default Navbar