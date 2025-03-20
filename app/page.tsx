import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Activity, BarChart3, Brain, CheckCircle, Eye, Lock, Users } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  AI-Powered Attention Tracking for Online Learning
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Enhance student engagement and improve learning outcomes with real-time attention analytics for
                  virtual classrooms.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg" className="w-full min-[400px]:w-auto">
                    Get Started
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <Image
              src="/placeholder.svg?height=550&width=550"
              width={550}
              height={550}
              alt="AI Attention Tracking Dashboard"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Key Features</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Revolutionize Online Learning</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Our AI-powered attention tracker provides real-time insights to enhance engagement and improve learning
                outcomes.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Facial Expression Analysis</h3>
              <p className="text-center text-muted-foreground">
                Advanced AI analyzes facial expressions to detect engagement levels and emotional responses.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <Activity className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Posture Detection</h3>
              <p className="text-center text-muted-foreground">
                Monitor body language and posture to identify signs of disengagement or fatigue.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Engagement Dashboard</h3>
              <p className="text-center text-muted-foreground">
                Real-time visualization of attention metrics for instructors and personalized feedback for students.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">AI-Powered Insights</h3>
              <p className="text-center text-muted-foreground">
                Machine learning algorithms provide actionable recommendations to improve teaching methods.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Privacy-Focused</h3>
              <p className="text-center text-muted-foreground">
                GDPR and FERPA compliant with data anonymization and secure encryption.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Easy Integration</h3>
              <p className="text-center text-muted-foreground">
                Seamlessly integrates with Zoom and Google Chrome for hassle-free implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Benefits</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Transform Your Virtual Classroom</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Our AI-powered attention tracker helps educators and students achieve better learning outcomes through
                  enhanced engagement.
                </p>
              </div>
              <div className="mt-8 grid gap-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-bold">Increased Engagement</h3>
                    <p className="text-muted-foreground">
                      Boost student engagement by 20% with real-time attention monitoring and timely interventions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-bold">Improved Learning Outcomes</h3>
                    <p className="text-muted-foreground">
                      Students who maintain higher attention levels show significantly better comprehension and
                      retention.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-bold">Data-Driven Teaching</h3>
                    <p className="text-muted-foreground">
                      Gain insights into which teaching methods and content types maintain the highest engagement.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-bold">Student Self-Awareness</h3>
                    <p className="text-muted-foreground">
                      Empower students with personalized feedback on their attention patterns and focus habits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Image
              src="/placeholder.svg?height=550&width=550"
              width={550}
              height={550}
              alt="Virtual classroom with attention tracking"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Ready to Transform Your Online Teaching?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Join thousands of educators who are enhancing student engagement with our AI-powered attention tracker.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/signup">
                <Button size="lg" className="w-full min-[400px]:w-auto">
                  Get Started for Free
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

