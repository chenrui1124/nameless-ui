import { withInstall } from '@utils'
import Modal from './NModal.vue'

export type ModalProps = {
  title?: string
  subtitle: string
}

export const NModal = withInstall(Modal)
