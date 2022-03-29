import { Grid, Input, InputProps } from "@nextui-org/react";
import { Controller, useFormContext, RegisterOptions } from "react-hook-form"

export type FormInputProps = {
  name: string;
  rules?: RegisterOptions,
} & Partial<InputProps>;

export const FormInput = (props: FormInputProps) => {
  const { name, label, rules, ...inputProps } = props;

  const formContext = useFormContext();  
  
  return (
    <Controller 
      control={formContext.control}
      name={name}
      rules={rules}
      render={({field, fieldState: { error } }) => (
        <Grid.Container>
          <Grid xs={12}>
            <Input
              onChange={field.onChange}
              labelPlaceholder={!error ? label : `${label} ${error.type}`}
              {...inputProps}
              status={!error ? inputProps.status: 'error'}
            />
          </Grid>
        </Grid.Container>
      )}   
    />
  )
}

export default FormInput;