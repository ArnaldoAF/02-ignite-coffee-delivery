import { AddressFormContainer, BaseInput } from './styles'

export function AddressForm() {
  return (
    <AddressFormContainer>
      <BaseInput className="w-40" placeholder="CEP" />
      <BaseInput className="w-100" placeholder="Rua" />
      <BaseInput className="w-40" placeholder="Número" />
      <BaseInput className="w-60" placeholder="Complemento" />
      <BaseInput className="w-40" placeholder="Bairro" />
      <BaseInput className="w-40" placeholder="Cidade" />
      <BaseInput className="w-20" placeholder="UF" />
    </AddressFormContainer>
  )
}
