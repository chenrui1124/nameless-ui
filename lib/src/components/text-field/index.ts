import type { PureCSSIconClass } from 'mm3'

import { withInstall } from '@utils'
import TextField from './NTextField.vue'

export type TextFieldProps = {
  pattern?: HTMLInputElement['pattern']
  placeholder?: string
  icon?: PureCSSIconClass
  secret?: boolean
  clearable?: boolean
  validator?: (modelValue: string | undefined) => boolean
}

export type TextFieldModel = {
  modelValue: string | undefined
  valid: boolean | undefined
}

export const NTextField = withInstall(TextField)
