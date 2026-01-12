import '../css/main.css';
import Card from './Card';
import extensions from '../data/extensions';

const Main = () => {

    const options = ["All", "Active", "Inactive"];
    
    return (  
        <main className="main">
            <div className="container-options">
                <h1>Extensions List</h1>
                <div className="options">
                    {options.map((opt) => (
                        <a key={opt} href="#">{opt}</a>
                    ))}
                </div>
            </div>
            <div className="container-cards">
                {extensions.map((ext) => (
                    <Card
                        key={ext.id}
                        name={ext.name}
                        description={ext.description}
                        image={ext.image}
                    />
                ))}
            </div>
        </main>
    );
}
 
export default Main;