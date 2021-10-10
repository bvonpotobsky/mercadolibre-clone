import { NavSearch } from "./Header/NavSearch";
import { NavUser } from "./Header/NavUser";
import { BannerDiscount } from "./Banners/BannerDiscount";
import { Product } from "./Cards/Product";
import { LastSeen } from "./Cards/LastSeen";

import desktopImg from "../assets/media/products/desktop-l.webp";
import { Card } from "./Cards/Card/Card";
import { Deals } from "../components/Cards/Deals";
import { ProductColumn } from "./Cards/ProductColumn";

function App() {
  return (
    <>
      <NavSearch />
      <NavUser name="Adriana" address="Catamarca 1238" />

      <h1>Aqui va el banner</h1>

      <BannerDiscount />

      <Card title="Vistos recientemente" btnValue="Ver historial de navegación">
        <Product
          image={desktopImg}
          description="Escritorio Industrial. Hierro y Madera 160x160"
          price="26.655"
          priceMonth="6x $3.950 sin interés"
        />
      </Card>

      <Card title="Inspirado en lo último que viste" btnValue="Ver más">
        <LastSeen>
          <Product
            image={desktopImg}
            description="Escritorio Industrial. Hierro y Madera 160x160"
            price="26.655"
          />
          <Product
            image={desktopImg}
            description="Escritorio Industrial. Hierro y Madera 160x160"
            price="26.655"
          />
          <Product
            image={desktopImg}
            description="Escritorio Industrial. Hierro y Madera 160x160"
            price="26.655"
          />
          <Product
            image={desktopImg}
            description="Escritorio Industrial. Hierro y Madera 160x160"
            price="26.655"
          />
        </LastSeen>
      </Card>

      <Card
        title="Relacionados con tu visita en Hogar, Muebles y Jardín"
        btnValue="Ver más"
      >
        <LastSeen>
          <Product
            image={desktopImg}
            description="Escritorio Industrial. Hierro y Madera 160x160"
            price="26.655"
          />
          <Product
            image={desktopImg}
            description="Escritorio Industrial. Hierro y Madera 160x160"
            price="26.655"
          />
          <Product
            image={desktopImg}
            description="Escritorio Industrial. Hierro y Madera 160x160"
            price="26.655"
          />
          <Product
            image={desktopImg}
            description="Escritorio Industrial. Hierro y Madera 160x160"
            price="26.655"
          />
        </LastSeen>
      </Card>

      <Card title="Ofertas" btnValue="Ver todas">
        <Deals>
          <ProductColumn
            image={desktopImg}
            description="Escritorio Industrial. Hierro y Madera 160x160"
            price="26.655"
            priceMonth="6x $3.950 sin interés"
            delivery="Envío gratis"
          />
          <ProductColumn
            image={desktopImg}
            description="Escritorio Industrial. Hierro y Madera 160x160"
            price="26.655"
            priceMonth="6x $3.950 sin interés"
            delivery="Envío gratis"
          />
          <ProductColumn
            image={desktopImg}
            description="Escritorio Industrial. Hierro y Madera 160x160"
            price="26.655"
            priceMonth="6x $3.950 sin interés"
            delivery="Envío gratis"
          />
          <ProductColumn
            image={desktopImg}
            description="Escritorio Industrial. Hierro y Madera 160x160"
            price="26.655"
            priceMonth="6x $3.950 sin interés"
            delivery="Envío gratis"
          />
        </Deals>
      </Card>
    </>
  );
}

export { App };
