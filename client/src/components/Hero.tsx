import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-20 px-4 bg-gradient-to-r from-blue-50 to-white"
    >
      <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Build Smarter With <span className="text-blue-600">REELEX</span>
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            REELEX helps you create modern, responsive, and high-performance
            websites quickly with clean design and easy customization.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6">
              Get Started
            </Button>

            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 px-8 py-6"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Right Hero Card */}
        <div className="bg-white rounded-2xl shadow-xl p-10 text-center">
          <div className="text-7xl mb-4">🚀</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Modern Web Experience
          </h3>
          <p className="text-gray-600">
            Fast, scalable and responsive landing page design built for the future.
          </p>
        </div>

      </div>
    </section>
  );
}