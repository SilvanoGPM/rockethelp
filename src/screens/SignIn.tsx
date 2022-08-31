import { VStack, Heading, Icon, useTheme, IconButton } from "native-base";
import { Envelope, Eye, EyeClosed, Key } from "phosphor-react-native";
import { useForm } from "react-hook-form";

import { Input } from "../components/Input";
import { Button } from "../components/Button";

import Logo from "../assets/logo_primary.svg";
import { useBoolean } from "../hooks/useBoolean";

interface SignInFormData {
  email: string;
  password: string;
}

export function SignIn() {
  const { control, handleSubmit } = useForm<SignInFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [showPassword, setShowPassword] = useBoolean(false);

  const { colors } = useTheme();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <VStack flex="1" alignItems="center" bg="gray.600" px="8" pt="24">
      <Logo />
      <Heading color="gray.100" fontSize="xl" mt="20" mb="6">
        Acesse sua conta
      </Heading>

      <Input
        name="email"
        control={control}
        mb="4"
        placeholder="E-mail"
        InputLeftElement={
          <Icon as={<Envelope color={colors.gray[300]} />} ml="4" />
        }
      />

      <Input
        name="password"
        control={control}
        mb="8"
        placeholder="Senha"
        secureTextEntry={!showPassword}
        InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml="4" />}
        InputRightElement={
          <IconButton
            mr="4"
            onPress={setShowPassword.toggle}
            _pressed={{
              bg: "transparent",
            }}
            icon={
              <Icon
                as={
                  showPassword ? (
                    <EyeClosed color={colors.gray[300]} />
                  ) : (
                    <Eye color={colors.gray[300]} />
                  )
                }
              />
            }
          />
        }
      />

      <Button title="Entrar" w="full" onPress={onSubmit} />
    </VStack>
  );
}
