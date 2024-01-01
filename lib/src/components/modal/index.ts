import { withInstall } from '@utils'
import Modal from './NModal.vue'

export type ModalProps = {
  title?: string
  subtitle?: string
  danger?: boolean
  /**
   * @default '28rem'
   */
  width?: string
}

export const NModal = withInstall(Modal)
