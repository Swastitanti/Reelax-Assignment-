export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12 px-4">
      <div className="container text-center">

        <h2 className="text-3xl font-bold mb-4">
          REELEX
        </h2>

        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          REELEX helps developers build responsive, modern and fast web
          experiences with clean design and easy customization.
        </p>

        <div className="flex justify-center gap-6 mb-6 text-sm">
          <a href="#home" className="hover:text-blue-400">Home</a>
          <a href="#features" className="hover:text-blue-400">Features</a>
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <p className="text-gray-400 text-sm">
            © 2024 REELEX. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
  
}