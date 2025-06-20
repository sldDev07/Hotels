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

export default function RegisterForm() {
  return (
    <Container>
      <Card>
        <Title>Inscrivez-vous en tant que Admin</Title>
        <form>
          <Input type="text" placeholder="Nom" />
          <Input type="email" placeholder="E-mail" />
          <Input type="password" placeholder="Mot de passe" />
          <CheckboxWrapper>
            <Checkbox type="checkbox" id="terms" />
            <Label htmlFor="terms">Accepter les termes et la politique</Label>
          </CheckboxWrapper>
          <Link to="/dashboard">
          <Button type="submit" to="/dashboard">S'inscrire</Button>
          </Link>
        </form>
        <LinkWrapper>
          <p>
            Vous avez déjà un compte ? <YellowLink to="/login">Se connecter</YellowLink>
          </p>
        </LinkWrapper>
      </Card>
    </Container>
  );
}
