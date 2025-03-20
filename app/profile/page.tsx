"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BarChart3, Camera, Clock, Edit, Lock, Save, Settings, User } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

export default function ProfilePage() {
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Instructor",
    institution: "University of Technology",
    bio: "Professor of Computer Science with a focus on AI and machine learning. Using AttentionTracker to improve student engagement in my online courses.",
  })
  const [isEditing, setIsEditing] = useState(false)
  const [activeTab, setActiveTab] = useState("profile")
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProfileData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    setIsEditing(false)
    toast({
      title: "Profile updated",
      description: "Your profile information has been saved successfully.",
    })
  }

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Password updated",
      description: "Your password has been changed successfully.",
    })
  }

  const handleNotificationToggle = () => {
    toast({
      title: "Notification settings updated",
      description: "Your notification preferences have been saved.",
    })
  }

  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Sidebar */}
              <div className="md:w-1/4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="relative">
                        <Avatar className="h-24 w-24">
                          <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile picture" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <Button
                          size="icon"
                          variant="outline"
                          className="absolute bottom-0 right-0 rounded-full h-8 w-8"
                        >
                          <Camera className="h-4 w-4" />
                          <span className="sr-only">Change profile picture</span>
                        </Button>
                      </div>
                      <div className="text-center">
                        <h2 className="text-xl font-bold">{profileData.name}</h2>
                        <p className="text-sm text-muted-foreground">{profileData.role}</p>
                        <p className="text-sm text-muted-foreground">{profileData.institution}</p>
                      </div>
                      <div className="w-full pt-4">
                        <TabsList className="grid w-full grid-cols-3">
                          <TabsTrigger
                            value="profile"
                            onClick={() => setActiveTab("profile")}
                            className={
                              activeTab === "profile"
                                ? "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                                : ""
                            }
                          >
                            <User className="h-4 w-4 mr-2" />
                            Profile
                          </TabsTrigger>
                          <TabsTrigger
                            value="security"
                            onClick={() => setActiveTab("security")}
                            className={
                              activeTab === "security"
                                ? "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                                : ""
                            }
                          >
                            <Lock className="h-4 w-4 mr-2" />
                            Security
                          </TabsTrigger>
                          <TabsTrigger
                            value="settings"
                            onClick={() => setActiveTab("settings")}
                            className={
                              activeTab === "settings"
                                ? "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                                : ""
                            }
                          >
                            <Settings className="h-4 w-4 mr-2" />
                            Settings
                          </TabsTrigger>
                        </TabsList>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Usage Statistics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-sm">Total Sessions</span>
                        </div>
                        <span className="font-medium">24</span>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <BarChart3 className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-sm">Avg. Engagement</span>
                        </div>
                        <span className="font-medium">78%</span>
                      </div>
                      <Button variant="outline" className="w-full mt-2">
                        View Analytics
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Main Content */}
              <div className="md:w-3/4">
                <Tabs value={activeTab} className="w-full">
                  <TabsContent value="profile" className="mt-0">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                          <CardTitle>Profile Information</CardTitle>
                          <CardDescription>
                            Manage your personal information and how it appears to others.
                          </CardDescription>
                        </div>
                        <Button variant="outline" size="icon" onClick={() => setIsEditing(!isEditing)}>
                          {isEditing ? <Save className="h-4 w-4" /> : <Edit className="h-4 w-4" />}
                          <span className="sr-only">{isEditing ? "Save" : "Edit"} profile</span>
                        </Button>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="name">Full Name</Label>
                              {isEditing ? (
                                <Input id="name" name="name" value={profileData.name} onChange={handleChange} />
                              ) : (
                                <div className="p-2 border rounded-md bg-muted">{profileData.name}</div>
                              )}
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email">Email</Label>
                              {isEditing ? (
                                <Input
                                  id="email"
                                  name="email"
                                  type="email"
                                  value={profileData.email}
                                  onChange={handleChange}
                                />
                              ) : (
                                <div className="p-2 border rounded-md bg-muted">{profileData.email}</div>
                              )}
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="role">Role</Label>
                              {isEditing ? (
                                <Input id="role" name="role" value={profileData.role} onChange={handleChange} />
                              ) : (
                                <div className="p-2 border rounded-md bg-muted">{profileData.role}</div>
                              )}
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="institution">Institution</Label>
                              {isEditing ? (
                                <Input
                                  id="institution"
                                  name="institution"
                                  value={profileData.institution}
                                  onChange={handleChange}
                                />
                              ) : (
                                <div className="p-2 border rounded-md bg-muted">{profileData.institution}</div>
                              )}
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="bio">Bio</Label>
                            {isEditing ? (
                              <Textarea
                                id="bio"
                                name="bio"
                                value={profileData.bio}
                                onChange={handleChange}
                                className="min-h-[100px]"
                              />
                            ) : (
                              <div className="p-2 border rounded-md bg-muted min-h-[100px]">{profileData.bio}</div>
                            )}
                          </div>
                          {isEditing && (
                            <div className="flex justify-end">
                              <Button onClick={handleSave}>Save Changes</Button>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="security" className="mt-0">
                    <Card>
                      <CardHeader>
                        <CardTitle>Security Settings</CardTitle>
                        <CardDescription>Manage your password and account security preferences.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <form onSubmit={handlePasswordChange} className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="current-password">Current Password</Label>
                            <Input id="current-password" type="password" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="new-password">New Password</Label>
                            <Input id="new-password" type="password" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="confirm-password">Confirm New Password</Label>
                            <Input id="confirm-password" type="password" required />
                          </div>
                          <Button type="submit">Change Password</Button>
                        </form>

                        <div className="mt-8 pt-6 border-t">
                          <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Add an extra layer of security to your account by enabling two-factor authentication.
                          </p>
                          <Button variant="outline" className="mt-4">
                            Enable 2FA
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="settings" className="mt-0">
                    <Card>
                      <CardHeader>
                        <CardTitle>Notification Settings</CardTitle>
                        <CardDescription>Manage how and when you receive notifications.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label htmlFor="email-notifications">Email Notifications</Label>
                              <p className="text-sm text-muted-foreground">
                                Receive notifications about your account via email.
                              </p>
                            </div>
                            <Switch
                              id="email-notifications"
                              defaultChecked
                              onCheckedChange={handleNotificationToggle}
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label htmlFor="browser-notifications">Browser Notifications</Label>
                              <p className="text-sm text-muted-foreground">
                                Receive notifications in your browser when using the application.
                              </p>
                            </div>
                            <Switch
                              id="browser-notifications"
                              defaultChecked
                              onCheckedChange={handleNotificationToggle}
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label htmlFor="weekly-digest">Weekly Digest</Label>
                              <p className="text-sm text-muted-foreground">
                                Receive a weekly summary of your engagement analytics.
                              </p>
                            </div>
                            <Switch id="weekly-digest" onCheckedChange={handleNotificationToggle} />
                          </div>
                        </div>

                        <div className="mt-8 pt-6 border-t">
                          <h3 className="text-lg font-medium">Privacy Settings</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Control how your data is used and shared within the platform.
                          </p>
                          <div className="mt-4 space-y-6">
                            <div className="flex items-center justify-between">
                              <div className="space-y-0.5">
                                <Label htmlFor="data-collection">Data Collection</Label>
                                <p className="text-sm text-muted-foreground">
                                  Allow us to collect anonymized usage data to improve the product.
                                </p>
                              </div>
                              <Switch id="data-collection" defaultChecked onCheckedChange={handleNotificationToggle} />
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="space-y-0.5">
                                <Label htmlFor="share-analytics">Share Analytics</Label>
                                <p className="text-sm text-muted-foreground">
                                  Share your engagement analytics with your institution.
                                </p>
                              </div>
                              <Switch id="share-analytics" defaultChecked onCheckedChange={handleNotificationToggle} />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

