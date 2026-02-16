import { BookOpen, Users, Heart } from "lucide-react";

export default function ThoughtLeadership() {
  const values = [
    {
      icon: Heart,
      title: "Equity in Data",
      description: "Ensuring data solutions serve all communities fairly and inclusively",
    },
    {
      icon: Users,
      title: "Collaborative Innovation",
      description: "Building breakthrough solutions through diverse perspectives and teamwork",
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Staying at the forefront of research while maintaining intellectual humility",
    },
  ];

  return (
    <section className="py-20 bg-primary-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-900 text-center mb-4">
          Thought Leadership & Community
        </h2>
        <p className="text-center text-primary-700 mb-12 max-w-2xl mx-auto">
          Sharing knowledge and building communities at the intersection of technology and healthcare
        </p>

        {/* Blog & Community */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl p-8 shadow-md">
            <BookOpen className="w-12 h-12 text-primary-600 mb-4" />
            <h3 className="font-heading text-2xl font-bold text-primary-900 mb-3">
              The Blog (Medium)
            </h3>
            <p className="text-primary-700 mb-4">
              Featuring articles on healthcare innovation, data science methodologies, and the
              ethical implications of AI in medicine.
            </p>
            <a
              href="#"
              className="text-primary-600 hover:text-primary-700 font-semibold hover:underline"
            >
              Read latest articles →
            </a>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md">
            <Users className="w-12 h-12 text-primary-600 mb-4" />
            <h3 className="font-heading text-2xl font-bold text-primary-900 mb-3">
              Biomedical News Community
            </h3>
            <p className="text-primary-700 mb-4">
              Curating the latest in health-tech for a growing community of engaged followers
              on Facebook, fostering discussion and awareness.
            </p>
            <a
              href="#"
              className="text-primary-600 hover:text-primary-700 font-semibold hover:underline"
            >
              Join the community →
            </a>
          </div>
        </div>

        {/* Values */}
        <div className="bg-white rounded-xl p-8 shadow-md">
          <h3 className="font-heading text-2xl font-bold text-primary-900 mb-8 text-center">
            What Drives My Work
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary-100 p-4 rounded-full">
                      <Icon className="w-8 h-8 text-primary-700" />
                    </div>
                  </div>
                  <h4 className="font-heading text-lg font-bold text-primary-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-primary-700 text-sm">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
