function Ghoastbusters(){
    return `Who you gonna call?`
}

ReactDOM.render(
    // <Ghoastbusters/>,
    // <Tagline/>,
    // <Janine/>,
    // <MassHysteria/>,
    // <GhoastbustersLogo/>,
    // <ToolsTalent/>,
    <GhostbustersAll/>,
    document.getElementById(`root`)
)

function Tagline(){
    return `We're ready to believe you.`
}

function Janine(){
    return (
        <div>
            <h2>I've quit better jobs than this.</h2>
            <h2>Ghostbusters, whaddya want?</h2>
        </div>
    )
}

function MassHysteria(){
    return(
        <div>
            <ul>
                <li>Fire and brimstone coming down from the skies! Rivers and seas boiling!</li>
                <li>Forty years of darkness! Earthquakes! Volcanoes!</li>
                <li>The dead rising from the grave!</li>
            </ul>
                <p>Human sacrifice! Dogs and cats, living together! Mass hysteria!</p>
        </div>
    )
}

function GhoastbustersLogo(){
    return <img src="https://cdn.pixabay.com/photo/2016/07/13/18/41/ghostbusters-1515155_1280.jpg" /> 
}

function ToolsTalent(){
    const w = "we"
    return(
        <section>
            <h1>{w} had the tools</h1>
            <h3>{w} had the talent</h3>
        </section>
    )
}

function GhostbustersAll(){
    return(
        <div>
        <Ghoastbusters/>
        <Tagline/>
        <Janine/>
        <MassHysteria/>
        <GhoastbustersLogo/>
        <ToolsTalent/> 
        </div>
    )
}