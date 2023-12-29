import type { PureCSSIconClass } from 'mm3'

type BsIconProps = {
  i: PureCSSIconClass
  size?: 'sm' | 'md' | 'lg'
}

function BsIcon({ i, size }: BsIconProps) {
  return (
    <span
      class={[
        'pointer-events-none inline-block',
        {
          'min-h-4 min-w-4': size === 'sm',
          'min-h-5 min-w-5': size === 'md',
          'min-h-6 min-w-6': size === 'lg'
        },
        i
      ]}
    />
  )
}

BsIcon.props = {
  i: { type: String, required: true },
  size: { type: String, default: 'md' }
}

export default BsIcon
