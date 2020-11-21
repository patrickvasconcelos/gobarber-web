import React from 'react';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Background, Container, Content } from './styles';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />
      <Form onSubmit={() => ({})}>
        <h1>Faça seu logon</h1>
        <Input name="email" icon={FiMail} type="email" placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />
        <Button type="submit">Entrar</Button>
        <a href="forgot">Esqueci minha senha</a>
      </Form>
      <a href="a">
        <FiLogIn />
        Criar Conta
      </a>
    </Content>
    <Background />
  </Container>
);
export default SignIn;
