import Person1Img from './images/person1-img.jpg';
import Person2Img from './images/person2-img.jpg';
import Person3Img from './images/person3-img.jpg';
import Person4Img from './images/person4-img.jpg';

const reviews = [
    {
        id: 1,
        description: 'Die Pizza hier ist einfach fantastisch! Der Teig ist perfekt dünn und knusprig, und die Zutaten sind immer frisch. Das Personal ist sehr freundlich und aufmerksam.',
        img: [Person1Img],
        name: 'John Mike',
        initialMotion: '-300px'
    },
    {
        id: 2,
        description: 'Gemütliche Atmosphäre und ausgezeichnetes italienisches Essen. Die hausgemachten Pasta-Gerichte sind ein absolutes Muss!',
        img: [Person2Img],
        name: 'Maria Cruz',
        initialMotion: '350px'
    },
    {
        id: 3,
        description: 'Ein wunderbares Restaurant mit authentischer italienischer Küche. Die Desserts sind himmlisch, besonders der Zitronen-Kuchen. Die Bedienung ist top und die Preise sind fair für die Qualität.',
        img: [Person3Img],
        name: 'Anna Gold',
        initialMotion: '-300px'
    },
    {
        id: 4,
        description: 'Hervorragendes Restaurant mit toller Auswahl an italienischen Weinen. Das Ambiente ist sehr einladend und die Portionen sind großzügig bemessen.',
        img: [Person4Img],
        name: 'Nick Burn',
        initialMotion: '350px'
    }
];

export default reviews;