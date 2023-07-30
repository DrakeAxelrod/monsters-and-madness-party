const name = "Ophelia Blackwood"
const character = name.toLowerCase().replace(" ", "_")
const json = `../${character}.jsonc`
const img = `https://res.cloudinary.com/dpkklapvh/image/upload/v1690743847/images/players/${character}.webp`

// const file = "../viola_huxley.jsonc"

const App = (char) => {
  return (
    <main class="page">
      <div class="chalkboard">
        <div class="header">
          <img
            class="character-portrait"
            alt={`${char.name} chalk portrait`}
            src={img}
          />
          <div class="general-info">
          <h1>{char.name}</h1>
          <div class="general-info-row"><span>Age</span><span>{char.age}</span></div>
          <div class="general-info-row"><span>concept</span><span>{char.concept}</span></div>
          <div class="general-info-row"><span>Player</span><span>{char.player}</span></div>
          <div class="general-info-row"><span>Refresh</span><span>{char.refresh}</span></div>
          <h3>{char.highConcept.name}</h3>
          <span>(High Concept)</span>
          <p>{char.highConcept.description}</p>
          <h3>{char.trouble.name}</h3>
          <span>(Trouble)</span>
          <p>{char.trouble.description}</p>
          </div>
        </div>
      </div>
    </main>
  )
}


(async () => {
  const data = await fetch(json)
    .then((data) => data.json())
  ReactDOM.render(<App {...data} />, document.getElementById("root"))
})()
