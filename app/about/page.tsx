import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, BarChart3, BookOpen, CheckCircle, Clock, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About AttentionTracker</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  We're on a mission to revolutionize online education by enhancing student engagement through
                  AI-powered attention tracking.
                </p>
              </div>
            </div>
            <Image
              src="/placeholder.svg?height=550&width=550"
              width={550}
              height={550}
              alt="Team working on AI solutions"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Story</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Transforming Online Education</h2>
                <p className="text-muted-foreground md:text-lg">
                  AttentionTracker was born from a simple observation: online learning environments lack the real-time
                  feedback that makes traditional classrooms effective. Our founder, a computer science professor,
                  noticed that student engagement was difficult to gauge in virtual settings, leading to decreased
                  learning outcomes.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  In 2022, we assembled a team of AI specialists, educators, and UX designers to create a solution that
                  would bridge this gap. Our AI-powered attention tracker was developed to provide real-time insights
                  into student engagement, helping instructors adapt their teaching methods and students improve their
                  focus.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  Today, AttentionTracker is used by educational institutions worldwide, helping to create more engaging
                  and effective online learning experiences.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Our Mission</h3>
              <p className="text-muted-foreground md:text-lg">
                To enhance the quality of online education by providing tools that foster engagement, improve teaching
                methods, and empower students to take control of their learning experience.
              </p>
              <h3 className="text-2xl font-bold">Our Vision</h3>
              <p className="text-muted-foreground md:text-lg">
                A world where online education is as engaging and effective as in-person learning, where technology
                bridges the gap between virtual and physical classrooms, and where every student has the opportunity to
                reach their full potential.
              </p>
              <h3 className="text-2xl font-bold">Our Values</h3>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Innovation: Constantly pushing the boundaries of what's possible in EdTech</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Privacy: Ensuring the highest standards of data protection and user consent</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Accessibility: Making our tools available to all educators and students</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Impact: Measuring our success by the improvement in learning outcomes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Journey</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">The AttentionTracker Timeline</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                From concept to reality, see how AttentionTracker has evolved to become a leading solution in
                educational technology.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-3xl">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="h-full w-px bg-border"></div>
                </div>
                <div className="space-y-2 pb-8">
                  <h3 className="text-xl font-bold">2022 - Inception</h3>
                  <p className="text-muted-foreground">
                    AttentionTracker was founded with the mission to improve online education through AI-powered
                    engagement tracking.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div className="h-full w-px bg-border"></div>
                </div>
                <div className="space-y-2 pb-8">
                  <h3 className="text-xl font-bold">2023 - Beta Launch</h3>
                  <p className="text-muted-foreground">
                    First beta version released to select educational institutions for testing and feedback.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Users className="h-5 w-5" />
                  </div>
                  <div className="h-full w-px bg-border"></div>
                </div>
                <div className="space-y-2 pb-8">
                  <h3 className="text-xl font-bold">2023 - First 100 Users</h3>
                  <p className="text-muted-foreground">
                    Reached our first milestone of 100 active users across multiple universities.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Award className="h-5 w-5" />
                  </div>
                  <div className="h-full w-px bg-border"></div>
                </div>
                <div className="space-y-2 pb-8">
                  <h3 className="text-xl font-bold">2024 - Official Launch</h3>
                  <p className="text-muted-foreground">
                    Full product launch with Zoom and Google Chrome integrations, bringing AI-powered attention tracking
                    to educators worldwide.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">2025 - The Future</h3>
                  <p className="text-muted-foreground">
                    Expanding our platform with new features and integrations to further enhance the online learning
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Team</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Meet the Minds Behind AttentionTracker
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Our diverse team of experts is passionate about improving online education through innovative
                technology.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                width={200}
                height={200}
                alt="Team member"
                className="rounded-full object-cover"
              />
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Dr. Sarah Johnson</h3>
                <p className="text-sm text-muted-foreground">Founder & CEO</p>
                <p className="text-sm text-muted-foreground">
                  Former professor with 15+ years in computer science and AI research.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                width={200}
                height={200}
                alt="Team member"
                className="rounded-full object-cover"
              />
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Michael Chen</h3>
                <p className="text-sm text-muted-foreground">CTO</p>
                <p className="text-sm text-muted-foreground">
                  AI specialist with expertise in computer vision and machine learning.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                width={200}
                height={200}
                alt="Team member"
                className="rounded-full object-cover"
              />
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Dr. Emily Rodriguez</h3>
                <p className="text-sm text-muted-foreground">Head of Education</p>
                <p className="text-sm text-muted-foreground">
                  Educational psychologist specializing in online learning environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Join Us in Transforming Online Education
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Be part of the revolution in educational technology and help us create more engaging online learning
                experiences.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg" className="w-full min-[400px]:w-auto">
                  Contact Us
                </Button>
              </Link>
              <Link href="/careers">
                <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                  Join Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

