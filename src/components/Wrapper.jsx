import Number from "./Number";
const Wrapper = () => {
  return <ul>{Number.map((element) =>
    <li key={element}>
        {element}² =  {element * element}
    </li>
)}</ul>;
};

export default Wrapper;
