"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
interface Car {
  id?: number | null;
  name: string;
  type: string;
  fuel_capacity: string;
  transmission: string;
  seating_capacity: string;
  price_per_day: string;
  image_url: string;
  tags: string[];
}

export default function AdminCarPage() {
  const { userId } = useAuth();
  const router = useRouter();
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
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
  const [editingCarId, setEditingCarId] = useState<number | null>(null);

  useEffect(() => {
    if (!userId) {
      router.push("/sign-in");
    }
  }, [userId, router]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch("https://678cc7fcf067bf9e24e83478.mockapi.io/carrental");
        if (!res.ok) throw new Error("Failed to fetch cars");
        const data = await res.json();
        setCars(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchCars();
    }
  }, [userId]);

  const handleEdit = (car: Car) => {
    if (car.id !== undefined && car.id !== null) {
      setCarData(car);
      setEditingCarId(car.id);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await fetch(`https://678cc7fcf067bf9e24e83478.mockapi.io/carrental?id=${id}`, {
        method: "DELETE",
      });
      setCars(cars.filter((car) => car.id !== id));
    } catch (error) {
      console.error("Failed to delete car:", error);
    }
  };

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
    e.preventDefault(); // Prevent page reload

    try {
      if (editingCarId) {
        // Update existing car
        await fetch(`https://678cc7fcf067bf9e24e83478.mockapi.io/carrental?id=${editingCarId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(carData),
        });
        alert("Car updated!");
      } else {
        // Add new car
        await fetch("https://678cc7fcf067bf9e24e83478.mockapi.io/carrental", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(carData),
        });
        alert("Car added!");
      }

      // Reset form and update car list
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
      setEditingCarId(null);

      // Fetch updated car list without reloading the page
      const res = await fetch("https://678cc7fcf067bf9e24e83478.mockapi.io/carrental");
      const data = await res.json();
      setCars(data);
    } catch (err: unknown) {
      console.error(err);
      alert("Failed to save car.");
    }
  };

  if (!userId) return <div className="text-center text-white p-6">Redirecting...</div>;
  if (loading) return <div className="text-center text-white p-6">Loading...</div>;
  if (error) return <div className="text-center text-red-500 p-6">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Form for Adding/Editing Cars */}
      {editingCarId !== null && (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg space-y-4 mb-8">
          <h1 className="text-3xl font-bold text-center mb-6">
            {editingCarId ? "Edit Car" : "Add Car"}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={carData.name}
                onChange={handleChange}
                className="w-full p-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="type" className="block text-sm font-medium mb-1">Type</label>
              <input
                type="text"
                id="type"
                name="type"
                value={carData.type}
                onChange={handleChange}
                className="w-full p-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="fuel_capacity" className="block text-sm font-medium mb-1">Fuel Capacity</label>
              <input
                type="text"
                id="fuel_capacity"
                name="fuel_capacity"
                value={carData.fuel_capacity}
                onChange={handleChange}
                className="w-full p-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="transmission" className="block text-sm font-medium mb-1">Transmission</label>
              <input
                type="text"
                id="transmission"
                name="transmission"
                value={carData.transmission}
                onChange={handleChange}
                className="w-full p-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="seating_capacity" className="block text-sm font-medium mb-1">Seating Capacity</label>
              <input
                type="text"
                id="seating_capacity"
                name="seating_capacity"
                value={carData.seating_capacity}
                onChange={handleChange}
                className="w-full p-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="price_per_day" className="block text-sm font-medium mb-1">Price Per Day</label>
              <input
                type="text"
                id="price_per_day"
                name="price_per_day"
                value={carData.price_per_day}
                onChange={handleChange}
                className="w-full p-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="image_url" className="block text-sm font-medium mb-1">Image URL</label>
              <input
                type="text"
                id="image_url"
                name="image_url"
                value={carData.image_url}
                onChange={handleChange}
                className="w-full p-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="tags" className="block text-sm font-medium mb-1">Tags</label>
              <input
                type="text"
                placeholder="Add tag"
                onBlur={handleTagChange}
                className="w-full p-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <div className="mt-2 flex flex-wrap gap-2">
                {carData.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-600 px-2 py-1 rounded-md text-sm">{tag}</span>
                ))}
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-300"
          >
            {editingCarId ? "Update Car" : "Add Car"}
          </button>
        </form>
      )}

      {/* Car List */}
      <div className="overflow-x-auto shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold  text-center mb-6">Car Details</h1>

  <table className="min-w-full bg-white text-gray-800 border-collapse rounded-lg overflow-hidden">
    <thead className="bg-gradient-to-r from-gray-100 to-gray-300">
      <tr>
        <th className="py-3 px-6 text-left font-medium">Image</th>
        <th className="py-3 px-6 text-left font-medium">Name</th>
        <th className="py-3 px-6 text-left font-medium">Type</th>
        <th className="py-3 px-6 text-left font-medium">Fuel Capacity</th>
        <th className="py-3 px-6 text-left font-medium">Transmission</th>
        <th className="py-3 px-6 text-left font-medium">Seating Capacity</th>
        <th className="py-3 px-6 text-left font-medium">Price Per Day</th>
        <th className="py-3 px-6 text-left font-medium">Tags</th>
        <th className="py-3 px-6 text-left font-medium">Actions</th>
      </tr>
    </thead>
    <tbody>
      {cars.map((car) => (
        <tr key={car.id} className="border-t border-gray-200 hover:bg-gray-50 transition duration-300">
          <td className="py-4 px-6">
            <img
              src={car.image_url}
              alt={car.name}
              className="w-16  object-cover rounded-lg shadow-sm"
            />
          </td>
          <td className="py-4 px-6">{car.name}</td>
          <td className="py-4 px-6">{car.type}</td>
          <td className="py-4 px-6">{car.fuel_capacity}</td>
          <td className="py-4 px-6">{car.transmission}</td>
          <td className="py-4 px-6">{car.seating_capacity}</td>
          <td className="py-4 px-6 text-green-600 font-semibold">{car.price_per_day}</td>
          <td className="py-4 px-6">
            <div className="flex flex-wrap gap-2">
              {car.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-200 px-3 py-1 rounded-lg text-sm shadow-sm text-blue-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </td>
          <td className="py-4 px-6 flex space-x-3">
            <Link href="#">
              <button
                onClick={() => handleEdit(car)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 transform hover:scale-105"
              >
                Edit
              </button>
            </Link>
            <button
              onClick={() => handleDelete(car.id!)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-300 transform hover:scale-105"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

</div>
    
  
  );
}