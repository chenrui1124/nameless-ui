import { withInstall } from '@utils'
import Modal from './NModal.vue'

export type ModalProps = {
  title?: string
  subtitle?: string
  danger?: boolean
}

export const NModal = withInstall(Modal)
