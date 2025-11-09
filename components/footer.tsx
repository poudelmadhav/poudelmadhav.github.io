export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-card border-t border-border py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground">© {currentYear} Madhav Paudel. All rights reserved.</p>
      </div>
    </footer>
  )
}
