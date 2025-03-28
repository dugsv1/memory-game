export function Card({ item }) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-header">
          <h2>{item.name}</h2>
        </div>

        <div className="card-body">
          <p>{item.type}</p>
        </div>
      </div>
    </div>
  );
}
