import { toast } from 'react-toastify'
import { useNotification } from '../../../presentation/hooks/useNotification'

export const useNotificationWithToast = () => useNotification(toast)
