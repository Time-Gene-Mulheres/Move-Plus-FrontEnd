import { Barbell, Folder, ListPlus, User } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div>
            <div className='w-full flex justify-between items-center px-8 py-4
            bg-[#264653] text-[#e9c46a]'>
            
                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="text-2xl font-bold">
                        Move Plus
                    </Link>

                    <div className='flex gap-4 text-lg'>
                        <Link to='/usuarios'>
                        <button
                        className="cursor-pointer bg-gray-800 relative inline-flex items-center justify-center gap-2 
                        rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none 
                        focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none 
                        disabled:opacity-50 hover:bg-gray-700 text-[#e9c46a] hover:text-gray-300 h-9 rounded-md px-3"
                        >
                        <User size={32} />
                    Usuários
                    </button>

                        </Link>
                        <Link to='/cadastrarcategoria'>
                        <button
    className="cursor-pointer bg-gray-800 relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-700 text-[#e9c46a] hover:text-gray-300 h-9 rounded-md px-3"
  >
    <ListPlus size={32} />
    Cadastrar Categoria
  </button>
                        </Link>
                        <Link to='/cadastrartreinos'>
                        <button
    className="cursor-pointer bg-gray-800 relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-700 text-[#e9c46a] hover:text-gray-300 h-9 rounded-md px-3"
  >
<Barbell size={32} />
    Cadastrar Treino
  </button>
                        </Link>
                        <Link to='/login'>
                        <button
    className="relative inline-flex items-center justify-center gap-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-800 hover:bg-gray-700 text-[#e9c46a] h-9 rounded-md px-3 group"
  >
    <svg
      className="lucide lucide-arrow-left"
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      viewBox="0 0 24 24"
      height="22"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m12 19-7-7 7-7"></path>
      <path d="M19 12H5"></path>
    </svg>
    <span className="origin-left scale-0 transition-transform group-hover:scale-100"
      >Sair</span>
  </button>
                        </Link>
                    </div>
            </div>
            
        </div>
    )
}

export default Navbar