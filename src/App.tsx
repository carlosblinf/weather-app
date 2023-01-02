import { Header, Search, WrapperCardList } from './components';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-bgLightGrey">
      <Header />
      <div className="flex-1 flex flex-col gap-12 justify-around items-center mt-10 p-12">
        <Search />
        <WrapperCardList />
      </div>
    </div>
  );
}

export default App;
