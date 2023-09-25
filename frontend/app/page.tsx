"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

type User = {
  id: number;
  name: string;
};

// Client component
const Home = () => {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("http://localhost:5001/api/v1/users");
        const resData = await res.json();
        setData(resData.users);
        return resData;
      } catch (error) {
        throw error;
      }
    };
    fetchUsers();
  }, []);

  return (
    <section className="p-4 bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-5xl mb-5 text-center">Gestores!</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((user) => (
            <div
              key={user.id}
              className="bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <h2 className="text-xl font-semibold hover:text-yellow-400 transition duration-300">
                {user.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
