export default function App() {
  return (
    <div className="app">
      <div className="container">
        <Avatar />
        <Content />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="images/image-product-desktop.jpg" alt="Gabrielle Perfume" />;
}

function Content() {
  return (
    <div>
      <p>
        <span class="old-price">Perfume</span>
      </p>
      <h1>
        Gabrielle <br></br> Essence Eau <br></br> De Parfum
      </h1>
      <p>
        A floral, solar and voluptuous interpretation composed by Olivier Polge,
        Perurmer-creator for the House of CHANEL.
      </p>
      <Pricing />
      <button>Add to cart</button>
    </div>
  );
}

function Pricing() {
  return (
    <div className="pricing">
      <p>
        <span className="new-price">$149.99</span>
      </p>
      <p>
        <span className="old-price">
          <s>$169.99</s>
        </span>
      </p>
    </div>
  );
}
