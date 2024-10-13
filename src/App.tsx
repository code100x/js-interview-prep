'use client'

import React, { useState, useEffect } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow, twilight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger, DrawerFooter } from "@/components/ui/drawer"
import { MoonIcon, SunIcon, SearchIcon, HomeIcon, PlusCircleIcon, UserIcon, ThumbsUpIcon, ThumbsDownIcon, MessageSquareIcon, ChevronLeftIcon, ChevronRightIcon, ArrowLeftIcon, LogInIcon, CopyIcon, TrendingUpIcon, BookmarkIcon, TagIcon, FilterIcon, BellIcon, SettingsIcon, HelpCircleIcon, AwardIcon, CheckCircleIcon, XCircleIcon, AlertTriangleIcon, BarChartIcon, FileTextIcon, MenuIcon, EditIcon } from 'lucide-react'

// Custom hook for media query
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  }, [matches, query])

  return matches
}

export default function ResponsiveQAPlatform() {
  const [darkMode, setDarkMode] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activeTab, setActiveTab] = useState("home")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [currentQuestion, setCurrentQuestion] = useState<any>(null)
  const [showCommentPage, setShowCommentPage] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)
  const [newQuestionTitle, setNewQuestionTitle] = useState("")
  const [newQuestionContent, setNewQuestionContent] = useState("")
  const [newQuestionCode, setNewQuestionCode] = useState("")
  const [newQuestionTags, setNewQuestionTags] = useState("")
  const [newQuestionBounty, setNewQuestionBounty] = useState(0)
  const [newComment, setNewComment] = useState("")
  const [sortBy, setSortBy] = useState("newest")
  const [showFilters, setShowFilters] = useState(false)
  const [userReputation, setUserReputation] = useState(100)
  const [notifications, setNotifications] = useState<string[]>([])
  const [showNotifications, setShowNotifications] = useState(false)
  const [userProfile, setUserProfile] = useState({ name: "John Doe", email: "john@example.com", avatar: "/placeholder.svg?height=40&width=40" })
  const [showUserProfile, setShowUserProfile] = useState(false)
  const [showHelpCenter, setShowHelpCenter] = useState(false)
  const [acceptedAnswers, setAcceptedAnswers] = useState<number[]>([])
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [editingQuestion, setEditingQuestion] = useState<any>(null)
  const [showEditQuestionDialog, setShowEditQuestionDialog] = useState(false)
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
  const [questionToDelete, setQuestionToDelete] = useState<number | null>(null)

  const isDesktop = useMediaQuery("(min-width: 768px)")

  const [questions, setQuestions] = useState([
    {
      id: 1,
      title: "How to implement a binary search tree in Python?",
      content: "I'm trying to implement a binary search tree in Python but I'm struggling with the insertion method. Can someone provide a clear explanation or example?",
      code: `
class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinarySearchTree:
    def __init__(self):
        self.root = None

    def insert(self, value):
        if not self.root:
            self.root = Node(value)
            return

        current = self.root
        while True:
            if value < current.value:
                if current.left is None:
                    current.left = Node(value)
                    break
                current = current.left
            else:
                if current.right is None:
                    current.right = Node(value)
                    break
                current = current.right
      `,
      tags: ["python", "dsa", "binary-tree"],
      answers: [
        { id: 1, user: "Alice", content: "Here's a basic implementation of a binary search tree in Python...", createdAt: "2023-06-15T11:30:00Z", votes: 5 },
        { id: 2, user: "Bob", content: "To add to Alice's answer, you might want to consider implementing other methods...", createdAt: "2023-06-15T12:45:00Z", votes: 3 }
      ],
      votes: 15,
      views: 120,
      askedBy: "John Doe",
      askedAt: "2023-06-15T10:30:00Z",
      avatar: "/placeholder.svg?height=40&width=40",
      bounty: 100,
      bookmarked: false,
      bountyAwarded: false
    },
  ])

  const allTags = ['all', 'ai', 'ml', 'dsa', 'css', 'html', 'javascript', 'react', 'node', 'python', 'java']

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode(!darkMode)

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn)
    if (!isLoggedIn) {
      addNotification("Welcome back! You've successfully logged in.")
    } else {
      addNotification("You've been logged out. See you next time!")
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    filterAndSortQuestions()
  }

  const handleVote = (questionId: number, increment: number) => {
    setQuestions(questions.map(q => 
      q.id === questionId ? { ...q, votes: q.votes + increment } : q
    ))
    setUserReputation(prev => prev + increment)
    addNotification(`You've ${increment > 0 ? 'upvoted' : 'downvoted'} a question. Your reputation is now ${userReputation + increment}.`)
  }

  const handleAnswerVote = (questionId: number, answerId: number, increment: number) => {
    setQuestions(questions.map(q => 
      q.id === questionId ? {
        ...q,
        answers: q.answers.map(a => 
          a.id === answerId ? { ...a, votes: a.votes + increment } : a
        )
      } : q
    ))
    setUserReputation(prev => prev + increment)
    addNotification(`You've ${increment > 0 ? 'upvoted' : 'downvoted'} an answer. Your reputation is now ${userReputation + increment}.`)
  }

  const handleAskQuestion = () => {
    const newQuestion = {
      id: questions.length + 1,
      title: newQuestionTitle,
      content: newQuestionContent,
      code: newQuestionCode,
      tags: newQuestionTags.split(',').map(tag => tag.trim()),
      answers: [],
      votes: 0,
      views: 0,
      askedBy: userProfile.name,
      askedAt: new Date().toISOString(),
      avatar: userProfile.avatar,
      bounty: newQuestionBounty,
      bookmarked: false,
      bountyAwarded: false
    }
    setQuestions([newQuestion, ...questions])
    setActiveTab("home")
    setNewQuestionTitle("")
    setNewQuestionContent("")
    setNewQuestionCode("")
    setNewQuestionTags("")
    setNewQuestionBounty(0)
    addNotification("Your question has been successfully posted!")
  }

  const handleTagSelect = (tag: string) => {
    if (tag === 'all') {
      setSelectedTags(['all'])
    } else {
      setSelectedTags(prev => 
        prev.includes(tag) 
          ? prev.filter(t => t !== tag && t !== 'all')
          : [...prev.filter(t => t !== 'all'), tag]
      )
    }
    filterAndSortQuestions()
  }

  const filterAndSortQuestions = () => {
    let filteredQuestions = questions.filter(q => 
      (q.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.content.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedTags.length === 0 || selectedTags.includes('all') || selectedTags.some(tag => q.tags.includes(tag)))
    )

    switch (sortBy) {
      case "newest":
        filteredQuestions.sort((a, b) => new Date(b.askedAt).getTime() - new Date(a.askedAt).getTime())
        break
      case "votes":
        filteredQuestions.sort((a, b) => b.votes - a.votes)
        break
      case "views":
        filteredQuestions.sort((a, b) => b.views - a.views)
        break
      case "bounty":
        filteredQuestions.sort((a, b) => b.bounty - a.bounty)
        break
    }

    setQuestions(filteredQuestions)
    setCurrentPage(1)
  }

  const itemsPerPage = 5
  const pageCount = Math.ceil(questions.length / itemsPerPage)
  const paginatedQuestions = questions.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const openCommentPage = (question: any) => {
    setCurrentQuestion(question)
    setShowCommentPage(true)
    setQuestions(questions.map(q => 
      q.id === question.id ? { ...q, views: q.views + 1 } : q
    ))
  }

  const handleAddComment = () => {
    if (currentQuestion) {
      const newAnswer = {
        id: currentQuestion.answers.length + 1,
        user: userProfile.name,
        content: newComment,
        createdAt: new Date().toISOString(),
        votes: 0
      }
      const updatedQuestion = {
        ...currentQuestion,
        answers: [...currentQuestion.answers, newAnswer]
      }
      setQuestions(questions.map(q => q.id === currentQuestion.id ? updatedQuestion : q))
      setCurrentQuestion(updatedQuestion)
      setNewComment("")
      addNotification("Your answer has been posted successfully!")
      setUserReputation(prev => prev + 5)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      addNotification("Code copied to clipboard!")
    }, (err) => {
      console.error('Could not copy text: ', err)
      addNotification("Failed to copy code. Please try again.")
    })
  }

  const toggleBookmark = (questionId: number) => {
    setQuestions(questions.map(q => 
      q.id === questionId ? { ...q, bookmarked: !q.bookmarked } : q
    ))
    addNotification(questions.find(q => q.id === questionId)?.bookmarked 
      ? "Question removed from bookmarks." 
      : "Question added to bookmarks!")
  }

  const addNotification = (message: string) => {
    setNotifications(prev => [message, ...prev])
  }

  const clearNotifications = () => {
    setNotifications([])
    setShowNotifications(false)
  }

  const acceptAnswer = (questionId: number, answerId: number) => {
    setAcceptedAnswers(prev => [...prev, answerId])
    
    const updatedQuestions = questions.map(q => {
      if (q.id === questionId) {
        const answerAuthor = q.answers.find(a => a.id === answerId)?.user
        return {
          ...q,
          bountyAwarded: true,
          answers: q.answers.map(a => 
            a.id === answerId ? { ...a, isAccepted: true } : a
          )
        }
      }
      return q
    })
    
    setQuestions(updatedQuestions)
    
    const question = questions.find(q => q.id === questionId)
    if (question) {
      const answerAuthor = question.answers.find(a => a.id === answerId)?.user
      addNotification(`Bounty of ${question.bounty} has been awarded to ${answerAuthor} for their answer!`)
      setUserReputation(prev => prev + 2)
    }
  }

  const handleReportQuestion = (questionId: number) => {
    addNotification("Thank you for your report. Our moderators will review it shortly.")
  }

  const handleShareQuestion = (questionId: number) => {
    const questionUrl = `https://example.com/question/${questionId}`
    navigator.clipboard.writeText(questionUrl).then(() => {
      addNotification("Question link copied to clipboard!")
    }, (err) => {
      console.error('Could not copy link: ', err)
      addNotification("Failed to copy question link. Please try again.")
    })
  }

  const handleEditQuestion = (question: any) => {
    setEditingQuestion(question)
    setShowEditQuestionDialog(true)
  }

  const handleUpdateQuestion = () => {
    if (editingQuestion) {
      const updatedQuestions = questions.map(q => 
        q.id === editingQuestion.id ? {
          ...q,
          title: editingQuestion.title,
          content: editingQuestion.content,
          code: editingQuestion.code,
          tags: editingQuestion.tags,
          bounty: editingQuestion.bounty
        } : q
      )
      setQuestions(updatedQuestions)
      setShowEditQuestionDialog(false)
      setEditingQuestion(null)
      addNotification("Your question has been updated successfully!")
    }
  }

  const handleDeleteQuestion = (questionId: number) => {
    setQuestionToDelete(questionId)
    setShowDeleteConfirmation(true)
  }

  const confirmDeleteQuestion = () => {
    if (questionToDelete) {
      const updatedQuestions = questions.filter(q => q.id !== questionToDelete)
      setQuestions(updatedQuestions)
      setShowDeleteConfirmation(false)
      setQuestionToDelete(null)
      addNotification("Your question has been deleted successfully!")
    }
  }

  const EditQuestionDialog = isDesktop ? Dialog : Drawer

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Q&A Platform</h1>
          <nav className="hidden md:flex items-center space-x-4">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="home" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                  <HomeIcon className="w-4 h-4 mr-2" />
                  Home
                </TabsTrigger>
                <TabsTrigger value="ask" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">
                  <PlusCircleIcon className="w-4 h-4 mr-2" />
                  Ask
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" onClick={() => setShowNotifications(!showNotifications)}>
                    <BellIcon className="h-4 w-4" />
                    {notifications.length > 0 && (
                      <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">{notifications.length}</span>
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Notifications</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Switch
              checked={darkMode}
              onCheckedChange={toggleDarkMode}
              className="ml-4"
            />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
                    {darkMode ? <SunIcon className="text-yellow-400" /> : <MoonIcon className="text-gray-600" />}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{darkMode ? "Light Mode" : "Dark Mode"}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <UserIcon className="text-blue-500" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onSelect={() => setShowUserProfile(true)}>
                    <UserIcon className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => setActiveTab("bookmarks")}>
                    <BookmarkIcon className="mr-2 h-4 w-4" />
                    <span>Bookmarks</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onSelect={toggleLogin}>
                    <LogInIcon className="mr-2 h-4 w-4" />
                    <span>Log Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-purple-500 hover:bg-purple-600 text-white flex items-center">
                    <LogInIcon className="w-4 h-4 mr-2" />
                    Sign In
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{showSignUp ? "Sign Up" : "Sign In"}</DialogTitle>
                    <DialogDescription>
                      {showSignUp ? "Create a new account" : "Enter your credentials to sign in"}
                    </DialogDescription>
                  </DialogHeader>
                  <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); toggleLogin(); }}>
                    {showSignUp && (
                      <div>
                        <Label htmlFor="name" className="text-gray-700 dark:text-gray-200">Name</Label>
                        <Input id="name" placeholder="Enter your name" required className="mt-1" />
                      </div>
                    )}
                    <div>
                      <Label htmlFor="email" className="text-gray-700 dark:text-gray-200">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="password" className="text-gray-700 dark:text-gray-200">Password</Label>
                      <Input id="password" type="password" placeholder="Enter your password" required className="mt-1" />
                    </div>
                    <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                      {showSignUp ? "Sign Up" : "Sign In"}
                    </Button>
                  </form>
                  <div className="mt-4 text-center">
                    <Button variant="link" onClick={() => setShowSignUp(!showSignUp)}>
                      {showSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            )}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" onClick={() => setShowHelpCenter(true)}>
                    <HelpCircleIcon className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Help Center</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  Navigate the Q&A Platform
                </SheetDescription>
              </SheetHeader>
              <div className="mt-4 space-y-4">
                <Button variant="ghost" className="w-full justify-start" onClick={() => { setActiveTab("home"); setIsMobileMenuOpen(false); }}>
                  <HomeIcon className="w-4 h-4 mr-2" />
                  Home
                </Button>
                <Button variant="ghost" className="w-full justify-start" onClick={() => { setActiveTab("ask"); setIsMobileMenuOpen(false); }}>
                  <PlusCircleIcon className="w-4 h-4 mr-2" />
                  Ask
                </Button>
                {isLoggedIn ? (
                  <>
                    <Button variant="ghost" className="w-full justify-start" onClick={() => { setShowUserProfile(true); setIsMobileMenuOpen(false); }}>
                      <UserIcon className="w-4 h-4 mr-2" />
                      Profile
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" onClick={() => { setActiveTab("bookmarks"); setIsMobileMenuOpen(false); }}>
                      <BookmarkIcon className="w-4 h-4 mr-2" />
                      Bookmarks
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" onClick={() => { toggleLogin(); setIsMobileMenuOpen(false); }}>
                      <LogInIcon className="w-4 h-4 mr-2" />
                      Log Out
                    </Button>
                  </>
                ) : (
                  <Button variant="ghost" className="w-full justify-start" onClick={() => { setShowSignUp(false); setIsMobileMenuOpen(false); }}>
                    <LogInIcon className="w-4 h-4 mr-2" />
                    Sign In
                  </Button>
                )}
                <Button variant="ghost" className="w-full justify-start" onClick={() => { setShowHelpCenter(true); setIsMobileMenuOpen(false); }}>
                  <HelpCircleIcon className="w-4 h-4 mr-2" />
                  Help Center
                </Button>
                <div className="flex items-center justify-between">
                  <span>Dark Mode</span>
                  <Switch
                    checked={darkMode}
                    onCheckedChange={(checked) => { setDarkMode(checked); setIsMobileMenuOpen(false); }}
                  />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </header>

        {showNotifications && (
          <Alert className="mb-4">
            <AlertTitle className="flex justify-between items-center">
              <span>Notifications</span>
              <Button variant="outline" size="sm" onClick={clearNotifications}>Clear All</Button>
            </AlertTitle>
            <AlertDescription>
              <ScrollArea className="h-[200px]">
                {notifications.map((notification, index) => (
                  <div key={index} className="py-2 border-b last:border-b-0">
                    {notification}
                  </div>
                ))}
              </ScrollArea>
            </AlertDescription>
          </Alert>
        )}

        {showUserProfile && (
          <Dialog open={showUserProfile} onOpenChange={setShowUserProfile}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>User Profile</DialogTitle>
              </DialogHeader>
              <div className="flex items-center space-x-4 mb-4">
                <Avatar>
                  <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
                  <AvatarFallback>{userProfile.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{userProfile.name}</h3>
                  <p className="text-sm text-gray-500">{userProfile.email}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <Label>Reputation</Label>
                  <p className="text-2xl font-bold">{userReputation}</p>
                </div>
                <div>
                  <Label>Questions Asked</Label>
                  <p>{questions.filter(q => q.askedBy === userProfile.name).length}</p>
                </div>
                <div>
                  <Label>Answers Given</Label>
                  <p>{questions.reduce((total, q) => total + q.answers.filter(a => a.user === userProfile.name).length, 0)}</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}

        {showHelpCenter && (
          <Dialog open={showHelpCenter} onOpenChange={setShowHelpCenter}>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Help Center</DialogTitle>
              </DialogHeader>
              <ScrollArea className="h-[300px] sm:h-[400px] pr-4">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">How to Ask a Question</h3>
                    <ol className="list-decimal list-inside space-y-1">
                      <li>Click on the "Ask" tab in the navigation bar.</li>
                      <li>Fill in the title, description, and any relevant code.</li>
                      <li>Add appropriate tags to categorize your question.</li>
                      <li>Set a bounty if you want to attract more attention.</li>
                      <li>Click "Submit Question" to post.</li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">How to Answer</h3>
                    <ol className="list-decimal list-inside space-y-1">
                      <li>Browse questions or use the search function to find a question you can answer.</li>
                      <li>Click on the question to view its details.</li>
                      <li>Scroll to the bottom of the page to find the answer form.</li>
                      <li>Write your answer, including any necessary code or explanations.</li>
                      <li>Click "Submit Answer" to post your response.</li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Reputation System</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Gain reputation by receiving upvotes on your questions and answers.</li>
                      <li>Lose reputation for downvotes received.</li>
                      <li>Earn extra reputation for accepted answers.</li>
                      <li>Higher reputation unlocks more privileges on the platform.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Tagging</h3>
                    <p>Use relevant tags to categorize your question. This helps others find your question and increases the chances of getting an answer.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Code Formatting</h3>
                    <p>When including code in your question or answer, use the code block feature to ensure proper formatting and syntax highlighting.</p>
                  </div>
                </div>
              </ScrollArea>
            </DialogContent>
          </Dialog>
        )}

        <main>
          {!showCommentPage ? (
            <>
              <div className="mb-8 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                <form onSubmit={handleSearch} className="w-full md:w-auto flex-grow relative">
                  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input 
                    className="pl-10 bg-white dark:bg-gray-700 w-full" 
                    placeholder="Search questions here" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </form>
                <div className="flex items-center space-x-2">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="votes">Most Votes</SelectItem>
                      <SelectItem value="views">Most Views</SelectItem>
                      <SelectItem value="bounty">Highest Bounty</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button onClick={() => setShowFilters(!showFilters)}>
                    <FilterIcon className="w-4 h-4 mr-2" />
                    Filters
                  </Button>
                </div>
              </div>

              {showFilters && (
                <div className="mb-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-2">Filter by Tags</h3>
                  <ScrollArea className="h-20">
                    <div className="flex flex-wrap gap-2">
                      {allTags.map((tag) => (
                        <Badge
                          key={tag}
                          variant={selectedTags.includes(tag) ? "default" : "secondary"}
                          className={`cursor-pointer ${selectedTags.includes(tag) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'}`}
                          onClick={() => handleTagSelect(tag)}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              )}

              <Tabs value={activeTab}>
                <TabsContent value="home">
                  {paginatedQuestions.length > 0 ? paginatedQuestions.map((question) => (
                    <Card key={question.id} className="mb-4 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex items-center space-x-4 mb-2">
                          <Avatar>
                            <AvatarImage src={question.avatar} alt={question.askedBy} />
                            <AvatarFallback>{question.askedBy[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-blue-600 dark:text-blue-400">{question.askedBy}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {new Date(question.askedAt).toLocaleString()}
                            </p>
                          </div>
                        </div>
                        <CardTitle className="text-xl text-blue-600 dark:text-blue-400">{question.title}</CardTitle>
                        <div className="flex flex-wrap justify-between items-center">
                          <div className="flex flex-wrap gap-2">
                            {question.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">{tag}</Badge>
                            ))}
                          </div>
                          <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                            Bounty: {question.bounty}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 dark:text-gray-300">{question.content}</p>
                        {question.code && (
                          <div className="relative mt-4">
                            <SyntaxHighlighter 
                              language="python" 
                              style={darkMode ? twilight : tomorrow}
                              customStyle={{
                                padding: '1rem',
                                borderRadius: '0.5rem',
                                fontSize: '0.875rem',
                              }}
                            >
                              {question.code}
                            </SyntaxHighlighter>
                            <Button
                              size="sm"
                              variant="secondary"
                              className="absolute top-2 right-2"
                              onClick={() => copyToClipboard(question.code)}
                            >
                              <CopyIcon className="w-4 h-4 mr-2" />
                              Copy
                            </Button>
                          </div>
                        )}
                        <div className="mt-4 space-y-4">
                          {question.answers.slice(0, 2).map((answer) => (
                            <div key={answer.id} className="flex items-start space-x-4 bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                              <Avatar>
                                <AvatarFallback>{answer.user[0]}</AvatarFallback>
                              </Avatar>
                              <div className="flex-grow">
                                <p className="font-semibold text-blue-500 dark:text-blue-300">{answer.user}:</p>
                                <p className="text-gray-700 dark:text-gray-200">{answer.content}</p>
                                <div className="flex items-center mt-2">
                                  <Button variant="ghost" size="sm" onClick={() => handleAnswerVote(question.id, answer.id, 1)} className="text-green-500 hover:text-green-600">
                                    <ThumbsUpIcon className="w-4 h-4 mr-1" />
                                  </Button>
                                  <span className="text-sm text-gray-500 dark:text-gray-400 mx-2">{answer.votes}</span>
                                  <Button variant="ghost" size="sm" onClick={() => handleAnswerVote(question.id, answer.id, -1)} className="text-red-500 hover:text-red-600">
                                    <ThumbsDownIcon className="w-4 h-4 mr-1" />
                                  </Button>
                                  {isLoggedIn && question.askedBy === userProfile.name && !question.bountyAwarded && (
                                    <Button variant="ghost" size="sm" onClick={() => acceptAnswer(question.id, answer.id)} className="text-green-500 hover:text-green-600 ml-2">
                                      <AwardIcon className="w-4 h-4 mr-1" />
                                      Award Bounty
                                    </Button>
                                  )}
                                  {answer.isAccepted && (
                                    <Badge variant="success" className="ml-2">
                                      <AwardIcon className="w-4 h-4 mr-1" />
                                      Bounty Awarded
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter>
                        <div className="flex flex-wrap items-center justify-between w-full gap-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <Button variant="ghost" size="sm" onClick={() => handleVote(question.id, 1)} className="text-green-500 hover:text-green-600 flex items-center">
                              <ThumbsUpIcon className="w-4 h-4 mr-2" />
                              Upvote
                            </Button>
                            <Button variant="ghost" size="sm" onClick={() => handleVote(question.id, -1)} className="text-red-500 hover:text-red-600 flex items-center">
                              <ThumbsDownIcon className="w-4 h-4 mr-2" />
                              Downvote
                            </Button>
                            <span className="text-gray-600 dark:text-gray-400">Votes: {question.votes}</span>
                            <Button variant="ghost" size="sm" onClick={() => openCommentPage(question)} className="text-blue-500 hover:text-blue-600 flex items-center">
                              <MessageSquareIcon className="w-4 h-4 mr-2" />
                              Answer
                            </Button>
                            <Button variant="ghost" size="sm" onClick={() => toggleBookmark(question.id)} className={`flex items-center ${question.bookmarked ? 'text-yellow-500' : 'text-gray-500'}`}>
                              <BookmarkIcon className="w-4 h-4 mr-2" />
                              {question.bookmarked ? 'Bookmarked' : 'Bookmark'}
                            </Button>
                          </div>
                          <div className="flex items-center gap-2">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <SettingsIcon className="w-4 h-4 mr-2" />
                                  More
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent>
                                {isLoggedIn && question.askedBy === userProfile.name && (
                                  <>
                                    <DropdownMenuItem onSelect={() => handleEditQuestion(question)}>
                                      <EditIcon className="w-4 h-4 mr-2" />
                                      Edit
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onSelect={() => handleDeleteQuestion(question.id)}>
                                      <XCircleIcon className="w-4 h-4 mr-2" />
                                      Delete
                                    </DropdownMenuItem>
                                  </>
                                )}
                                <DropdownMenuItem onSelect={() => handleReportQuestion(question.id)}>
                                  <AlertTriangleIcon className="w-4 h-4 mr-2" />
                                  Report
                                </DropdownMenuItem>
                                <DropdownMenuItem onSelect={() => handleShareQuestion(question.id)}>
                                  <FileTextIcon className="w-4 h-4 mr-2" />
                                  Share
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              <TrendingUpIcon className="w-4 h-4 inline mr-1" />
                              {question.views} views
                            </span>
                          </div>
                        </div>
                      </CardFooter>
                    </Card>
                  )) : (
                    <p className="text-center text-gray-600 dark:text-gray-300">No questions found.</p>
                  )}
                  <div className="flex justify-center mt-4 space-x-2">
                    <Button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="bg-blue-500 hover:bg-blue-600 text-white disabled:bg-blue-300"
                    >
                      <ChevronLeftIcon className="w-4 h-4" />
                    </Button>
                    {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
                      <Button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        variant={currentPage === page ? "default" : "outline"}
                        className={`px-3 py-1 ${currentPage === page ? "bg-blue-500 text-white" : "text-blue-500 dark:text-blue-400"}`}
                      >
                        {page}
                      </Button>
                    ))}
                    <Button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, pageCount))}
                      disabled={currentPage === pageCount}
                      className="bg-blue-500 hover:bg-blue-600 text-white disabled:bg-blue-300"
                    >
                      <ChevronRightIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="ask">
                  <Card className="bg-white dark:bg-gray-800 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-2xl text-blue-600 dark:text-blue-400">Ask a Question</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleAskQuestion(); }}>
                        <div>
                          <Label htmlFor="title" className="text-lg text-gray-700 dark:text-gray-200">Title</Label>
                          <Input 
                            id="title" 
                            value={newQuestionTitle}
                            onChange={(e) => setNewQuestionTitle(e.target.value)}
                            placeholder="Enter your question title" 
                            required 
                            className="mt-1" 
                          />
                        </div>
                        <div>
                          <Label htmlFor="content" className="text-lg text-gray-700 dark:text-gray-200">Description</Label>
                          <Textarea 
                            id="content" 
                            value={newQuestionContent}
                            onChange={(e) => setNewQuestionContent(e.target.value)}
                            placeholder="Describe your question in detail" 
                            required 
                            className="mt-1" 
                            rows={5}
                          />
                        </div>
                        <div>
                          <Label htmlFor="code" className="text-lg text-gray-700 dark:text-gray-200">Code (optional)</Label>
                          <Textarea 
                            id="code" 
                            value={newQuestionCode}
                            onChange={(e) => setNewQuestionCode(e.target.value)}
                            placeholder="Enter your code here" 
                            className="mt-1 font-mono" 
                            rows={10}
                          />
                        </div>
                        <div>
                          <Label htmlFor="tags" className="text-lg text-gray-700 dark:text-gray-200">Tags</Label>
                          <Input 
                            id="tags" 
                            value={newQuestionTags}
                            onChange={(e) => setNewQuestionTags(e.target.value)}
                            placeholder="Enter tags (comma separated)" 
                            required 
                            className="mt-1" 
                          />
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                          <div>
                            <Label htmlFor="bounty" className="text-lg text-gray-700 dark:text-gray-200">Bounty</Label>
                            <Input 
                              id="bounty" 
                              type="number" 
                              value={newQuestionBounty}
                              onChange={(e) => setNewQuestionBounty(Number(e.target.value))}
                              className="w-24 mt-1" 
                              placeholder="100" 
                              required 
                            />
                          </div>
                          <Button type="submit" className="bg-green-500 hover:bg-green-600 text-white w-full sm:w-auto">
                            Submit Question
                          </Button>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="bookmarks">
                  <h2 className="text-2xl font-bold mb-4">Bookmarked Questions</h2>
                  {questions.filter(q => q.bookmarked).map((question) => (
                    <Card key={question.id} className="mb-4 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle className="text-xl text-blue-600 dark:text-blue-400">{question.title}</CardTitle>
                        <div className="flex flex-wrap gap-2">
                          {question.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">{tag}</Badge>
                          ))}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 dark:text-gray-300">{question.content.substring(0, 150)}...</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="link" onClick={() => openCommentPage(question)}>View Question</Button>
                      </CardFooter>
                    </Card>
                  ))}
                  {questions.filter(q => q.bookmarked).length === 0 && (
                    <p className="text-center text-gray-600 dark:text-gray-300">No bookmarked questions found.</p>
                  )}
                </TabsContent>
              </Tabs>
            </>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <Button onClick={() => setShowCommentPage(false)} className="mb-4 flex items-center">
                <ArrowLeftIcon className="w-4 h-4 mr-2" />
                Back to Questions
              </Button>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">{currentQuestion.title}</h2>
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar>
                    <AvatarImage src={currentQuestion.avatar} alt={currentQuestion.askedBy} />
                    <AvatarFallback>{currentQuestion.askedBy[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-blue-600 dark:text-blue-400">{currentQuestion.askedBy}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(currentQuestion.askedAt).toLocaleString()}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{currentQuestion.content}</p>
                {currentQuestion.code && (
                  <div className="relative mt-4 mb-4">
                    <SyntaxHighlighter 
                      language="python" 
                      style={darkMode ? twilight : tomorrow}
                      customStyle={{
                        padding: '1rem',
                        borderRadius: '0.5rem',
                        fontSize: '0.875rem',
                      }}
                    >
                      {currentQuestion.code}
                    </SyntaxHighlighter>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="absolute top-2 right-2"
                      onClick={() => copyToClipboard(currentQuestion.code)}
                    >
                      <CopyIcon className="w-4 h-4 mr-2" />
                      Copy
                    </Button>
                  </div>
                )}
                <div className="flex flex-wrap justify-between items-center mb-4">
                  <div className="flex flex-wrap gap-2">
                    {currentQuestion.tags.map((tag: string) => (
                      <Badge key={tag} variant="outline" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">{tag}</Badge>
                    ))}
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    Bounty: {currentQuestion.bounty}
                  </Badge>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Answers</h3>
                {currentQuestion.answers.length > 0 ? currentQuestion.answers.map((answer: any) => (
                  <div key={answer.id} className="mb-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-start space-x-4">
                      <Avatar>
                        <AvatarFallback>{answer.user[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-grow">
                        <p className="font-semibold text-blue-500 dark:text-blue-300">{answer.user}</p>
                        <p className="text-gray-700 dark:text-gray-200">{answer.content}</p>
                        <div className="flex items-center mt-2">
                          <Button variant="ghost" size="sm" onClick={() => handleAnswerVote(currentQuestion.id, answer.id, 1)} className="text-green-500 hover:text-green-600">
                            <ThumbsUpIcon className="w-4 h-4 mr-1" />
                          </Button>
                          <span className="text-sm text-gray-500 dark:text-gray-400 mx-2">{answer.votes}</span>
                          <Button variant="ghost" size="sm" onClick={() => handleAnswerVote(currentQuestion.id, answer.id, -1)} className="text-red-500 hover:text-red-600">
                            <ThumbsDownIcon className="w-4 h-4 mr-1" />
                          </Button>
                          {isLoggedIn && currentQuestion.askedBy === userProfile.name && !currentQuestion.bountyAwarded && (
                            <Button variant="ghost" size="sm" onClick={() => acceptAnswer(currentQuestion.id, answer.id)} className="text-green-500 hover:text-green-600 ml-2">
                              <AwardIcon className="w-4 h-4 mr-1" />
                              Award Bounty
                            </Button>
                          )}
                          {answer.isAccepted && (
                            <Badge variant="success" className="ml-2">
                              <AwardIcon className="w-4 h-4 mr-1" />
                              Bounty Awarded
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                          {new Date(answer.createdAt).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                )) : (
                  <p className="text-gray-600 dark:text-gray-300">No answers yet. Be the first to answer!</p>
                )}
              </div>
              <form onSubmit={(e) => { e.preventDefault(); handleAddComment(); }}>
                <Label htmlFor="comment" className="text-lg text-gray-700 dark:text-gray-200">Your Answer</Label>
                <Textarea 
                  id="comment"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Write your answer here"
                  required
                  className="mt-1 mb-4"
                  rows={5}
                />
                <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white">Submit Answer</Button>
              </form>
            </div>
          )}
        </main>
      </div>

      <EditQuestionDialog open={showEditQuestionDialog} onOpenChange={setShowEditQuestionDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Question</DialogTitle>
          </DialogHeader>
          <form onSubmit={(e) => { e.preventDefault(); handleUpdateQuestion(); }}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="edit-title">Title</Label>
                <Input
                  id="edit-title"
                  value={editingQuestion?.title || ''}
                  onChange={(e) => setEditingQuestion({ ...editingQuestion, title: e.target.value })}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="edit-content">Content</Label>
                <Textarea
                  id="edit-content"
                  value={editingQuestion?.content || ''}
                  onChange={(e) => setEditingQuestion({ ...editingQuestion, content: e.target.value })}
                  className="mt-1"
                  rows={5}
                />
              </div>
              <div>
                <Label htmlFor="edit-code">Code</Label>
                <Textarea
                  id="edit-code"
                  value={editingQuestion?.code || ''}
                  onChange={(e) => setEditingQuestion({ ...editingQuestion, code: e.target.value })}
                  className="mt-1"
                  rows={10}
                />
              </div>
              <div>
                <Label htmlFor="edit-tags">Tags</Label>
                <Input
                  id="edit-tags"
                  value={editingQuestion?.tags.join(', ') || ''}
                  onChange={(e) => setEditingQuestion({ ...editingQuestion, tags: e.target.value.split(',').map(tag => tag.trim()) })}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="edit-bounty">Bounty</Label>
                <Input
                  id="edit-bounty"
                  type="number"
                  value={editingQuestion?.bounty || 0}
                  onChange={(e) => setEditingQuestion({ ...editingQuestion, bounty: Number(e.target.value) })}
                  className="mt-1"
                />
              </div>
            </div>
            <DialogFooter className="mt-4">
              <Button type="button" variant="outline" onClick={() => setShowEditQuestionDialog(false)}>
                Cancel
              </Button>
              <Button type="submit">Update Question</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </EditQuestionDialog>

      <Dialog open={showDeleteConfirmation} onOpenChange={setShowDeleteConfirmation}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this question? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDeleteConfirmation(false)}>Cancel</Button>
            <Button variant="destructive" onClick={confirmDeleteQuestion}>Delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
