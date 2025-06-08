import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Database,
  Globe,
  Smartphone,
  MapPin,
  Phone,
  GraduationCap,
  Award,
} from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b-2 border-yellow-400 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <Code className="h-6 w-6 text-yellow-400" />
              <span className="hidden font-bold sm:inline-block text-black">Eve Jirapornsirikul</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#about" className="transition-colors hover:text-yellow-600 text-black">
              About
            </Link>
            <Link href="#education" className="transition-colors hover:text-yellow-600 text-black">
              Education
            </Link>
            <Link href="#projects" className="transition-colors hover:text-yellow-600 text-black">
              Projects
            </Link>
            <Link href="#experience" className="transition-colors hover:text-yellow-600 text-black">
              Experience
            </Link>
            <Link href="#skills" className="transition-colors hover:text-yellow-600 text-black">
              Skills
            </Link>
            <Link href="#activities" className="transition-colors hover:text-yellow-600 text-black">
              Activities
            </Link>
            <Link href="#contact" className="transition-colors hover:text-yellow-600 text-black">
              Contact
            </Link>
          </nav>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black border-2 border-black" size="sm" asChild>
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl lg:leading-[1.1] text-black">
              Hi, I'm <span className="text-yellow-500">Saowaluk J.</span>
            </h1>
            <h2 className="text-xl text-gray-700 md:text-2xl">Senior Software Engineer & Team Leader</h2>
            <p className="max-w-[750px] text-lg text-gray-600 sm:text-xl">
              A passionate software engineer with over 8 years of hands-on experience building scalable tech solutions
              and leading teams. I blend strong soft skills with deep technical expertise to deliver real-world impact,
              fast. Whether it's backend architecture or cross-functional collaboration, I move with purpose, adapt
              quickly, and make things happen.
            </p>
          </div>
          <div className="flex gap-4">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black border-2 border-black" asChild>
              <Link href="#experience">View My Work</Link>
            </Button>
            <Button variant="outline" className="border-2 border-black text-black hover:bg-yellow-50" asChild>
              <Link href="/eve-CV_internship.pdf" target="_blank">
                Download Resume
              </Link>
            </Button>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="hover:bg-yellow-100" asChild>
              <Link href="https://github.com/ifferrie" target="_blank">
                <Github className="h-5 w-5 text-black" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-yellow-100" asChild>
              <Link href="https://linkedin.com/in/saowaluk-jir/" target="_blank">
                <Linkedin className="h-5 w-5 text-black" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-yellow-100" asChild>
              <Link href="mailto:saowaluk.jir@gmail.com">
                <Mail className="h-5 w-5 text-black" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container space-y-6 py-8 md:py-12 lg:py-24 bg-yellow-50">
          <div className="mx-auto flex max-w-[980px] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl text-black border-b-4 border-yellow-400 pb-2">
              About Me
            </h2>
            <p className="max-w-[85%] leading-normal text-gray-700 sm:text-lg sm:leading-7">
              Currently pursuing a Master's in Computer Science at California State University, Fullerton, while
              bringing extensive professional experience in software engineering and team leadership. I'm passionate
              about creating innovative solutions that drive business value and foster collaborative team environments.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[980px] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl text-black border-b-4 border-yellow-400 pb-2">
              Education
            </h2>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-1 md:max-w-[64rem] md:grid-cols-2">
            <Card className="border-2 border-yellow-400 bg-white">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-yellow-500" />
                  <div>
                    <CardTitle className="text-black">Master of Science in Computer Science</CardTitle>
                    <CardDescription className="text-gray-600">California State University, Fullerton</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm text-gray-600">California, USA</span>
                  </div>
                  <div className="text-sm text-gray-600">Expected: December 2026</div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-yellow-400 bg-white">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-yellow-500" />
                  <div>
                    <CardTitle className="text-black">Bachelor of Science in Computer Science</CardTitle>
                    <CardDescription className="text-gray-600">Thammasat University</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm text-gray-600">Pathumthani, Thailand</span>
                  </div>
                  <div className="text-sm text-gray-600">Graduated: June 2016</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container space-y-6 py-8 md:py-12 lg:py-24 bg-yellow-50">
          <div className="mx-auto flex max-w-[980px] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl text-black border-b-4 border-yellow-400 pb-2">
              Featured Projects
            </h2>
            <p className="max-w-[85%] leading-normal text-gray-700 sm:text-lg sm:leading-7">
              Here are some of my recent projects that showcase my technical skills and problem-solving abilities.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-6 sm:grid-cols-1 md:max-w-[80rem] md:grid-cols-1 lg:grid-cols-3">
            <Card className="border-2 border-yellow-400 bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-48 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Database className="h-12 w-12 text-yellow-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-800">Tech Salary</div>
                    <div className="text-lg text-gray-600">Estimator</div>
                  </div>
                </div>
                <CardTitle className="text-black">Tech Salary Estimator</CardTitle>
                <CardDescription className="text-gray-600">
                  Machine learning model to predict tech salaries using Random Forest algorithm on 2016 Kaggle dataset
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-4">
                  This project utilizes a random forest model to estimate tech salaries based on the 2016 data from the
                  Kaggle dataset "Know Your Worth: Tech Salaries in 2016". Features include data preprocessing, model
                  training, and interactive salary predictions.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-yellow-400 text-black border border-black">Python</Badge>
                  <Badge className="bg-yellow-400 text-black border border-black">Scikit-learn</Badge>
                  <Badge className="bg-yellow-400 text-black border border-black">Pandas</Badge>
                  <Badge className="bg-yellow-400 text-black border border-black">Random Forest</Badge>
                  <Badge className="bg-yellow-400 text-black border border-black">Kaggle</Badge>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-2 border-black text-black hover:bg-yellow-50"
                    asChild
                  >
                    <Link href="https://github.com/ifferrie/tech-salary-estimator" target="_blank">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-yellow-400 hover:bg-yellow-500 text-black border-2 border-black"
                    asChild
                  >
                    <Link href="#" target="_blank">
                      <Globe className="h-4 w-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-400 bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Smartphone className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-800">Task</div>
                    <div className="text-lg text-gray-600">Tracker Pro</div>
                  </div>
                </div>
                <CardTitle className="text-black">Task Tracker Pro</CardTitle>
                <CardDescription className="text-gray-600">
                  Full-stack task management application with real-time collaboration and team features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-4">
                  A comprehensive task management platform built with React and Node.js. Features include real-time
                  updates, team collaboration, project timelines, file attachments, and advanced filtering. Supports
                  multiple project workflows and integrates with popular productivity tools.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-yellow-400 text-black border border-black">React</Badge>
                  <Badge className="bg-yellow-400 text-black border border-black">Node.js</Badge>
                  <Badge className="bg-yellow-400 text-black border border-black">Socket.io</Badge>
                  <Badge className="bg-yellow-400 text-black border border-black">MongoDB</Badge>
                  <Badge className="bg-yellow-400 text-black border border-black">Redux</Badge>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-2 border-black text-black hover:bg-yellow-50"
                    asChild
                  >
                    <Link href="https://github.com/ifferrie" target="_blank">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-yellow-400 hover:bg-yellow-500 text-black border-2 border-black"
                    asChild
                  >
                    <Link href="#" target="_blank">
                      <Globe className="h-4 w-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-400 bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Code className="h-12 w-12 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-800">Smart</div>
                    <div className="text-lg text-gray-600">Analytics</div>
                  </div>
                </div>
                <CardTitle className="text-black">Smart Analytics Dashboard</CardTitle>
                <CardDescription className="text-gray-600">
                  Real-time data visualization platform with AI-powered insights and predictive analytics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-4">
                  An intelligent analytics dashboard that processes large datasets and provides actionable insights
                  through interactive visualizations. Features include automated report generation, anomaly detection,
                  trend analysis, and customizable KPI tracking for business intelligence.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-yellow-400 text-black border border-black">Python</Badge>
                  <Badge className="bg-yellow-400 text-black border border-black">Next.js</Badge>
                  <Badge className="bg-yellow-400 text-black border border-black">D3.js</Badge>
                  <Badge className="bg-yellow-400 text-black border border-black">PostgreSQL</Badge>
                  <Badge className="bg-yellow-400 text-black border border-black">TensorFlow</Badge>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-2 border-black text-black hover:bg-yellow-50"
                    asChild
                  >
                    <Link href="https://github.com/ifferrie" target="_blank">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-yellow-400 hover:bg-yellow-500 text-black border-2 border-black"
                    asChild
                  >
                    <Link href="#" target="_blank">
                      <Globe className="h-4 w-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="container space-y-6 py-8 md:py-12 lg:py-24 bg-yellow-50">
          <div className="mx-auto flex max-w-[980px] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl text-black border-b-4 border-yellow-400 pb-2">
              Professional Experience
            </h2>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-1 md:max-w-[64rem] md:grid-cols-1">
            <Card className="border-2 border-yellow-400 bg-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-black">Senior Software Engineer & Team Leader</CardTitle>
                    <CardDescription className="text-gray-600">ScreenCloud • Sep 2019 - Jan 2025</CardDescription>
                  </div>
                </div>
                <div>
                    <CardTitle className="text-black">Team Leader</CardTitle>
                    <CardDescription className="text-gray-600">
                      HotPlay (Thailand) • Oct 2018 - Sep 2019
                    </CardDescription>
                  </div>
                  <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-black">Software Engineer</CardTitle>
                    <CardDescription className="text-gray-600">
                      Proteus Technologies • Jul 2016 - Oct 2018
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-black">Software Engineer Internship</CardTitle>
                    <CardDescription className="text-gray-600">
                      Proteus Technologies • Jun 2015 - Jul 2015
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[980px] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl text-black border-b-4 border-yellow-400 pb-2">
              Technical Skills
            </h2>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-2 border-yellow-400 bg-white">
              <CardHeader>
                <Code className="h-8 w-8 mb-2 text-yellow-500" />
                <CardTitle className="text-black">Programming Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-yellow-400 text-black border border-black">Python</Badge>
                  <Badge className="bg-yellow-400 text-black border border-black">C++</Badge>
                  <Badge className="bg-yellow-400 text-black border border-black">JavaScript</Badge>
                  <Badge className="bg-yellow-400 text-black border border-black">HTML</Badge>
                  <Badge className="bg-yellow-400 text-black border border-black">CSS</Badge>
                  <Badge className="bg-yellow-400 text-black border border-black">SQL</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-yellow-400 bg-white">
              <CardHeader>
                <Globe className="h-8 w-8 mb-2 text-yellow-500" />
                <CardTitle className="text-black">Frameworks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-yellow-400 text-black border border-black">TypeScript</Badge>
                  <Badge className="bg-yellow-400 text-black border border-black">Node.js</Badge>
                  <Badge className="bg-yellow-400 text-black border border-black">React.js</Badge>
                  <Badge className="bg-yellow-400 text-black border border-black">Redux</Badge>
                  <Badge className="bg-yellow-400 text-black border border-black">Angular</Badge>
                  <Badge className="bg-yellow-400 text-black border border-black">Next.js</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-yellow-400 bg-white">
              <CardHeader>
                <Database className="h-8 w-8 mb-2 text-yellow-500" />
                <CardTitle className="text-black">Database & Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-yellow-400 text-black border border-black">PostgreSQL</Badge>
                  <Badge className="bg-yellow-400 text-black border border-black">Firestore</Badge>
                  <Badge className="bg-yellow-400 text-black border border-black">MongoDB</Badge>
                  <Badge className="bg-yellow-400 text-black border border-black">Cypress</Badge>
                  <Badge className="bg-yellow-400 text-black border border-black">Puppeteer</Badge>
                  <Badge className="bg-yellow-400 text-black border border-black">Redis</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-yellow-400 bg-white">
              <CardHeader>
                <Smartphone className="h-8 w-8 mb-2 text-yellow-500" />
                <CardTitle className="text-black">DevOps & Cloud</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-yellow-400 text-black border border-black">Docker</Badge>
                  <Badge className="bg-yellow-400 text-black border border-black">Linux OS</Badge>
                  <Badge className="bg-yellow-400 text-black border border-black">RabbitMQ</Badge>
                  <Badge className="bg-yellow-400 text-black border border-black">GIT</Badge>
                  <Badge className="bg-yellow-400 text-black border border-black">AWS</Badge>
                  <Badge className="bg-yellow-400 text-black border border-black">Azure</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Activities Section */}
        <section id="activities" className="container space-y-6 py-8 md:py-12 lg:py-24 bg-yellow-50">
          <div className="mx-auto flex max-w-[980px] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl text-black border-b-4 border-yellow-400 pb-2">
              Extracurricular Activities
            </h2>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-1 md:max-w-[64rem] md:grid-cols-1 lg:grid-cols-3">
            <Card className="border-2 border-yellow-400 bg-white">
              <CardHeader>
                <Award className="h-8 w-8 mb-2 text-yellow-500" />
                <CardTitle className="text-black">IT Management Trainee</CardTitle>
                <CardDescription className="text-gray-600">Siam Commercial Bank • 2015</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                  <li>Selected as one of 80 students from nearly 1,000 candidates for this program</li>
                  <li>
                    Gained hands-on experience in IT management within one of Thailand's leading financial institutions
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-2 border-yellow-400 bg-white">
              <CardHeader>
                <Award className="h-8 w-8 mb-2 text-yellow-500" />
                <CardTitle className="text-black">Class President</CardTitle>
                <CardDescription className="text-gray-600">Thammasat University • 2012 - 2015</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                  <li>
                    Elected and served as class president for four consecutive years, from freshman to senior year
                  </li>
                  <li>Led initiatives to improve student engagement in computer science programs</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-2 border-yellow-400 bg-white">
              <CardHeader>
                <Award className="h-8 w-8 mb-2 text-yellow-500" />
                <CardTitle className="text-black">Student Leader</CardTitle>
                <CardDescription className="text-gray-600">Thailand Network Games 20th • 2015</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                  <li>
                    Led and organized the sports day event for computer science students across Thailand, involving over
                    500 participants
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[980px] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl text-black border-b-4 border-yellow-400 pb-2">
              Get In Touch
            </h2>
            <p className="max-w-[85%] leading-normal text-gray-700 sm:text-lg sm:leading-7">
              I'm always interested in new opportunities and exciting projects. Let's connect!
            </p>
          </div>
          <div className="mx-auto flex max-w-[980px] justify-center">
            <Card className="w-full max-w-md border-2 border-yellow-400 bg-white">
              <CardHeader>
                <CardTitle className="text-black">Contact Information</CardTitle>
                <CardDescription className="text-gray-600">
                  Feel free to reach out through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-yellow-500" />
                  <span className="text-black">saowaluk.jir@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-yellow-500" />
                  <span className="text-black">+1 (213) 656-2212</span>
                </div>
                <div className="flex space-x-2">
                  <Button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black border-2 border-black" asChild>
                    <Link href="mailto:saowaluk.jir@gmail.com">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Me
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-2 border-black text-black hover:bg-yellow-50" asChild>
                    <Link href="https://linkedin.com/in/saowaluk-jir/" target="_blank">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-yellow-400 py-6 md:py-0 bg-white">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Code className="h-6 w-6 text-yellow-500" />
            <p className="text-center text-sm leading-loose text-gray-700 md:text-left">
              © 2024 Eve J.
            </p>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="hover:bg-yellow-100" asChild>
              <Link href="https://github.com/ifferrie" target="_blank">
                <Github className="h-4 w-4 text-black" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-yellow-100" asChild>
              <Link href="https://linkedin.com/in/saowaluk-jir/" target="_blank">
                <Linkedin className="h-4 w-4 text-black" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
