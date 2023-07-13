import WelcomeScreen from '../../pages/main-page/main-page';

type AppProps = {
    placesCount: number;
}

function App({placesCount}: AppProps): JSX.Element {
  return (
    <WelcomeScreen placesCount ={placesCount} />
  );
}

export default App;
