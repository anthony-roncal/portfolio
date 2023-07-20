import './styles/App.css';
import About from './components/About';
import ProjectCard from './components/ProjectCard';
import Contact from './components/Contact';

function App() {
    const lightCloneData = {
        name: 'light.gg Clone',
        github: 'https://github.com/anthony-roncal/odin-destiny',
        link: 'https://anthony-roncal.github.io/odin-destiny/',
        description: 'This is a partial clone of light.gg, which is a informational tool for the game Destiny 2.',
        image: 'destiny'
    };
    const pokemonData = {
        name: "Where's that Pokémon?",
        github: 'https://github.com/anthony-roncal/odin-photo-tagging-app',
        link: 'https://phototaggingapp-ffbdf.web.app/',
        description: "This is a photo-tagging game, similar to 'Where is Waldo?'",
        image: 'pokemon'
    };
    const shoppingData = {
        name: "Shopping Page",
        github: 'https://github.com/anthony-roncal/odin-shopping-cart',
        link: 'https://anthony-roncal.github.io/odin-shopping-cart',
        description: "This is the front-end portion of a shopping page and cart.",
        image: 'shopping'
    };
    const battleshipData = {
        name: "Battleship",
        github: 'https://github.com/anthony-roncal/odin-shopping-cart',
        link: 'https://anthony-roncal.github.io/odin-battleship',
        description: "This is a single player browser version of the game Battleship.",
        image: 'battleship'
    };
    return (
        <div className="App">
            <About />
            <h2>Projects</h2>
            <div className='projects-container'>
                <ProjectCard
                    name={lightCloneData.name}
                    github={lightCloneData.github}
                    link={lightCloneData.link}
                    description={lightCloneData.description}
                    image={lightCloneData.image}
                />
                <ProjectCard
                    name={pokemonData.name}
                    github={pokemonData.github}
                    link={pokemonData.link}
                    description={pokemonData.description}
                    image={pokemonData.image}
                />
                <ProjectCard
                    name={shoppingData.name}
                    github={shoppingData.github}
                    link={shoppingData.link}
                    description={shoppingData.description}
                    image={shoppingData.image}
                />
                <ProjectCard
                    name={battleshipData.name}
                    github={battleshipData.github}
                    link={battleshipData.link}
                    description={battleshipData.description}
                    image={battleshipData.image}
                />
            </div>
            <Contact />
        </div>
    );
}

export default App;
