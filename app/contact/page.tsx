"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you as soon as possible.",
    })

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Have questions or feedback? We'd love to hear from you. Get in touch with our team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email address"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Subject
                      </label>
                      <Select value={formData.subject} onValueChange={handleSelectChange}>
                        <SelectTrigger id="subject">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="sales">Sales</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        className="min-h-[150px]"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>Sending...</>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold">Contact Information</h2>
                <p className="mt-2 text-muted-foreground">Reach out to us through any of the following channels:</p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-muted-foreground">info@attentiontracker.com</p>
                    <p className="text-muted-foreground">support@attentiontracker.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-muted-foreground">Mon-Fri, 9am-5pm EST</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-bold">Office</h3>
                    <p className="text-muted-foreground">
                      123 Innovation Drive
                      <br />
                      Suite 400
                      <br />
                      Boston, MA 02110
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-bold">Office Hours</h3>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div>Monday - Friday</div>
                  <div>9:00 AM - 5:00 PM</div>
                  <div>Saturday</div>
                  <div>Closed</div>
                  <div>Sunday</div>
                  <div>Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Visit Our Office</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                We're located in the heart of Boston's innovation district.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-8 max-w-5xl rounded-lg overflow-hidden border">
            <div className="aspect-[16/9] w-full bg-muted">
              <div className="flex h-full items-center justify-center">
                <p className="text-muted-foreground">
                  Map placeholder - would be replaced with an actual map component
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

