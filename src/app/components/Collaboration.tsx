import { Code2, Database, Brain, Globe, BarChart3, GitBranch } from "lucide-react";

export default function Collaboration() {
  const skills = [
    { name: "Python", icon: Code2 },
    { name: "R", icon: BarChart3 },
    { name: "TensorFlow", icon: Brain },
    { name: "React", icon: Globe },
    { name: "PostgreSQL", icon: Database },
    { name: "Git", icon: GitBranch },
  ];

  return (
    <section className="py-20 bg-primary-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-900 text-center mb-4">
          Collaboration & Leadership
        </h2>
        <p className="text-center text-primary-700 mb-12 max-w-2xl mx-auto">
          Bridging technical excellence with community impact
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Leadership Experience */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="font-heading text-2xl font-bold text-primary-900 mb-4">
              Student Association Leadership
            </h3>
            <div className="mb-4">
              <p className="font-semibold text-primary-800 mb-2">Role: [Your Title]</p>
              <p className="text-primary-700">
                Led a team of [X] students to organize [Event Name], bringing together
                technical innovation and social impact.
              </p>
            </div>
            <div className="pt-4 border-t border-primary-200">
              <p className="text-primary-700 font-semibold">The Win:</p>
              <p className="text-primary-700 italic">
                "Demonstrated ability to bridge technical and social goals, fostering
                collaboration across diverse backgrounds and expertise."
              </p>
            </div>
          </div>

          {/* Skills Matrix */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="font-heading text-2xl font-bold text-primary-900 mb-6">
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
                  >
                    <div className="bg-primary-600 p-2 rounded-lg">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-primary-800">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Additional Skills Note */}
        <div className="text-center bg-white rounded-xl p-6 shadow-md">
          <p className="text-primary-700">
            Proficient in data analysis, machine learning, web development, and collaborative tools.
            Always eager to learn new technologies that can drive meaningful impact.
          </p>
        </div>
      </div>
    </section>
  );
}
