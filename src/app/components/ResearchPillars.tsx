export default function ResearchPillars() {
  const pillars = [
    {
      title: "Topic 1",
      description: "Brief one-sentence description of the first research area and its impact on healthcare innovation.",
    },
    {
      title: "Topic 2",
      description: "Brief one-sentence description of the second research area and its contribution to data science.",
    },
    {
      title: "Topic 3",
      description: "Brief one-sentence description of the third research area and how it bridges technology with empathy.",
    },
  ];

  return (
    <section className="py-20 bg-primary-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-900 text-center mb-4">
          Research Pillars
        </h2>
        <p className="text-center text-primary-700 mb-12 max-w-2xl mx-auto">
          My work focuses on three core areas that drive innovation in healthcare and data science
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-primary-600"
            >
              <h3 className="font-heading text-2xl font-bold text-primary-900 mb-4">
                {pillar.title}
              </h3>
              <p className="text-primary-700 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
