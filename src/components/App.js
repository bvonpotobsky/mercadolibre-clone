import { BannerDiscount } from "./BannerDiscount";
import { Header } from "./Header";
import { RecentlyViewed } from "./RecentlyViewed";

function App() {
  return (
    <>
      <Header />
      <h1>Aqui va el banner</h1>
      <BannerDiscount />
      <RecentlyViewed
        title="Visto recientemente"
        description="Escritorio Industrial. Hierro y Madera 160x160"
        price="26.655"
        btnValue="Ver historial de navegación"
      />
    </>
  );
}

export default App;
