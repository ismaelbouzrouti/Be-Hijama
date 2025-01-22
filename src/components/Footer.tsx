import { SocialIcon } from "react-social-icons"


export default function Footer() {

    const currentYear = new Date().getFullYear().toString();
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {currentYear} be.hijama. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">

            <SocialIcon url="https://www.tiktok.com/@be.hijama" className="hover:text-blue-400"/>

            <SocialIcon url="https://www.instagram.com/be.hijama" className="hover:text-blue-400"/>
          </div>
        </div>
      </div>
    </footer>
  )
}

