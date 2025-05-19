import { useMemo } from "react";
import { roomsPic } from "../assets/icons"; // Consider using a smaller version here.

function LogoBigView() {
  const currentTime = useMemo(() => {
    const date = new Date();
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${hours}:${minutes} ${meridiem}`;
  }, []);

  const dummyMessages = [
    {
      text: "Hello students, have you all joined this room?",
      variant: "dummy",
      color: "text-white",
    },
    {
      image: roomsPic,
      variant: "dummy",
      color: "text-white",
    },
    {
      text: "Can anyone please send the code for today's practical?",
      variant: "dummy-v2",
      color: "text-white",
    },
    {
      text: "By the way, what practical is today? 😃",
      variant: "dummy-v2",
      color: "text-white",
    },
    {
      text: "Who is this gossiping?",
      variant: "dummy",
      color: "text-white",
    },
  ];

  return (
    <div className="text-slate-100 p-[7vh] w-full h-full flex bg-transparent">
      {/* Left Section */}
      <div className="flex items-center w-1/2 justify-center">
        <div>
          <h1 className="text-6xl hover:-rotate-6 hover:skew-y-3 transition-all tracking-widest antialiased font-medium">
            Message <br /> Privately
          </h1>
          <br />
          <p className="line-clamp-3 font-normal">
            Simple, reliable, private messaging and <br />
            screen sharing for free*, available all over the world.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 grid gap-4">
        {dummyMessages.map((msg, index) => (
          <div key={index} className={msg.variant}>
            {msg.image ? (
              <img
                src={msg.image}
                alt="Room illustration"
                loading="lazy"
                width={400}
                height={200}
                className="rounded-md object-cover overflow-hidden h-[200px] w-full"
                decoding="async"
              />
            ) : (
              <h1 className="text-white">{msg.text}</h1>
            )}
            <p className={`${msg.color} text-xs`}>{currentTime}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoBigView;
