// #3-2-1. app/dashboard/layout.tsx 파일 생성 및 적용 여부 테스트
import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      {/* lh:3-/dashboard로 접근 시 children으로 dashboard/page.tsx가 렌더링됨 */}
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}