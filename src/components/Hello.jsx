// eslint-disable-next-line react/prop-types
const Hello = ({prenom, nom, reclic}) =>{
    const sayHello= ()=>{
        alert(`Bonjour ${prenom} ${nom}`)
    }
    return <>
    <h1 className="red">Hello {prenom} {nom} </h1>
    <button onClick={sayHello}>Clickez moi</button>
    <button onClick={()=>{
        alert(`Tu as encore cliqué`)
    }}>Cliquer encore</button>
    <button onClick={reclic}>Reclic</button>
    </>
}

export default Hello