const Horloge = () => {
  var today = new Date();
  var time = today.toLocaleTimeString();
  return <div>Time: {time}</div>;
};

export default Horloge;
