import { useState } from "react";
import EventCard from "./EventCard";

const AllEvents = () => {

    const allEvents = [
        {
          title: "Standup Night | Feelz Comedy",
          date: "April 12",
          time: "10PM",
          venue: "Revive Social Rooftop Cafe & Lounge, Pune",
          price: "₹199 ONWARDS",
          image: "https://i.imgur.com/tXNSwzQ.png",
          category: "COMEDY",
          categoryColor: "bg-blue-500",
          buttonLink: "#",
        },
        {
          title: "Coding Hackathon",
          date: "April 15",
          time: "9AM",
          venue: "COEP Technological University",
          price: "Free",
          image: "https://i.imgur.com/1bX5QH6.png",
          category: "TECH",
          categoryColor: "bg-green-500",
          buttonLink: "#",
        },
      ];
      
      const campusEvents = [
        {
          title: "DJ Night - Annual Fest",
          date: "April 20",
          time: "7PM",
          venue: "MIT-WPU Grounds, Pune",
          price: "₹100",
          image: "https://i.imgur.com/qXoytQP.png",
          category: "MUSIC",
          categoryColor: "bg-pink-500",
          buttonLink: "#",
        },
      ];
      
  const [activeTab, setActiveTab] = useState("all");



  const eventsToShow = activeTab === "all" ? allEvents : campusEvents;

  return (
    <section className="w-full px-4 py-6 max-w-7xl mx-auto">
      {/* Tabs */}
      <div className="flex justify-center mb-6">
        <div className="w-full max-w-md flex border border-gray-300 rounded-full overflow-hidden bg-white shadow-sm">
          <button
            onClick={() => setActiveTab("all")}
            className={`flex-1 py-2 text-sm font-semibold transition ${
              activeTab === "all"
                ? "bg-indigo-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            All Events
          </button>
          <button
            onClick={() => setActiveTab("campus")}
            className={`flex-1 py-2 text-sm font-semibold transition ${
              activeTab === "campus"
                ? "bg-indigo-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            My Campus
          </button>
        </div>
      </div>

      {/* Event List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {eventsToShow.length > 0 ? (
          eventsToShow.map((event, index) => (
            <EventCard key={index} event={event} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No events available.</p>
        )}
      </div>
    </section>
  );
};

export default AllEvents;
