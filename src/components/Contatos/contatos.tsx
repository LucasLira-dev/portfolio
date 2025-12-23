import Link from "next/link";

export default function Contatos() {
    return(
        <section id="contatos" className="min-h-screen flex items-center lg:ml-64 px-4 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-12 text-[#e8eaed]">Entre em contato</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Email */}
            <div className="bg-[#1a1f26] border border-[#2a3038] rounded-lg p-6 hover:border-[#00d4ff] transition-all duration-300 text-center">
              <div className="w-12 h-12 rounded-lg bg-[#00d4ff] flex items-center justify-center text-[#0f1419] mx-auto mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#e8eaed] mb-2">Email</h3>
              <p className="text-[#a8aeb5] text-sm mb-4">lucasmndes.dev@gmail.com</p>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:lucasmndes.dev@gmail.com"
                className="inline-block px-4 py-2 bg-[#00d4ff] text-[#0f1419] rounded font-semibold hover:shadow-lg hover:shadow-[#00d4ff]/50 transition-all duration-300 text-sm"
              >
                Enviar Email
              </Link>
            </div>

            {/* GitHub */}
            <div className="bg-[#1a1f26] border border-[#2a3038] rounded-lg p-6 hover:border-[#1e88e5] transition-all duration-300 text-center">
              <div className="w-12 h-12 rounded-lg bg-[#1e88e5] flex items-center justify-center text-[#e8eaed] mx-auto mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#e8eaed] mb-2">GitHub</h3>
              <p className="text-[#a8aeb5] text-sm mb-4">@LucasLira-dev</p>
              <Link
                href="https://github.com/LucasLira-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-[#1e88e5] text-[#e8eaed] rounded font-semibold hover:shadow-lg hover:shadow-[#1e88e5]/50 transition-all duration-300 text-sm"
              >
                Ver perfil
              </Link>
            </div>

            {/* LinkedIn */}
            <div className="bg-[#1a1f26] border border-[#2a3038] rounded-lg p-6 hover:border-[#00d4ff] transition-all duration-300 text-center">
              <div className="w-12 h-12 rounded-lg bg-[#00d4ff] flex items-center justify-center text-[#0f1419] mx-auto mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.81 0-9.728h3.554v1.375c.427-.659 1.191-1.598 2.897-1.598 2.117 0 3.704 1.385 3.704 4.362v5.589zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.955.771-1.71 1.958-1.71 1.187 0 1.914.755 1.939 1.71 0 .951-.752 1.71-1.982 1.71zm1.581 11.597H3.715V9.724h3.203v10.728zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#e8eaed] mb-2">LinkedIn</h3>
              <p className="text-[#a8aeb5] text-sm mb-4">linkedin.com/in/lucas-mendess</p>
              <Link
                href="https://linkedin.com/in/lucas-mendess"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-[#00d4ff] text-[#0f1419] rounded font-semibold hover:shadow-lg hover:shadow-[#00d4ff]/50 transition-all duration-300 text-sm"
              >
                Visitar LinkedIn
              </Link>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#a8aeb5] text-lg">
              Tem um projeto em mente? Vamos conversar!
            </p>
          </div>
        </div>
      </section>
    )
}