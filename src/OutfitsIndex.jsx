export function OutfitsIndex(props) {
  return (
    <div>
      <h1>Test</h1>
      {props.outfits.map((outfit) => (
        <div key={outfit.id}>
          <h2>{outfit.title}</h2>
          <p> {outfit.id}</p>
          <button onClick={() => props.onSelectOutfit(outfit)}> Show action</button>
        </div>
      ))}
    </div>
  );
}
