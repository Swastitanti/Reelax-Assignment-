import { Monitor, Shield, Zap, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Monitor,
    title: 'Responsive Design',
    description:
      'Build websites that look perfect on desktop, tablet, and mobile devices.',
  },
  {
    icon: Zap,
    title: 'Fast Performance',
    description:
      'Optimized for speed to give users a smooth browsing experience.',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description:
      'Built with modern standards for better security and reliability.',
  },
  {
    icon: Smartphone,
    title: 'Easy Customization',
    description:
      'Modify and adapt your website easily based on your project needs.',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 bg-gray-50">
      <div className="container">

        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm mb-2">
            OUR FEATURES
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose REELEX?
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            REELEX provides modern tools and responsive design features
            to help build powerful web experiences faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-blue-100 rounded-full">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}