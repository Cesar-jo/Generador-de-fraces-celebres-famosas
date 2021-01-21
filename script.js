const quotes = [

    {
        frase: "Haz el amor y no la guerra.",
        autor: " - John Lennon"
    },
    {

        frase: "Cada dia savemos más y entendemos menos.",
        autor: " - Albert Einstein"
    },
    {


        frase: "La medida del amor es mas sin medida.",
        autor: " - San Agustin"
    },

    {


        frase: "Haz el amor y no la guerra.",
        autor: " - John Lennon"
    },

    {

        frase: "No hay nada que un hombre sea capaz de hacer cuando una mujer le mira.",
        autor: " - Casanova"
    },

    {
        frase: "El dinero no puede comprar la vida.",
        autor: " - Bob Marley"
    },

    {
        frase: "Yo no veo la destruccion que existe, si no la belleza que aun queda.",
        autor: " - Anna Frank"
    },

    {
        frase: "Son tres «muchos» y tres «pocos» los que destruyen a las personas:Mucho gastar y poco tener– Mucho hablar y poco saber– Mucho presumir y poco valer. ",
        autor: " - Proverbio español"
    },

    {
        frase: "Hay dos maneras de vivir la vida: una como si nada fuese un milagro, la otra como si todo fuese un milagro.",
        autor: " - Albert Einstein"
    },

    {
        frase: "El secreto de la existencia humana no solo está en vivir, sino también en saber para qué se vive.",
        autor: " - Fiódor Dostoioevski"
    },

    {
        frase: "¿Amas la vida? Pues no desperdicies el tiempo, porque es la sustancia de la que está hecha.",
        autor: " - Benjamín Franklin"
    },

    {
        frase: "Vivir no es sólo existir y crear, es saber gozar y sufrir y no dormir sin soñar. Descansar es empezar a morir.",
        autor: " - Gregorio Marañón"
    },

    {
        frase: "Un hoy vale por dos mañanas.",
        autor: " - Benjamín Franklin"
    },

    {
        frase: "Aprendí que no se puede dar marcha atrás, que la esencia de la vida es ir hacia adelante.",
        autor: " - Agatha Christie"
    },

    {
        frase: "Tan pronto como uno es infeliz, uno se convierte en moralista.",
        autor: " - Marcel Proust"
    },

    {
        frase: "La vida no se mide por las veces que respiras, sino por los momentos que te dejan sin aliento.",
        autor: " - De la película “Hitch”"
    },

    {
        frase: "Cumplamos la tarea de vivir de tal modo que cuando muramos, incluso el de la funeraria lo sienta.",
        autor: " -  Marc Twain."
    },

    {
        frase: "Pregúntate si eres feliz, y dejarás de serlo.",
        autor: " - John Stuart Mill"
    },

    {
        frase: "Una persona que tiene 50 años y piensa como uno de 20, ha desperdiciado 30 años de vida.",
        autor: " - Muhammad Alí"
    },

    {
        frase: "Al final todo estara bien y si no lo esta es por que aun no es el final.",
        autor: " - Anonimo"
    },

    {
        frase: "La verdad es que todo tiene un precio, la pregunta es ¿Cuanto estas dispuesto a pagar?.",
        autor: " - Anonimo"
    },

    {
        frase: "La vida son dos dias, cuando naces y cuando mueres, asi que sonrrie, disfruta y aprende.",
        autor: " - Anonimo"
    },

    {
        frase: "Me siento un tonto en confiar en alguien hoy en dia, en el planeta de la hipocresia.",
        autor: " - Canservero"
    },

    {
        frase: "Hay dos futuros, el que depende de ti y el que otros deciden por ti, ¿Cual prefieres?.",
        autor: " - Anonimo"
    },

    {
        frase: "Somoss lo que queremos ser, uno vale lo que uno quiere.",
        autor: " - Cesar_Jo"
    },

    {

        frase: "A la femine ni todo el amor, ni todo el dinero.",
        autor: " - Anonimos"

    }

];


/*Creamos una constante (Variable) llamada btn que va hacer nuestro boton del generador de frases y horita le pnemos una funcion*/
const btn = document.getElementById("generate-btn");

/*Le creamos un evento y su funcion que sera generar las fraces que hagregamos, le decimos que cuando le demos clic al btn se ejecute una funcion*/
btn.addEventListener("click", function() {
    /* con esto le decimos que nos genere con el random aleatoriamente una frace que agregamos*/
    let random = Math.floor(Math.random() * quotes.length);
    /* Con esto le decimos que cuando nos genere la frace nos la arroge en el contenedor que creamos en ese espacio */
    document.getElementById("frase").textContent =
        quotes[random].frase;
    /* Esto lo que hara es seleccionar el autor de esa frase y ponerlo en el contenedor */
    document.querySelector(".autor").textContent =
        quotes[random].autor;
});