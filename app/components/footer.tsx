export default function Footer() {
  return (
    <footer className="py-6 md:py-8 border-t">
      <div className="container flex flex-col md:flex-row justify-center items-center gap-4 text-center md:text-left">
        <div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Chloe Zhou. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

