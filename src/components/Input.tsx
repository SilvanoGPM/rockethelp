import { Control, Controller } from "react-hook-form";

import {
  Input as NativeBaseInput,
  IInputProps as NativeBaseInputProps,
} from "native-base";

interface InputProps extends NativeBaseInputProps {
  name: string;
  control?: Control<any, any>;
}

function BaseInput({ ...props }: NativeBaseInputProps) {
  return (
    <NativeBaseInput
      bg="gray.700"
      h="14"
      size="md"
      borderWidth="1"
      borderColor="gray.700"
      fontSize="md"
      fontFamily="body"
      color="white"
      placeholderTextColor="gray.300"
      _focus={{
        borderWidth: 1,
        borderColor: "green.500",
        bg: "gray.700",
      }}
      {...props}
    />
  );
}

export function Input({ control, name, ...props }: InputProps) {
  if (control) {
    return (
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <BaseInput
            {...props}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name={name}
      />
    );
  }

  return <BaseInput {...props} />;
}
