import Sidebar from "@/components/dashboard/Sidebar";
import TopBar from "@/components/dashboard/TopBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#F8F9FA]">
      {/* Sidebar - компьютерде sticky, мобилдикте fixed */}
      <Sidebar />
      
      <div className="flex-1 flex flex-col min-w-0">
        {/* TopBar эми Сайдбардын жанында турат, үстүндө эмес */}
        <TopBar />
        
        <main className="p-4 md:p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}