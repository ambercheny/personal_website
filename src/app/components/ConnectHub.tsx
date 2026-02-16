import { Linkedin, Github, BookOpen, Facebook, Mail } from "lucide-react";

export default function ConnectHub() {
  const socials = [
    { name: "LinkedIn", icon: Linkedin, url: "#", color: "hover:text-primary-600" },
    { name: "GitHub", icon: Github, url: "#", color: "hover:text-gray-800" },
    { name: "Medium", icon: BookOpen, url: "#", color: "hover:text-green-600" },
    { name: "Facebook", icon: Facebook, url: "#", color: "hover:text-primary-500" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-900 text-center mb-12">
          Let's Connect
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center gap-2 transition-all duration-300 ${social.color} hover:scale-110`}
                aria-label={social.name}
              >
                <Icon size={40} className="text-primary-700" />
                <span className="text-sm text-primary-600">{social.name}</span>
              </a>
            );
          })}

          {/* Email Button */}
          <a
            href="mailto:your.email@example.com"
            className="flex flex-col items-center gap-2 transition-all duration-300 hover:text-primary-600 hover:scale-110"
          >
            <div className="bg-primary-600 text-white p-3 rounded-full hover:bg-primary-700 transition-colors">
              <Mail size={28} />
            </div>
            <span className="text-sm text-primary-600">Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}
