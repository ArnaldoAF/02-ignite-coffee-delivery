import { useState } from 'react'
import { NumberInputContainer } from './styles'
import { Plus, Minus } from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'

interface NumberInputProps {
  value: number
  onChange: (newValue: number) => void
}

export function NumberInput({ value, onChange }: NumberInputProps) {
  const [hoverPlus, setHoverPlus] = useState(false)
  const [hoverMinus, setHoverMinus] = useState(false)

  function stepDown() {
    onChange(value - 1)
  }
  function stepUp() {
    onChange(value + 1)
  }
  return (
    <NumberInputContainer>
      <button
        onClick={stepDown}
        disabled={value === 0}
        onMouseEnter={() => setHoverMinus(true)}
        onMouseLeave={() => setHoverMinus(false)}
      >
        <Minus
          size={14}
          color={hoverMinus ? defaultTheme['purple-dark'] : defaultTheme.purple}
        />
      </button>
      <input type="number" name="" id="" value={value} disabled />
      <button
        onClick={stepUp}
        className="plus"
        onMouseEnter={() => setHoverPlus(true)}
        onMouseLeave={() => setHoverPlus(false)}
      >
        <Plus
          size={14}
          color={hoverPlus ? defaultTheme['purple-dark'] : defaultTheme.purple}
        />
      </button>
    </NumberInputContainer>
  )
}
