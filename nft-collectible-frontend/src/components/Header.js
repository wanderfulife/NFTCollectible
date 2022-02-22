import '../Header.css';

function Header(props) {
    return (
        <header>
            <h1 className="heading gradient-text">
                <a href={props.opensea} target='_blank' rel='noreferrer'>
                    The Squirrelz
                </a>
            </h1>
            <h2 className='subheading'>
                An NFT Sandbox by J.Wander
            </h2>
            <div>
                <button className='os-button'>
                    <a href={props.opensea} target='_blank' rel='noreferrer'>
                        View Collection on Opensea
                    </a>
                </button>
            </div>
        </header>
    )
}

export default Header;