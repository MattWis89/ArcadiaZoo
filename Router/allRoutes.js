import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/Services", "Services", "/pages/services.html"),
    new Route("/Habitats","Habitats", "/pages/habitats.html"),
    new Route("/Signin","Connexion", "/pages/signin.html"),
    new Route("/Account", "Mon compte", "/pages/account.html"),
    new Route("/Contact", "Contact", "/pages/contact.html"),
    new Route("/Avis", "Avis", "/pages/avis.html")
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadia Zoo";