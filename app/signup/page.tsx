"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, CheckCircle, EyeIcon, EyeOffIcon, GithubIcon, ChromeIcon as GoogleIcon } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    institution: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [acceptTerms, setAcceptTerms] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRoleChange = (value: string) => {
    setFormData((prev) => ({ ...prev, role: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!acceptTerms) {
      toast({
        title: "Terms and conditions required",
        description: "Please accept the terms and conditions to continue.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Account created successfully!",
      description: "Welcome to AttentionTracker. You can now log in.",
    })

    router.push("/login")
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-muted py-12">
      <div className="container px-4 md:px-6">
        <div className="mx-auto grid w-full max-w-md gap-6">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Activity className="h-10 w-10 text-primary" />
            <h1 className="text-3xl font-bold">Create an account</h1>
            <p className="text-muted-foreground">Sign up to get started with AttentionTracker</p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Sign Up</CardTitle>
              <CardDescription>Enter your information to create an account</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="m@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <EyeOffIcon className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <EyeIcon className="h-4 w-4 text-muted-foreground" />
                      )}
                      <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                    </Button>
                  </div>
                  <div className="text-sm text-muted-foreground">Password must be at least 8 characters long</div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Select value={formData.role} onValueChange={handleRoleChange}>
                    <SelectTrigger id="role">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="instructor">Instructor</SelectItem>
                      <SelectItem value="administrator">Administrator</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="institution">Institution</Label>
                  <Input
                    id="institution"
                    name="institution"
                    placeholder="University of Technology"
                    value={formData.institution}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={acceptTerms}
                    onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                  />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the{" "}
                    <Link href="/terms" className="text-primary underline-offset-4 hover:underline">
                      terms of service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-primary underline-offset-4 hover:underline">
                      privacy policy
                    </Link>
                  </Label>
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Creating account..." : "Create Account"}
                </Button>
              </form>
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full">
                  <GoogleIcon className="mr-2 h-4 w-4" />
                  Google
                </Button>
                <Button variant="outline" className="w-full">
                  <GithubIcon className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <p className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link href="/login" className="text-primary underline-offset-4 hover:underline">
                  Sign in
                </Link>
              </p>
            </CardFooter>
          </Card>
          <div className="space-y-2">
            <div className="text-center text-sm text-muted-foreground">
              <h3 className="font-medium">Why choose AttentionTracker?</h3>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-sm">Real-time attention tracking for online classes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-sm">Improve student engagement and learning outcomes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-sm">Privacy-focused with GDPR and FERPA compliance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

