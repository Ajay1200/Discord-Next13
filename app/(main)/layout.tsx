import { NavigationSidebar } from "@/components/navigations/NavigationSidebar";

const MainLayout = async ({
    children
}: {
    children: React.ReactNode;
}) => {
  return (
    <div className="h-full">
        <div className="hidden md:flex h-full w-[72px] bg-zinc-200 z-30 flex-col fixed inset-y-0">
         <NavigationSidebar />
        </div>
        <main className="md:pl-[72px] h-full">
            {children}
        </main>
    </div>
  )
}

export default MainLayout