import { useState } from 'react'
import { NumberInputContainer } from './styles'
import { Plus, Minus } from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'

export function NumberInput() {
  const [numberValue, setNumberValue] = useState(0)
  const [hoverPlus, setHoverPlus] = useState(false)
  const [hoverMinus, setHoverMinus] = useState(false)
  function stepDown() {
    setNumberValue(numberValue - 1)
  }
  function stepUp() {
    setNumberValue(numberValue + 1)
  }
  return (
    <NumberInputContainer>
      <button
        onClick={stepDown}
        disabled={numberValue === 0}
        onMouseEnter={() => setHoverMinus(true)}
        onMouseLeave={() => setHoverMinus(false)}
      >
        <Minus
          size={14}
          color={hoverMinus ? defaultTheme['purple-dark'] : defaultTheme.purple}
        />
      </button>
      <input type="number" name="" id="" value={numberValue} disabled />
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
