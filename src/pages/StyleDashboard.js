import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  font-family: 'Arial', sans-serif;
`;

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 200px;
  background: #2b2b2b;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1000;
`;

export const SidebarTop = styled.div``;

export const SidebarItem = styled.div`
  padding: 15px 20px;
  background: ${props => props.active ? "#404040" : "transparent"};
  cursor: pointer;

  &:hover {
    background: #404040;
  }
`;

export const SidebarBottom = styled.div`
  padding: 15px 20px;
  border-top: 1px solid #444;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  margin-bottom: 55px;
`;

export const OnlineDot = styled.span`
  height: 8px;
  width: 8px;
  background: #4caf50;
  border-radius: 50%;
  display: inline-block;
`;

export const Content = styled.div`
  margin-left: 200px;
  flex: 1;
  background: #f2f2f2;
`;


export const Header = styled.div`
  background: white;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
`;

export const SearchInput = styled.input`
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-left: 10px;
`;

export const TopRight = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Main = styled.div`
  padding: 30px;
`;

export const Title = styled.h2`
  margin-bottom: 10px;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 30px;
`;

export const Card = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const IconWrapper = styled.div`
  font-size: 30px;
  padding: 10px;
  border-radius: 50%;
  color: white;
  background-color: ${props => props.color || "#ccc"};
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.span`
  width:220px;
  font-size: 18px;
  font-weight: bold;
`;

export const CardSubtitle = styled.span`
  font-size: 12px;
  color: #666;
`;