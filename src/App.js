import './styles/App.css';
import About from './components/About';
import ProjectCard from './components/ProjectCard';
import Contact from './components/Contact';

function App() {
    const lightCloneData = {
        name: 'light.gg Clone',
        github: 'https://github.com/anthony-roncal/lightgg-clone',
        link: 'https://anthony-roncal.github.io/lightgg-clone/',
        description: 'This is a partial clone of light.gg, which is an informational tool for the game Destiny 2.',
        image: 'destiny'
    };
    const pokemonData = {
        name: "Where's that Pokémon?",
        github: 'https://github.com/anthony-roncal/photo-tagging-app',
        link: 'https://phototaggingapp-ffbdf.web.app/',
        description: "A Pokémon-themed photo tagging game, similar to “Where's Waldo?”. The objective is to find specific Pokémon in an image as quickly as possible. Users can save and view their scores on a leaderboard.",
        image: 'pokemon'
    };
    const battleshipData = {
        name: "Battleship",
        github: 'https://github.com/anthony-roncal/battleship',
        link: 'https://anthony-roncal.github.io/battleship',
        description: "A web version of the classic game “Battleship”. The logic for this application was built using Test Driven Development.",
        image: 'battleship'
    };
    const weatherData = {
        name: "Weather App",
        github: 'https://github.com/anthony-roncal/weather-app',
        link: 'https://anthony-roncal.github.io/weather-app/',
        description: "A weather app that connects to the OpenWeatherMap and Giphy APIs. Users can search for a city to receive weather information along with a related gif.",
        image: 'weather'
    };
    const shoppingData = {
        name: "Shopping Page",
        github: 'https://github.com/anthony-roncal/shopping-cart',
        link: 'https://anthony-roncal.github.io/shopping-cart',
        description: "An interactive shopping page enabling users to add items to their cart in different quantities and view real-time updates of the cart subtotal and the total number of items selected.",
        image: 'shopping'
    };
    return (
        <div className="App">
            <About />
            <h2 className='projects-header'>Projects</h2>
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
                    name={battleshipData.name}
                    github={battleshipData.github}
                    link={battleshipData.link}
                    description={battleshipData.description}
                    image={battleshipData.image}
                />
                <ProjectCard
                    name={weatherData.name}
                    github={weatherData.github}
                    link={weatherData.link}
                    description={weatherData.description}
                    image={weatherData.image}
                />
                <ProjectCard
                    name={shoppingData.name}
                    github={shoppingData.github}
                    link={shoppingData.link}
                    description={shoppingData.description}
                    image={shoppingData.image}
                />
            </div>
            <Contact />
        </div>
    );
}

export default App;
