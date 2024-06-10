import { SignInContainer, Form, Logo, InputDiv } from './styles';

import { useState } from 'react';
import { useAuth } from '../../hooks/auth';

/** FORM + ZOD */
import { useForm } from 'react-hook-form';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from '../../components/Button';

import logo from "../../assets/valortech_logo.png"

const signInFormSchema = z.object({
  email: z.string().min(4, "O email é obrigatório").email("Formato de E-mail incorreto"),
  password: z.string().min(4, "A senha é obrigatória")
});

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register, handleSubmit, formState: {errors, isSubmitting } } = useForm({
    resolver: zodResolver(signInFormSchema)
  });

  const { signIn } = useAuth();
  
  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <SignInContainer>
      <Form onSubmit={handleSubmit(handleSignIn)} >
        <Logo>
          <img src={logo} />
        </Logo>
        
        <div className="input-separator">
          <InputDiv>
            <input
              className="form-input" 
              type="text" 
              id="email" 
              htmlFor="email"
              placeholder=" "
              {...register("email", {
                onChange: (e) => setEmail(e.target.value),
              })}
            />
            <label className="form-label" htmlFor="email">Email</label>
            {errors.email && <span className="danger">{errors.email.message}</span>}
          </InputDiv>

          <InputDiv>
            <input
              className="form-input" 
              type="password" 
              id="password"
              htmlFor="password"
              placeholder=" "
              {...register("password", {
                onChange: (e) => setPassword(e.target.value),
              })}
            />
            <label className="form-label" htmlFor="password">Senha</label>
            {errors.password && <span className="danger">{errors.password.message}</span>}
          </InputDiv>           
        </div>

        <Button title="Entrar" type="submit" disabled={isSubmitting} />
      </Form>
    </SignInContainer>
  )
}