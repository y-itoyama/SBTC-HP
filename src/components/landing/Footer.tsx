export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 py-8 text-center sm:flex-row sm:justify-between">
        <p className="text-sm text-muted-foreground">
          SportsBizTech Consortium (SBTC) 設立準備委員会
        </p>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} SBTC. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
