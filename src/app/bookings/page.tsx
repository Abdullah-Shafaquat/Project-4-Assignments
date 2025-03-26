
"use client"
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Booking {
  carName: string;
  customerName: string;
  bookingDate: string;
  price: string;
  status: string;
  imageUrl: string;
}

const AdminDashboard = () => {
  

  // Your car data
  const booking: Booking[] = [
    {
      carName: "Koenigsegg",
      customerName: "John Doe",
      bookingDate: "2025-03-15",
      price: "$99.00/day",
      status: "Confirmed",
      imageUrl: "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcar.11698147.jpg&w=640&q=75",
    },
    {
      carName: "Nissan GT-R",
      customerName: "Jane Smith",
      bookingDate: "2025-03-20",
      price: "$80.00/day",
      status: "Pending",
      imageUrl: "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcar(1).cab606a9.jpg&w=640&q=75",
    },
    {
      carName: "Rolls-Royce",
      customerName: "Alice Johnson",
      bookingDate: "2025-03-25",
      price: "$96.00",
      status: "Cancelled",
      imageUrl: "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(2).bd07489a.jpg&w=1200&q=75",
    },
    {
      carName: "Nissan GT-R",
      customerName: "Bob Brown",
      bookingDate: "2025-04-01",
      price: "$80.00",
      status: "Confirmed",
      imageUrl: "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcar(1).cab606a9.jpg&w=1200&q=75",
    },
    {
      carName: "Tesla Model 3",
      customerName: "Charlie Lee",
      bookingDate: "2025-04-10",
      price: "$100.00",
      status: "Pending",
      imageUrl: "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(13).37182fc4.jpg&w=1200&q=75",
    },
    {
      carName: "Ford Mustang",
      customerName: "Eva Garcia",
      bookingDate: "2025-04-15",
      price: "$80.00",
      status: "Confirmed",
      imageUrl: "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(14).5f4e5799.jpg&w=1200&q=75",
    },
    {
      carName: "BMW X5",
      customerName: "David Martinez",
      bookingDate: "2025-04-20",
      price: "$150.00",
      status: "Cancelled",
      imageUrl: "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(15).5f4e5799.jpg&w=1200&q=75",
    },
    {
      carName: "Audi A6",
      customerName: "Grace Davis",
      bookingDate: "2025-04-25",
      price: "$120.00",
      status: "Confirmed",
      imageUrl: "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(16).fc285c8d.jpg&w=1200&q=75",
    },
    {
      carName: "Mercedes-Benz C-Class",
      customerName: "Henry Wilson",
      bookingDate: "2025-05-01",
      price: "$140.00",
      status: "Pending",
      imageUrl: "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(17).574834dc.jpg&w=1200&q=75",
    },
    {
      carName: "Porsche 911",
      customerName: "Ivy Taylor",
      bookingDate: "2025-05-10",
      price: "$200.00",
      status: "Confirmed",
      imageUrl: "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(18).1b97b4cf.jpg&w=1200&q=75",
    },
    {
      carName: "Chevrolet Camaro",
      customerName: "Jack White",
      bookingDate: "2025-05-15",
      price: "$110.00",
      status: "Confirmed",
      imageUrl: "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(19).547db9f7.jpg&w=1200&q=75",
    },
    {
      carName: "Nissan Altima",
      customerName: "Lily Evans",
      bookingDate: "2025-05-20",
      price: "$90.00",
      status: "Pending",
      imageUrl: "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(20).1b97b4cf.jpg&w=1200&q=75",
    },
    {
      carName: "Rolls-Royce",
      customerName: "Michael Brown",
      bookingDate: "2025-05-25",
      price: "$72.00",
      status: "Cancelled",
      imageUrl: "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(17).574834dc.jpg&w=1200&q=75",
    },
    {
      carName: "CR-V",
      customerName: "Natalie Green",
      bookingDate: "2025-06-01",
      price: "$80.00",
      status: "Confirmed",
      imageUrl: "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(15).5f4e5799.jpg&w=1200&q=75",
    },
    {
      carName: "All New Terlos",
      customerName: "Oliver Black",
      bookingDate: "2025-06-05",
      price: "$74.00",
      status: "Pending",
      imageUrl: "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(16).fc285c8d.jpg&w=1200&q=75",
    },
    {
      carName: "MG ZX Exclusive",
      customerName: "Paul Walker",
      bookingDate: "2025-06-10",
      price: "$99.00",
      status: "Confirmed",
      imageUrl: "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(15).5f4e5799.jpg&w=1200&q=75",
    },
    {
      carName: "Ferrari Enzo",
      customerName: "Quinn Thomas",
      bookingDate: "2025-06-15",
      price: "$120.00",
      status: "Cancelled",
      imageUrl: "https://i.pinimg.com/736x/38/0b/ee/380bee94123dd0366e12bddfc4dae178.jpg",
    },
    {
      carName: "Lamborghini Huracan",
      customerName: "Robert Harris",
      bookingDate: "2025-06-20",
      price: "$150.00",
      status: "Confirmed",
      imageUrl: "https://i.pinimg.com/originals/be/c3/b6/bec3b61a1563a68b1a53b19f9fc6aa05.png",
    },
    {
      carName: "Bugatti Veyron",
      customerName: "Sarah King",
      bookingDate: "2025-06-25",
      price: "$200.00",
      status: "Pending",
      imageUrl: "https://i.pinimg.com/736x/f7/52/71/f75271e02b5fe1b98a1cf749a4fbe832.jpg",
    },
    {
      carName: "McLaren P1",
      customerName: "Tina Scott",
      bookingDate: "2025-07-01",
      price: "$180.00",
      status: "Confirmed",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRifEqn8_iq--AAUYEJmC9YEUMfdiJyno0qwQ&s",
    },
    {
      carName: "Pagani Zonda",
      customerName: "Ursula Adams",
      bookingDate: "2025-07-05",
      price: "$190.00",
      status: "Cancelled",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDgAVrR4pQlcOhEhwZcNYeMdXSjQjSTIkDZnSABV_hYwrqjWb4SzQLkFj0xlJPQTksen4&usqp=CAU",
    },
    {
      carName: "Aston Martin DB11",
      customerName: "Victor Price",
      bookingDate: "2025-07-10",
      price: "$160.00",
      status: "Confirmed",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJMqqLAR3OcHpVaeKeWCwZ7kBxT1N5PcVcCg&s",
    },
    {
      carName: "Bentley Continental GT",
      customerName: "Wendy Clark",
      bookingDate: "2025-07-15",
      price: "$170.00",
      status: "Pending",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH_MQ5BhF-_EJwNj1vZo7ny7XivFqQye-_Xg&s",
    },
    {
      carName: "Tesla Model S",
      customerName: "Xander Lee",
      bookingDate: "2025-07-20",
      price: "$130.00/day",
      status: "Confirmed",
      imageUrl: "https://www.pngplay.com/wp-content/uploads/13/2018-Tesla-Model-S-PNG-Clipart-Background.png",
    },
    {
      carName: "Jaguar F-Type",
      customerName: "Yasmin Hill",
      bookingDate: "2025-07-25",
      price: "$140.00",
      status: "Cancelled",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOda4wW6KBrhu7q77UaTBMsgNfxIBYuNrzoQ&s",
    },
    {
      carName: "Audi R8",
      customerName: "Zara Green",
      bookingDate: "2025-08-01",
      price: "$145.00",
      status: "Confirmed",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXlb-unhenzzO8aTDnwDfMMvGMPYzqUGJlMw&s",
    },
    {
      carName: "Mercedes AMG GT",
      customerName: "Aaron Black",
      bookingDate: "2025-08-05",
      price: "$160.00",
      status: "Pending",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTud_YuDz6qBOnHWP8RalAYTXSOvnYgiBieBw&s",
    },
    {
      carName: "BMW M4",
      customerName: "Bianca White",
      bookingDate: "2025-08-10",
      price: "$130.00",
      status: "Confirmed",
      imageUrl: "https://i.pinimg.com/736x/d0/f6/bb/d0f6bb346416273c821a3e0067245e78.jpg",
    },
    {
      carName: "Chevrolet Corvette",
      customerName: "Chris Brown",
      bookingDate: "2025-08-15",
      price: "$110.00",
      status: "Cancelled",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTCrI5-wjZD4YDiVRpw-y85YLrP09XlNf6Yw&s",
    },
    {
      carName: "Ford GT",
      customerName: "Diana Parker",
      bookingDate: "2025-08-20",
      price: "$150.00",
      status: "Confirmed",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoqGoK1lkSYaZYWbdMxBEw8m1LHkMhdFDKKg&s",
    },
    {
      carName: "Porsche Cayman",
      customerName: "Edward King",
      bookingDate: "2025-08-25",
      price: "$140.00",
      status: "Pending",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaoLlYMTPRFICm9nR3qlzSd0WEUX_UNQiwTA&s",
    },
  ];

  const statusCounts = booking.reduce((acc, { status }) => {
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const graphData = {
    labels: Object.keys(statusCounts), // Statuses (Confirmed, Pending, Cancelled)
    datasets: [
      {
        label: 'Number of Bookings',
        data: Object.values(statusCounts), // Count of each status
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)', // Confirmed
          'rgba(255, 206, 86, 0.6)', // Pending
          'rgba(255, 99, 132, 0.6)', // Cancelled
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Booking Status Distribution',
      },
    },
  };

  // Function to determine status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-green-100 text-green-800'; // Green for Confirmed
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800'; // Yellow for Pending
      case 'Cancelled':
        return 'bg-red-100 text-red-800'; // Red for Cancelled
      default:
        return 'bg-gray-100 text-gray-800'; // Default color
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
  <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Bookings Details</h1>

  {/* Bookings Table */}
  <div className="bg-white rounded-lg shadow-md overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Car Image</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Car Name</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer Name</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booking Date</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {booking.map((booking, index) => (
          <tr key={index} className="hover:bg-gray-50 transition duration-200">
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <img
              src={booking.imageUrl}
              alt={booking.carName}
              className="w-16  object-cover rounded-lg shadow-sm"
            /></td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.carName}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.customerName}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.bookingDate}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.price}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(booking.status)}`}>
                {booking.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Booking Status Graph */}
  
  <div className="mt-8 bg-white rounded-lg shadow-md p-6 sm:p-8 md:p-10  justify-center items-center">
  <h2 className="text-xl font-bold text-gray-900 mb-4 sm:text-2xl">Booking Status Distribution</h2>
  <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] flex justify-center items-center">
    <Bar data={graphData} options={options} />
  </div>
</div>


</div>

  );
};

export default AdminDashboard;