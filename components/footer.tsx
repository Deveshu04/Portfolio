export default function Footer() {
  return (
    <footer className="py-6 border-t border-primary/20">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Deveshu Pathak. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Designed and built on a remote star system.
        </p>
      </div>
    </footer>
  );
}
