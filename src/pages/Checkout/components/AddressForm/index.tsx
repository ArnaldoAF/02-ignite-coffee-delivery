import { useFormContext } from 'react-hook-form'
import { AddressFormContainer, BaseInput } from './styles'

export function AddressForm() {
  const { register } = useFormContext()

  return (
    <AddressFormContainer>
      <BaseInput
        {...register('cep', { valueAsNumber: true })}
        id="cep"
        placeholder="CEP"
        className="w-40"
        type="number"
      />
      <BaseInput
        {...register('rua')}
        id="rua"
        placeholder="Rua"
        className="w-100"
      />
      <BaseInput
        {...register('numero', { valueAsNumber: true })}
        id="numero"
        placeholder="Número"
        className="w-40"
        type="number"
      />
      <BaseInput
        {...register('complemento')}
        id="complemento"
        placeholder="Complemento"
        className="w-60"
      />
      <BaseInput
        {...register('bairro')}
        id="bairro"
        placeholder="Bairro"
        className="w-40"
      />
      <BaseInput
        {...register('cidade')}
        id="cidade"
        placeholder="Cidade"
        className="w-40"
      />
      <BaseInput
        {...register('uf')}
        id="uf"
        placeholder="UF"
        className="w-20"
      />
    </AddressFormContainer>
  )
}
