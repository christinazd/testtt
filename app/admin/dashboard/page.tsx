import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import MenuItemsManager from '@/app/components/admin/MenuItemsManager';
import AdminHeader from '@/app/components/admin/AdminHeader';

export default async function AdminDashboard() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Manage your menu items and website content</p>
        </div>
        <MenuItemsManager />
      </main>
    </div>
  );
}
