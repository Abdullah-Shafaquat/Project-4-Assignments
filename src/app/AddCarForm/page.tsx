"use client";
import { useState } from "react";

interface Car {
  name: string;
  type: string;
  fuel_capacity: string;
  transmission: string;
  seating_capacity: string;
  price_per_day: string;
  image_url: string;
  tags: string[];
}

export default function AddCarForm() {
  const [carData, setCarData] = useState<Car>({
    name: "",
    type: "",
    fuel_capacity: "",
    transmission: "",
    seating_capacity: "",
    price_per_day: "",
    image_url: "",
    tags: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCarData({ ...carData, [name]: value });
  };

  const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tag = e.target.value;
    if (carData.tags.includes(tag)) return;
    setCarData({
      ...carData,
      tags: [...carData.tags, tag],
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://678cc7fcf067bf9e24e83478.mockapi.io/carrental", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(carData),
      });

      if (!response.ok) {
        throw new Error("Failed to add car");
      }

      alert("Car added successfully!");
      // Reset form after successful submission
      setCarData({
        name: "",
        type: "",
        fuel_capacity: "",
        transmission: "",
        seating_capacity: "",
        price_per_day: "",
        image_url: "",
        tags: [],
      });
    } catch (err) {
      setError("Failed to add car. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Add Car</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={carData.name}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white rounded-md"
            required
          />
        </div>

        {/* Type */}
        <div>
          <label htmlFor="type" className="block text-sm">Type</label>
          <input
            type="text"
            id="type"
            name="type"
            value={carData.type}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white rounded-md"
            required
          />
        </div>

        {/* Fuel Capacity */}
        <div>
          <label htmlFor="fuel_capacity" className="block text-sm">Fuel Capacity</label>
          <input
            type="text"
            id="fuel_capacity"
            name="fuel_capacity"
            value={carData.fuel_capacity}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white rounded-md"
            required
          />
        </div>

        {/* Transmission */}
        <div>
          <label htmlFor="transmission" className="block text-sm">Transmission</label>
          <input
            type="text"
            id="transmission"
            name="transmission"
            value={carData.transmission}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white rounded-md"
            required
          />
        </div>

        {/* Seating Capacity */}
        <div>
          <label htmlFor="seating_capacity" className="block text-sm">Seating Capacity</label>
          <input
            type="text"
            id="seating_capacity"
            name="seating_capacity"
            value={carData.seating_capacity}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white rounded-md"
            required
          />
        </div>

        {/* Price Per Day */}
        <div>
          <label htmlFor="price_per_day" className="block text-sm">Price Per Day</label>
          <input
            type="text"
            id="price_per_day"
            name="price_per_day"
            value={carData.price_per_day}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white rounded-md"
            required
          />
        </div>

        {/* Image URL */}
        <div>
          <label htmlFor="image_url" className="block text-sm">Image URL</label>
          <input
            type="text"
            id="image_url"
            name="image_url"
            value={carData.image_url}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white rounded-md"
            required
          />
        </div>

        {/* Tags */}
        <div>
          <label htmlFor="tags" className="block text-sm">Tags</label>
          <input
            type="text"
            placeholder="Add tag"
            onBlur={handleTagChange}
            className="w-full p-2 bg-gray-800 text-white rounded-md"
          />
          <div className="mt-2 flex space-x-2">
            {carData.tags.map((tag, index) => (
              <span key={index} className="bg-gray-700 p-1 rounded-md">{tag}</span>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full p-2 bg-green-600 hover:bg-green-700 text-white rounded-md disabled:bg-gray-600"
        >
          {loading ? "Adding..." : "Add Car"}
        </button>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center">{error}</p>}
      </form>
    </div>
  );
}