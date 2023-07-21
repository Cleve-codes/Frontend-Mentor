const steps = [
  {
    value: 1,
    step: "STEP 1",
    content: "Your Info",
  },
  {
    value: 2,
    step: "STEP 2",
    content: "Select Plan",
  },
  {
    value: 3,
    step: "STEP 1",
    content: "ADD-ONS",
  },
  {
    value: 4,
    step: "STEP 4",
    content: "Summary",
  },
];

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Aside />
        <Content />
      </div>
    </div>
  );
}

function Aside() {
  return (
    <div className="aside">
      <Item
        value={steps[0].value}
        step={steps[0].step}
        content={steps[0].step}
      />
      <Item
        value={steps[1].value}
        step={steps[1].step}
        content={steps[1].step}
      />
      <Item
        value={steps[2].value}
        step={steps[2].step}
        content={steps[2].step}
      />
      <Item
        value={steps[3].value}
        step={steps[3].step}
        content={steps[3].step}
      />
    </div>
  );
}

function Item({ value, step, content }) {
  return (
    <div>
      <span>{value}</span>
      <span>{step}</span>
      <span>{content}</span>
    </div>
  );
}

function Content() {}
