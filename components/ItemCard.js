
"use client";

export default function ItemCard({ item, onMarkFound }) {
  return (
    <article className="card">
      <span className="tag">{item.type}</span>

      <h3 className={item.resolved ? "resolved" : ""}>
        {item.title}
      </h3>

      <p className="muted">
        {item.category} · {item.location}
      </p>

      <p>{item.description}</p>

      <p className="muted">Reported: {item.date}</p>

      <p className="muted">Contact: {item.contact}</p>

      {item.resolved ? (
        <span className="tag">FOUND ✓</span>
      ) : (
        item.type === "Lost" && (
          <button
            className="btn"
            onClick={() => onMarkFound(item.id)}
          >
            Mark as Found
          </button>
        )
      )}
    </article>
  );
}
