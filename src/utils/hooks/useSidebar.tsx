import { useContext } from 'react';

import { SidebarControllsContext } from '@/components/common/SidebarControlls';

export default function useSidebar() {
  const context = useContext(SidebarControllsContext);
  if (context === undefined) {
    throw new Error(
      `useSidebar must be used within a SidebarControllsProvider`
    );
  }
  return context;
}
