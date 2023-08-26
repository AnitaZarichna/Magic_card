import { Header } from "./Header/Header";
import { MagicBall } from "./MainPage/MagicBall";
import { Title } from "./MainPage/Title";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'blok',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
        background: 'radial-gradient(circle, rgba(63,195,251,0.8757878151260504) 0%, rgba(203,203,214,1) 100%)'
      }}
    >
      <Header/>
      <Title/>
      <MagicBall/>

    </div>
  );
};
