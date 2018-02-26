describe('closure', function() {

  // Une fonction peut être définie ainsi :
  function UneFonction () {
    it("Je suis une fonction");
  }

  UneFonction(); // affiche "Je suis une fonction"

// mais on peut aussi la définir ainsi :
// (On affecte en fait une fonction anonyme à une variable)
  var UneAutreFonction = function () {
    it("Je suis une autre fonction");
  };

  UneAutreFonction(); // affiche "Je suis une autre fonction"

// Une fonction étant une variable, on peut lui réaffecter une valeur :
  UneFonction = "Je ne suis plus une fonction :'(";

  it(UneFonction); // affiche "Je ne suis plus une fonction :'("

// On peut passer une fonction comme argument à une autre fonction (comme n'importe quelle autre variable)
  function UtiliserFonction (fct) {
    fct(); // ici, on exécute la fonction passée en paramètre
  }

  UtiliserFonction(UneAutreFonction); // affiche "Je suis une autre fonction"
});
