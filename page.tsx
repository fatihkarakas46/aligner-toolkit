import Link from "next/link"
import { Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link className="flex items-center gap-2 font-semibold" href="#">
            AlignPro
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link className="font-medium" href="#">
              Shop
            </Link>
            <Link className="font-medium" href="#">
              About
            </Link>
            <Link className="font-medium" href="#">
              Reviews
            </Link>
            <Link className="font-medium" href="#">
              Contact
            </Link>
          </nav>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative">
          <div className="container flex flex-col items-center gap-4 py-12 text-center md:py-24">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Keep Your Aligners Clean & Fresh
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Professional-grade cleaning tools for your aligners. Dentist-approved and designed for daily use.
            </p>
            <Button className="mt-4" size="lg">
              Shop Now
            </Button>
            <div className="flex items-center gap-4 mt-8">
              <div className="flex items-center">
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
              </div>
              <p className="text-sm text-gray-500">5,000+ Happy Customers</p>
            </div>
          </div>
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
            <img
              alt="Aligner cleaning kit"
              className="object-cover w-full h-full"
              height={600}
              src="/placeholder.svg"
              style={{
                aspectRatio: "1920/600",
                objectFit: "cover",
              }}
              width={1920}
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24">
          <div className="container grid items-center gap-6 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Products</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Everything you need to keep your aligners clean and hygienic.
                </p>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center gap-4 p-6">
                  <img
                    alt="Cleaning Kit"
                    className="aspect-square overflow-hidden rounded-lg object-cover"
                    height={200}
                    src="/placeholder.svg"
                    width={200}
                  />
                  <h3 className="text-xl font-bold">Complete Cleaning Kit</h3>
                  <p className="text-sm text-gray-500">Everything you need for daily aligner care</p>
                  <Button className="w-full">Add to Cart - $29.99</Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center gap-4 p-6">
                  <img
                    alt="Cleaning Foam"
                    className="aspect-square overflow-hidden rounded-lg object-cover"
                    height={200}
                    src="/placeholder.svg"
                    width={200}
                  />
                  <h3 className="text-xl font-bold">Daily Cleaning Foam</h3>
                  <p className="text-sm text-gray-500">Quick & effective cleaning solution</p>
                  <Button className="w-full">Add to Cart - $14.99</Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center gap-4 p-6">
                  <img
                    alt="Travel Kit"
                    className="aspect-square overflow-hidden rounded-lg object-cover"
                    height={200}
                    src="/placeholder.svg"
                    width={200}
                  />
                  <h3 className="text-xl font-bold">Travel Kit</h3>
                  <p className="text-sm text-gray-500">Compact kit for on-the-go cleaning</p>
                  <Button className="w-full">Add to Cart - $19.99</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Why Choose AlignPro?</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Compare our features with other cleaning solutions
                </p>
              </div>
            </div>
            <div className="mt-8">
              <Tabs defaultValue="features" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="comparison">Comparison</TabsTrigger>
                </TabsList>
                <TabsContent value="features" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col items-center gap-2 p-4 text-center">
                      <div className="rounded-full bg-primary/10 p-3">
                        <BeakerIcon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold">Dentist Approved</h3>
                      <p className="text-sm text-gray-500">Recommended by dental professionals</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4 text-center">
                      <div className="rounded-full bg-primary/10 p-3">
                        <ShieldCheckIcon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold">Safe Materials</h3>
                      <p className="text-sm text-gray-500">Non-toxic and gentle on aligners</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4 text-center">
                      <div className="rounded-full bg-primary/10 p-3">
                        <ClockIcon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold">Quick & Easy</h3>
                      <p className="text-sm text-gray-500">Clean your aligners in minutes</p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="comparison" className="mt-6">
                  <div className="rounded-lg border">
                    <div className="grid grid-cols-4 gap-4 p-4">
                      <div className="font-semibold">Feature</div>
                      <div className="font-semibold">AlignPro</div>
                      <div className="font-semibold">Regular Cleaning</div>
                      <div className="font-semibold">Competitors</div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 border-t p-4">
                      <div>Dentist Approved</div>
                      <div>✓</div>
                      <div>✗</div>
                      <div>Some</div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 border-t p-4">
                      <div>Safe Materials</div>
                      <div>✓</div>
                      <div>✗</div>
                      <div>✓</div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 border-t p-4">
                      <div>Quick Clean</div>
                      <div>✓</div>
                      <div>✗</div>
                      <div>Some</div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Customers Say</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Read reviews from real AlignPro users
                </p>
              </div>
            </div>
            <div className="mt-8">
              <Carousel className="w-full max-w-xs mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg">
                <CarouselContent>
                  <CarouselItem>
                    <Card>
                      <CardContent className="flex flex-col gap-4 p-6">
                        <div className="flex items-center gap-2">
                          <Star className="h-5 w-5 fill-primary text-primary" />
                          <Star className="h-5 w-5 fill-primary text-primary" />
                          <Star className="h-5 w-5 fill-primary text-primary" />
                          <Star className="h-5 w-5 fill-primary text-primary" />
                          <Star className="h-5 w-5 fill-primary text-primary" />
                        </div>
                        <p className="text-sm">
                          "The best aligner cleaning kit I've used. Makes my daily cleaning routine so much easier!"
                        </p>
                        <div className="flex items-center gap-2">
                          <img
                            alt="Sarah M."
                            className="rounded-full"
                            height={40}
                            src="/placeholder.svg"
                            style={{
                              aspectRatio: "40/40",
                              objectFit: "cover",
                            }}
                            width={40}
                          />
                          <div>
                            <p className="font-semibold">Sarah M.</p>
                            <p className="text-sm text-gray-500">Verified Customer</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem>
                    <Card>
                      <CardContent className="flex flex-col gap-4 p-6">
                        <div className="flex items-center gap-2">
                          <Star className="h-5 w-5 fill-primary text-primary" />
                          <Star className="h-5 w-5 fill-primary text-primary" />
                          <Star className="h-5 w-5 fill-primary text-primary" />
                          <Star className="h-5 w-5 fill-primary text-primary" />
                          <Star className="h-5 w-5 fill-primary text-primary" />
                        </div>
                        <p className="text-sm">
                          "Great quality products and excellent customer service. Highly recommend!"
                        </p>
                        <div className="flex items-center gap-2">
                          <img
                            alt="John D."
                            className="rounded-full"
                            height={40}
                            src="/placeholder.svg"
                            style={{
                              aspectRatio: "40/40",
                              objectFit: "cover",
                            }}
                            width={40}
                          />
                          <div>
                            <p className="font-semibold">John D.</p>
                            <p className="text-sm text-gray-500">Verified Customer</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Subscribe & Save</h2>
                <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get 20% off when you subscribe to monthly deliveries
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-primary-foreground text-primary"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button variant="secondary">Subscribe</Button>
                </form>
                <p className="text-xs">By subscribing, you agree to our terms and conditions.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col gap-4 px-4 text-center md:flex-row md:gap-8 md:px-6">
          <p className="text-xs text-gray-500">© 2024 AlignPro. All rights reserved.</p>
          <nav className="flex gap-4 md:ml-auto">
            <Link className="text-xs text-gray-500" href="#">
              Terms
            </Link>
            <Link className="text-xs text-gray-500" href="#">
              Privacy
            </Link>
            <Link className="text-xs text-gray-500" href="#">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function BeakerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 3h15" />
      <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" />
      <path d="M6 14h12" />
    </svg>
  )
}

function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function ShieldCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

function ShoppingCart(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}

