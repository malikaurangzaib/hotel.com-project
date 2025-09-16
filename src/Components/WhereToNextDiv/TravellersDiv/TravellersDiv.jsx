import React, { useState, useRef, useEffect } from "react";
import "./TravellersDiv.css";

function TravellersDiv() {
  const [isOpen, setIsOpen] = useState(false);
  const [rooms, setRooms] = useState([{ adults: 2, children: 0 }]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const totalTravellers = rooms.reduce(
    (acc, room) => acc + room.adults + room.children,
    0
  );

  const addRoom = () => setRooms([...rooms, { adults: 1, children: 0 }]);

  const removeRoom = (index) =>
    setRooms((prev) => prev.filter((_, i) => i !== index));

  const updateCount = (index, field, value) => {
    setRooms((prev) =>
      prev.map((room, i) =>
        i === index
          ? { ...room, [field]: Math.max(0, room[field] + value) }
          : room
      )
    );
  };

  return (
    <div className="travellers-container" ref={dropdownRef}>
      <div className="travellers-input" onClick={() => setIsOpen(!isOpen)}>
        <div className="travellers-logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-user-icon lucide-user"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <div className="traveller-div">
          <span className="travellers-heading">Travellers</span>
          <span className="travellers-value">
            {totalTravellers} traveller{totalTravellers !== 1 ? "s" : ""},{" "}
            {rooms.length} room{rooms.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {isOpen && (
        <div className="travellers-dropdown">
          {rooms.map((room, index) => ( ///re-visit
            <div key={index} className="room-block">
              <h4>Room {index + 1}</h4>

              <div className="row">
                <span>Adults</span>
                <div className="counter">
                  <button
                    onClick={() => updateCount(index, "adults", -1)}
                    disabled={room.adults === 0}
                  >
                    −
                  </button>
                  <span>{room.adults}</span>
                  <button onClick={() => updateCount(index, "adults", 1)}>
                    +
                  </button>
                </div>
              </div>

              <div className="row">
                <span>
                  Children
                  <br />
                  <small>Ages 0 to 17</small>
                </span>
                <div className="counter">
                  <button
                    onClick={() => updateCount(index, "children", -1)}
                    disabled={room.children === 0}
                  >
                    −
                  </button>
                  <span>{room.children}</span>
                  <button onClick={() => updateCount(index, "children", 1)}>
                    +
                  </button>
                </div>
              </div>

              {rooms.length > 1 && (
                <button
                  className="remove-room"
                  onClick={() => removeRoom(index)}
                >
                  Remove room
                </button>
              )}
            </div>
          ))}

          <button className="add-room" onClick={addRoom}>
            Add another room
          </button>

          <div className="done-btn-container">
            <button className="done-btn" onClick={() => setIsOpen(false)}>
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


export default TravellersDiv;
