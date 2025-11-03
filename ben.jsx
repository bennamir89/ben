import React from 'react'

export default function Home() {
  const experiences = [
    {
      title: 'Senior Secondary ICT & CS Teacher',
      organization: 'Sayfol International School, Kuala Lumpur',
      duration: 'July 2023 – Present',
      highlights: [
        'Delivering high-quality ICT & Computer Science lessons aligned with IGCSE standards.',
        'Supporting students’ personal development and academic success.',
        'Mentoring teachers on digital pedagogy and classroom management.',
      ],
    },
    {
      title: 'Assistant Principal (Pastoral) / KS3 ICT Teacher',
      organization: 'Spectrum International School, Kuala Lumpur & Putrajaya',
      duration: 'July 2022 – July 2023',
      highlights: [
        'Developed school-wide policies for wellbeing, digital safety, and behaviour management.',
        'Led pastoral data collection on attendance, behaviour, and student wellbeing.',
        'Organized teacher development programs on pastoral care and digital safety.',
      ],
    },
    {
      title: 'Head of Communication Department / ICT Teacher',
      organization: 'Victoria English School, Sharjah, UAE',
      duration: 'July 2019 – July 2022',
      highlights: [
        'Taught KS3–A-Level ICT with outstanding lesson observations.',
        'Promoted to Head of Department for leadership and contribution.',
        'Trained over 1500 staff and students in online learning tools (Google Classroom, Padlet).',
      ],
    },
    {
      title: 'ICT & Coding Teacher / UNHCR Instructor',
      organization: 'IDEAS Academy, Kuala Lumpur',
      duration: 'July 2018 – July 2019',
      highlights: [
        'Conducted coding training for refugees across Southeast Asia (Singapore, Myanmar, Thailand, Indonesia).',
        'Achieved all students receiving grade A for IGCSE ICT.',
        'Promoted digital inclusion for underprivileged youth through UNHCR programs.',
      ],
    },
    {
      title: 'ICT & Mathematics Teacher',
      organization: 'Itqan Integrated School, Kuala Lumpur',
      duration: 'July 2015 – July 2018',
      highlights: [
        'Recognized as Outstanding ICT & Math Teacher for three consecutive years.',
        'Taught KS1–KS3 students using 5E’s model and differentiated learning support.',
        'Handled ICT technical maintenance and troubleshooting in school.',
      ],
    },
    {
      title: 'Software Engineer',
      organization: 'Malaysia Software Testing Board, Kuala Lumpur',
      duration: 'Jan 2014 – July 2015',
      highlights: [
        'Developed and maintained systems using C++, Java, and Python.',
        'Certified Professional Requirement Engineer and Network Security Administrator.',
        'Implemented test case analysis and product validation procedures.',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 antialiased">
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/images/profile.jpg" alt="Ben Amir" className="w-12 h-12 rounded-full object-cover" />
            <div>
              <h1 className="text-lg font-semibold">Ben Amir</h1>
              <p className="text-sm text-gray-500">Senior ICT & Computer Science Teacher</p>
            </div>
          </div>
          <nav className="flex items-center gap-4">
            <a href="#about" className="text-sm hover:text-blue-600">About</a>
            <a href="#experience" className="text-sm hover:text-blue-600">Experience</a>
            <a href="/learn" className="text-sm hover:text-blue-600">Learn</a>
            <a href="/Muhammad_Amir_CV_2025.pdf" download className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded-md">Download CV</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* HERO */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-extrabold leading-tight">Ben Amir</h2>
            <p className="mt-3 text-lg text-gray-700">
              Senior ICT & Computer Science teacher with over 10 years of international experience. I specialise in IGCSE/A-Level curricula, project-based learning, and preparing students for competitions like ACSL & CCC. I also run community coding workshops for refugees and enjoy developing practical, real-world learning resources.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:bennamir89@gmail.com" className="inline-block border border-gray-300 px-4 py-2 rounded-md text-sm">Email</a>
              <a href="https://www.linkedin.com/in/benamir89/" target="_blank" rel="noreferrer" className="inline-block border border-gray-300 px-4 py-2 rounded-md text-sm">LinkedIn</a>
              <a href="/learn" className="inline-block bg-gray-900 text-white px-4 py-2 rounded-md text-sm">Explore lessons</a>
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-2 text-sm text-gray-600">
              <li><strong>Role:</strong> Senior Secondary ICT & CS Teacher</li>
              <li><strong>Location:</strong> International (Malaysia, UAE, China)</li>
              <li><strong>Education:</strong> M.Ed. (in progress)</li>
              <li><strong>Specialties:</strong> IGCSE/A-Level, coding workshops, curriculum design</li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-72 h-72 rounded-2xl overflow-hidden shadow-lg">
              <img src="/images/profile.jpg" alt="Ben Amir portrait" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mt-16 bg-white rounded-xl p-8 shadow-sm">
          <h3 className="text-2xl font-semibold">About Me</h3>
          <p className="mt-4 text-gray-700">
            I am an experienced ICT and Computer Science educator with a background in both classroom teaching and educational leadership. Over the past decade I have taught across KS1-KS5 and worked with international schools in Southeast Asia and the Middle East. I enjoy blending hands-on projects with theory, and I&apos;m passionate about making computing accessible to all learners — including refugee students through workshops supported by UNHCR.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold">Teaching Highlights</h4>
              <ul className="mt-2 text-gray-600 list-disc list-inside space-y-1">
                <li>Delivered IGCSE & A-Level ICT/Computer Science with outstanding lesson observations.</li>
                <li>Organised and led teacher training on Google Classroom and blended learning systems.</li>
                <li>Developed pastoral and digital safety policies while serving as Assistant Principal (Pastoral).</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Community & Projects</h4>
              <ul className="mt-2 text-gray-600 list-disc list-inside space-y-1">
                <li>UNHCR coding workshops for refugees across Southeast Asia.</li>
                <li>Prepared students for programming competitions (ACSL, CCC).</li>
                <li>Contributor / Editor for school publications and learning resources.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="mt-16">
          <h3 className="text-2xl font-semibold mb-6">Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h4 className="text-xl font-semibold text-gray-800">{exp.title}</h4>
                <p className="text-gray-600 mt-1">{exp.organization}</p>
                <p className="text-sm text-gray-500 mb-3">{exp.duration}</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {exp.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 p-8 rounded-xl bg-gradient-to-r from-gray-900 to-blue-700 text-white">
          <div className="max-w-3xl">
            <h4 className="text-2xl font-semibold">Want to collaborate or hire me?</h4>
            <p className="mt-2 text-gray-100">I&apos;m available for full-time school roles, part-time online teaching, and curriculum development. Let&apos;s discuss how I can help your students or institution.</p>
            <div className="mt-4">
              <a href="mailto:bennamir89@gmail.com" className="inline-block bg-white text-gray-900 px-4 py-2 rounded-md">Contact me</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-5xl mx-auto px-6 py-6 text-sm text-gray-500 flex items-center justify-between">
          <div>© {new Date().getFullYear()} Ben Amir</div>
          <div>Built with Next.js • Deployed on Vercel</div>
        </div>
      </footer>
    </div>
  );
}
