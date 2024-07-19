import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

export default function Site() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <BookIcon className="h-6 w-6" />
            <span className="text-xl font-bold">Welcome to GRE Testing Portal</span>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">The portal is now functional for GRE (2024-25)</h1>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">About the GRE Exam</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">What is the GRE?</h3>
                <p className="text-muted-foreground">
                  The GRE (Graduate Record Examination) is a standardized test that is an admissions requirement for
                  many graduate programs, including business, law, and doctoral programs.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Why take the GRE?</h3>
                <p className="text-muted-foreground">
                  The GRE is a crucial component of the graduate school application process. Many programs use GRE
                  scores as a factor in their admissions decisions, along with other materials like transcripts, letters
                  of recommendation, and personal statements.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">GRE Online Tests</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Card className="bg-background shadow-md">
                <CardHeader>
                  <CardTitle>Verbal Reasoning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Tests your reading comprehension, text completion, and sentence equivalence skills.
                  </p>
                </CardContent>
                <CardFooter />
              </Card>
              <Card className="bg-background shadow-md">
                <CardHeader>
                  <CardTitle>Quantitative Reasoning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Tests your problem-solving and data interpretation abilities.</p>
                </CardContent>
                <CardFooter />
              </Card>
              <Card className="bg-background shadow-md">
                <CardHeader>
                  <CardTitle>AWA(Analyzing an issue)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Tests your critical thinking and essay writing skills.</p>
                </CardContent>
                <CardFooter />
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 GRE Testing Portal</p>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="#" className="hover:underline" prefetch={false}>
              Home
            </Link>
            <Link href="https://vm5.github.io/homeasia/" className="hover:underline" prefetch={false}>
              GRE Online Tests
            </Link>
            <Link href="https://vm5.github.io/schedulegre/" className="hover:underline" prefetch={false}>
              Tentative Schedule(s)
            </Link>
            <Link href="https://vm5.github.io/contact/" className="hover:underline" prefetch={false}>
              Contact Us
            </Link>
            <Link href="https://vm5.github.io/faq/" className="hover:underline" prefetch={false}>
              FAQs
            </Link>
            <Link href="#" className="hover:underline" prefetch={false} />
          </nav>
        </div>
      </footer>
    </div>
  );
}

function BookIcon(props) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
