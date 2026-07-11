import { useState } from "react";

function SearchPage() {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-8">
      <h1 className="text-3xl font-bold mb-6">
        Find Your Perfect Stay
      </h1>

      <div className="space-y-5">

        <div>
          <label className="block mb-2 font-medium">
            Destination
          </label>

          <input
            type="text"
            placeholder="Enter city..."
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">

          <div>
            <label className="block mb-2 font-medium">
              Check In
            </label>

            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Check Out
            </label>

            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

        </div>

        <div>
          <label className="block mb-2 font-medium">
            Guests
          </label>

          <input
            type="number"
            min="1"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
          Search Hotels
        </button>

      </div>
    </div>
  );
}

export default SearchPage;