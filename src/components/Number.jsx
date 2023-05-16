import Wrapper from "./Wrapper";
const Number = () => {
  return <ul>{Wrapper.map((element) =>
    <li key={element}>
        {element}² =  {element * element * element}
    </li>
)}</ul>;
};

export default Number;
