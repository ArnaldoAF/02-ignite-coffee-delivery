import { IconWIthTextContainer } from './styles'
import { defaultTheme } from '../../styles/themes/default'

interface IconWIthTextProps {
  Icon: React.ElementType
  iconColor: string
  text1: string
  text2?: string
  text1IsBold?: boolean
  text2IsBold?: boolean
}

export function IconWIthText(props: IconWIthTextProps) {
  const { Icon, iconColor, text1, text2, text1IsBold, text2IsBold } = props
  return (
    <IconWIthTextContainer>
      <div
        className="icon"
        color={iconColor}
        style={{ backgroundColor: iconColor }}
      >
        <Icon size={16} weight="fill" color={defaultTheme.white} />
      </div>

      <div>
        <span className={`text-M ${text1IsBold && 'bold'}`}>{text1}</span>
        <span className={`text-M ${text2IsBold && 'bold'}`}>{text2}</span>
      </div>
    </IconWIthTextContainer>
  )
}
