import { Link } from "react-router-dom"
import { Droplet } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Droplet className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-800">be.hijama</span>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <a href="#services" className="text-gray-600 hover:text-blue-600">
              Services
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-600 hover:text-blue-600">
              About
            </a>
          </li>
          <li>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

