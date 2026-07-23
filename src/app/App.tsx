import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Toaster } from "sonner";
import { SiteContentProvider } from "@/content";
import { AdminLayout } from "@/features/admin/layout/AdminLayout";
import { AdminDashboardPage } from "@/features/admin/pages/AdminDashboardPage";
import { InitialLoader } from "@/features/marketing/components/InitialLoader";
import { MarketingPage } from "@/features/marketing/MarketingPage";

export default function App() {
  return (
    <SiteContentProvider>
      <InitialLoader />
      <Toaster position="top-center" richColors closeButton />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MarketingPage />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboardPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </SiteContentProvider>
  );
}
