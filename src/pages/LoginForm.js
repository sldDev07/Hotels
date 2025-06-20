import { Link } from "react-router-dom";
import {
  Container,
  Card,
  Title,
  Input,
  CheckboxWrapper,
  Checkbox,
  Label,
  Button,
  LinkWrapper,
  YellowLink,
} from "./StyledComponents";

export default function LoginForm() {
  return (
    <Container>
      <Card>
        <Title>Connectez-vous en tant que Admin</Title>
        <form>
          <Input type="email" placeholder="E-mail" />
          <Input type="password" placeholder="Mot de passe" />
          <CheckboxWrapper>
            <Checkbox type="checkbox" id="remember" />
            <Label htmlFor="remember">Gardez-moi connecté</Label>
          </CheckboxWrapper>
          <Link to="/dashboard">    
          <Button type="submit">Se connecter</Button>
          </Link>
        </form>
        <LinkWrapper>
          <YellowLink to="/MotDePasseOublie">Mot de passe oublié?</YellowLink>
          <br />
          <p>
            Vous n'avez pas de compte ? <YellowLink to="/register">S'inscrire</YellowLink>
          </p>
        </LinkWrapper>
      </Card>
    </Container>
  );
}