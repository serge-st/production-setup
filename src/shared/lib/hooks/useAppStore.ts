import { AppStore } from 'app/providers/StoreProvider';
import { useStore } from 'react-redux';

export const useAppStore: () => AppStore = useStore;
