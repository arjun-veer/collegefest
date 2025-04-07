import { CalendarDays, MapPin } from "lucide-react";

const EventCard = ({ event }) => {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden border hover:shadow-lg transition">
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover"
        />
        <div className={`absolute top-2 right-2 px-3 py-1 text-xs text-white rounded-full ${event.categoryColor}`}>
          {event.category}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {event.title}
        </h3>
        <div className="mt-2 flex items-center text-sm text-gray-600">
          <CalendarDays className="h-4 w-4 mr-1" />
          <span>{event.date} | {event.time}</span>
        </div>
        <div className="mt-1 flex items-center text-sm text-gray-600">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="truncate">{event.venue}</span>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-indigo-600 font-semibold text-sm">
            {event.price}
          </span>
          <a
            href={event.buttonLink}
            className="text-sm bg-indigo-600 text-white px-4 py-1 rounded-full hover:bg-indigo-700 transition"
          >
            More
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
