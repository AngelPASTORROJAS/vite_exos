
- [x] Créer un nouveau projet
```bash
npm create vite
```
  
Pour le lancer le projet:
```bash
npm run dev
```

- [x] Qui contiendra 2 composants : Wrapper / Number

- [x] L'objectif est que Wrapper contiendra un tableau avec des nombres
```jsx
const Wrapper = [0,2,3,4,6]
```

- [x] Dans une boucle il transmettra ces nombres au composant Number qui devra les afficher à la puissance 3
```jsx
const Number = Wrapper.map(e => e*e*e)
```

- [x] Le résultat attendu sera une liste avec ces nombres : 2² = 8
```jsx
<ul>{Wrapper.map((element) =>
    <li key={element}>
        {element}² =  {element * element * element}
    </li>
)}</ul>
```