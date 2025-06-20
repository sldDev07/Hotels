import { FiBell, FiLogOut , FiSearch } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { MdEmail, MdDashboard } from "react-icons/md";
import { PiChatsBold, PiMonitorBold } from "react-icons/pi";
import { FaUsers} from "react-icons/fa";
import { FaHotel } from "react-icons/fa6";
import { Link } from "react-router-dom";
import{
  Container,
  Sidebar,
  SidebarTop,
  SidebarItem,
  SidebarBottom,
  OnlineDot,
  Content,
  Header,
  SearchInput,
  TopRight,
  Main,
  Title,
  Cards,
  Card,
  IconWrapper,
  CardContent,
  CardTitle,
  CardSubtitle
}from"./StyleDashboard";

export default function Dashboard() {
  return (
    <Container>
      <Sidebar>
        <SidebarTop>
          <SidebarItem style={{ background: '#1c1c1c', fontWeight: 'bold' }}>RED PRODUCT</SidebarItem>
          <SidebarItem active> <MdDashboard/> Dashboard</SidebarItem>
          <SidebarItem>
            <PiMonitorBold/> <Link to="/listehotels" style={{ color: 'white', textDecoration: 'none' }}>Liste des hôtels</Link>
          </SidebarItem>
        </SidebarTop>
        <SidebarBottom>
          <FaUserCircle size={24} />
          <div>
            Inconue
            <br />
          en ligne <OnlineDot /> 
          </div>
        </SidebarBottom>
      </Sidebar>
      <Content>
        <Header>
          <div>
            Dashboard
          </div>
          <TopRight>
            <FiSearch />
            <SearchInput placeholder="Recherche" />
            <FiBell />
            <FaUserCircle size={24} />
            <Link to="/login" style={{ color: 'black', textDecoration: 'none' }}><FiLogOut size={20}/></Link>
          </TopRight>
        </Header>
        <Main>
          <Title>Bienvenue sur RED Product</Title>
          <p style={{ marginBottom: 30 }}>Je ne sais pas quoi dire</p>
          <Cards>
            <Card>
              <IconWrapper color="#e74c3c"><MdEmail /></IconWrapper>
              <CardContent>
                <CardTitle><Link to="#" style={{ color: 'black', textDecoration: 'none' }}>125 Formulaires</Link></CardTitle>
                <CardSubtitle>Je ne sais pas quoi mettre</CardSubtitle>
              </CardContent>
            </Card>
            <Card>
              <IconWrapper color="#e74c3c"><MdEmail /></IconWrapper>
              <CardContent>
                <CardTitle><Link to="#" style={{ color: 'black', textDecoration: 'none' }}>25 Emails</Link></CardTitle>
                <CardSubtitle>Je ne sais pas quoi mettre</CardSubtitle>
              </CardContent>
            </Card>
            <Card>
              <IconWrapper color="#1abc9c"><PiChatsBold /></IconWrapper>
              <CardContent>
                <CardTitle><Link to="#" style={{ color: 'black', textDecoration: 'none' }}>40 Messages</Link></CardTitle>
                <CardSubtitle>Je ne sais pas quoi mettre</CardSubtitle>
              </CardContent>
            </Card>
            <Card>
              <IconWrapper color="#8e44ad"><FaHotel /></IconWrapper>
              <CardContent>
                <CardTitle><Link to="#" style={{ color: 'black', textDecoration: 'none' }}>40 Hôtels</Link></CardTitle>
                <CardSubtitle>Je ne sais pas quoi mettre</CardSubtitle>
              </CardContent>
            </Card>
            <Card>
              <IconWrapper color="#f1c40f"><FaUsers /></IconWrapper>
              <CardContent>
                <CardTitle><Link to="#" style={{ color: 'black', textDecoration: 'none' }}>600 Utilisateurs</Link></CardTitle>
                <CardSubtitle>Je ne sais pas quoi mettre</CardSubtitle>
              </CardContent>
            </Card>
            <Card>
              <IconWrapper color="#2980b9"><FaUsers /></IconWrapper>
              <CardContent>
                <CardTitle><Link to="#" style={{ color: 'black', textDecoration: 'none' }}>02 Entités</Link></CardTitle>
                <CardSubtitle>Je ne sais pas quoi mettre</CardSubtitle>
              </CardContent>
            </Card>
          </Cards>
        </Main>
      </Content>
    </Container>
  );
}
