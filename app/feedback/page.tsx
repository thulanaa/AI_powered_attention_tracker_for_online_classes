"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Smile, Meh, Frown, ThumbsUp } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function FeedbackPage() {
  const [feedbackType, setFeedbackType] = useState("general")
  const [satisfaction, setSatisfaction] = useState("")
  const [comments, setComments] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Feedback submitted successfully!",
      description: "Thank you for helping us improve our product.",
    })

    setFeedbackType("general")
    setSatisfaction("")
    setComments("")
    setIsSubmitting(false)
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Share Your Feedback</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Your feedback helps us improve AttentionTracker and deliver a better experience for all users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Form Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl">
            <Card>
              <CardHeader>
                <CardTitle>Feedback Form</CardTitle>
                <CardDescription>
                  Let us know what you think about AttentionTracker. Your insights are valuable to us.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="feedback-type">What type of feedback would you like to share?</Label>
                    <Select value={feedbackType} onValueChange={setFeedbackType}>
                      <SelectTrigger id="feedback-type">
                        <SelectValue placeholder="Select feedback type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Feedback</SelectItem>
                        <SelectItem value="bug">Bug Report</SelectItem>
                        <SelectItem value="feature">Feature Request</SelectItem>
                        <SelectItem value="usability">Usability Feedback</SelectItem>
                        <SelectItem value="performance">Performance Issues</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>How satisfied are you with AttentionTracker?</Label>
                    <RadioGroup value={satisfaction} onValueChange={setSatisfaction} className="flex space-x-4">
                      <div className="flex flex-col items-center space-y-1">
                        <RadioGroupItem value="very-satisfied" id="very-satisfied" className="sr-only" />
                        <Label
                          htmlFor="very-satisfied"
                          className={`cursor-pointer rounded-full p-2 ${
                            satisfaction === "very-satisfied" ? "bg-primary text-primary-foreground" : "bg-muted"
                          }`}
                        >
                          <Smile className="h-8 w-8" />
                        </Label>
                        <span className="text-xs">Very Satisfied</span>
                      </div>
                      <div className="flex flex-col items-center space-y-1">
                        <RadioGroupItem value="neutral" id="neutral" className="sr-only" />
                        <Label
                          htmlFor="neutral"
                          className={`cursor-pointer rounded-full p-2 ${
                            satisfaction === "neutral" ? "bg-primary text-primary-foreground" : "bg-muted"
                          }`}
                        >
                          <Meh className="h-8 w-8" />
                        </Label>
                        <span className="text-xs">Neutral</span>
                      </div>
                      <div className="flex flex-col items-center space-y-1">
                        <RadioGroupItem value="dissatisfied" id="dissatisfied" className="sr-only" />
                        <Label
                          htmlFor="dissatisfied"
                          className={`cursor-pointer rounded-full p-2 ${
                            satisfaction === "dissatisfied" ? "bg-primary text-primary-foreground" : "bg-muted"
                          }`}
                        >
                          <Frown className="h-8 w-8" />
                        </Label>
                        <span className="text-xs">Dissatisfied</span>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="comments">Please share your thoughts in detail</Label>
                    <Textarea
                      id="comments"
                      value={comments}
                      onChange={(e) => setComments(e.target.value)}
                      placeholder="Tell us what you like, what could be improved, or any issues you've encountered..."
                      className="min-h-[150px]"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>Submitting...</>
                    ) : (
                      <>
                        <ThumbsUp className="mr-2 h-4 w-4" />
                        Submit Feedback
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-12 space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold">Other Ways to Provide Feedback</h2>
                <p className="mt-2 text-muted-foreground">
                  We're always looking for ways to improve. Here are some other channels to share your thoughts.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Join Our User Research</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Participate in user testing sessions and help shape the future of AttentionTracker.
                    </p>
                    <Button variant="outline" className="mt-4">
                      Sign Up
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Community Forum</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Join discussions with other users and share your ideas in our community forum.
                    </p>
                    <Button variant="outline" className="mt-4">
                      Visit Forum
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

