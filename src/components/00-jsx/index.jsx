/**
 * @JSX
 * extension de javascript crée par React, utilise la syntaxe sous
 * forme de tags directement dans le code javascript,
 * ce qui permet de combiner HTML et JS facilement.
 * On peut appliquer des expressions javascript directement dans notre JSX avec des accolades.
 * JSX stands for JavaScript XML.
 */

/*
 * @Exemple
 * On a bien créer un composant Exemple pas exemple.
 * Par convention il faut mettre une majuscule à nos composants JSX !
 */
const Exemple = () => {
  /**
   * créer une const pour chaque params ci-dessous.
   * @prenom String
   * @nom String
   * @nombre Number
   * @prix integer
   * @boolean Boolean
   */

  const prenom = "Jonathan";
  const nom = "OKANA";
  const nombre = 24;
  const prix = 250;
  const boolean = true;

  /**
   * @array Objet
   * @arrayCollection Objet
   */
  const arrayFruits = ['pomme', 'banane', 'fraise']

  const arrayCollection = [
    {
      id: 0,
      prenom: 'Ippo',
      technique: 'dumsfer roll',
      stamina: 23192,
      strength: 2898
    },
    {
      id: 1,
      prenom: 'Challenger',
      technique: 'jab',
      stamina: 24516,
      strength: 2356
    }
  ]

  return (
    <div>
      {/* Exemple 1 pour des maths */}

      <p>
        Exemple 1 (Soustraire 50 - 8 pour savoir combien de pommes il reste) :
        il me reste {50-8} pommes
      </p>

      <p>Exemple 2 (Afficher la variable prenom) : {prenom} </p>

      <p>Exemple 3 (faite en sorte que le prenom s'affiche tout en minuscules): {prenom.toLocaleLowerCase()} </p>

      <p>Exemple 4 (Concaténer la variable nom et prenom) : {prenom} {nom} </p>

      <p>
        Exemple 5 (condition : si notre variable boolean est égal à true on
        affiche quelle est égale à true sinon on affiche une chaine vide) : { boolean ? "true" :' '}
      </p>

      <p>
        Exemple 6 (condition : si notre variable boolean est égal à true et que
        notre variable nombre est strictement égale à 2 on afffiche tout est ok,
        sinon on affiche une chaine vide) : {boolean === true && nombre > 2 ? "tout est ok" : " "} {boolean === true && "c'est true"}
      </p>

      <p>
        Exemple 7 (condition : si notre variable boolean est égal à true ou que
        notre variable nombre est strictement égale à 10 on afffiche tout est
        ok, sinon on affiche une chaine vide) : {boolean === true || nombre === 10 ? "yout est ok" : " "}
      </p>

      <p>
        Exemple 8 (condition : si notre variable prix est supérieur à 10, on
        affiche "le prix est supérieur à dix" sinon "le prix est inférieur à
        dix" ) : {prix > 10 ? "le prix est superieur a dix" : " le prix est inferieur a dix"}
      </p>

      <p>Exemple 9 (afficher le fruit de notre arrayFruits) : {arrayFruits[0]} {arrayFruits[1]} {arrayFruits[2]}  </p>
      {
        arrayFruits.map((fruit,index) =>(
            <p key={index}>{fruit}</p>
        ))
      }

    {
        arrayFruits.map((fruit,index) =>{
            return (
                <p key={index}>{fruit}</p>
                )})
      }

      <p>
        Exemple 10 (Itérer notre arrayFruits avec la function map et affichez
        tout son contenu dans une balise p) :
      </p>
    {
        arrayFruits.map((fruit, index) =>(
            <p key={index} >{fruit}</p>
        ))
    }


      {/**
       * @map
       * passe sur chaque élément d'un tableau et renvoie un nouveau tableau.
       */}

      {/* ... */}

      <p>
        Exemple 11 (itération arrayCollection et afficher toutes les informations
        de Ippo) :
      </p>
    {arrayCollection
        .filter( p =>p.prenom === "Ippo" )
        .map((info, index) =>(
            <div key={index} >
                <p>name : {info.prenom}</p>
                <p>stamina : {info.stamina} </p>
                <p>strength : {info.strength} </p>
                <p>technique : {info.technique} </p>
            </div>
        ))}

      {/* ... */}
    </div>
  )
}
/**
 * @export default
 * Permet d'exporter notre composant, pour pouvoir le réutiliser.
 */
export default Exemple
