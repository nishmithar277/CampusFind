
"use client";

import { useApp } from "../../context/AppContext";
import ItemCard from "../../components/ItemCard";

export default function Lost() {
  const { reports, markAsFound } = useApp();

  const list = reports.filter(
    item => item.type === "Lost" && !item.resolved
  );

  const completed = reports.filter(
    item => item.type === "Lost" && item.resolved
  );

  return (
    <>
      <h1>Lost Items</h1>
      <p className="muted">Items reported missing by students.</p>

      <div className="grid">
        {list.length ? (
          list.map(item => (
            <ItemCard
              key={item.id}
              item={item}
              onMarkFound={markAsFound}
            />
          ))
        ) : (
          <p>No lost items reported.</p>
        )}
      </div>

      <h2>Recently Found Items</h2>

      <div className="grid">
        {completed.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
