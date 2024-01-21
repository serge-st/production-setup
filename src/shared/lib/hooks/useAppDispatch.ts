import { AppStore } from 'app/providers/StoreProvider';
import { useDispatch } from 'react-redux';

export type AppDispatch = AppStore['dispatch'];
export const useAppDispatch: () => AppDispatch = useDispatch;
