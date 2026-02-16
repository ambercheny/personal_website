export default function LabBench() {
  const projects = [
    {
      name: "Sports Court Finder",
      problem: "Difficulty finding available courts for various sports in local communities.",
      solution: "A web-based tool that aggregates real-time court availability across multiple sports facilities.",
      techStack: ["React", "TypeScript", "Google Maps API", "Node.js"],
      warmth: "Built this to help my local community stay active and connected.",
    },
    {
      name: "Secondary Project",
      problem: "Placeholder for another innovative project.",
      solution: "A solution that demonstrates technical skills and community impact.",
      techStack: ["Python", "TensorFlow", "PostgreSQL"],
      warmth: "Making a difference through technology and data.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-900 text-center mb-4">
          The Lab Bench
        </h2>
        <p className="text-center text-primary-700 mb-12 max-w-2xl mx-auto">
          Side projects where innovation meets community impact
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-primary-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="font-heading text-2xl font-bold text-primary-900 mb-6">
                {project.name}
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary-800 mb-2">The Problem:</h4>
                  <p className="text-primary-700">{project.problem}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary-800 mb-2">The Solution:</h4>
                  <p className="text-primary-700">{project.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary-800 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary-200 text-primary-900 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-primary-200">
                  <p className="text-primary-700 italic">"{project.warmth}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
