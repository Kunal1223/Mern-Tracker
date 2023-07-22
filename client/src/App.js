import './App.css';
import styled from "styled-components";
import { MainLayout } from './style/Layout';
import Orb from './componet/Orb';
import Navigation from './Navigation/Navigation';
import { useMemo, useState } from 'react';

function App() {
  const [active , setActive] = useState(1);
  const OrbMemo = useMemo(()=>{
     return <Orb/>
  },[])


  return (
    <AppStyled>
      {OrbMemo}
      <MainLayout>
      <Navigation active ={active} setActive= {setActive} />
      </MainLayout>
    </AppStyled>
  );
}
const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;


export default App;
