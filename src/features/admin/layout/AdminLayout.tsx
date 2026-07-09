import { Link, Outlet } from "react-router";
import { fonts } from "@/shared/constants/typography";

export function AdminLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: fonts.sans }}>
      <header className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link to="/admin" className="font-semibold text-primary">
            Harithasuwa Admin
          </Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
            View site
          </Link>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-6 py-10">
        <Outlet />
      </main>
    </div>
  );
}
