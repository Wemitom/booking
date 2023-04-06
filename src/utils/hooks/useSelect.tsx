import { useContext } from 'react';

import { SelectContext } from '@/components/common/Select';

export default function useSelect() {
  const context = useContext(SelectContext);
  if (context === undefined) {
    throw new Error(`useSelect must be used within a SelectProvider`);
  }
  return context;
}
