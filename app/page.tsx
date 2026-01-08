export default function VideoGrid() {
  const videos = [
    "/vidio/1.mp4",
    "/vidio/2.mp4",
    "/vidio/3.mp4",
    "/vidio/4.mp4",
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">

      {/* Judul */}
      <div className="text-center mt-17 sm:mt-0 mb-8">
        <h1 className="text-4xl font-extrabold 
          text-red-500 
          drop-shadow-[0_0_10px_rgba(239,68,68,0.9)]
          tracking-wide">
          Naruto Shippuden.
        </h1>
      </div>

      {/* Grid Video */}
      <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-40 sm:h-56 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Footer Text */}
      <div className="text-center mt-8">
        <h1 className="font-mono font-bold 
          text-red-400 
          drop-shadow-[0_0_8px_rgba(248,113,113,0.8)]">
          Eternal Envy
        </h1>
      </div>

    </div>
  );
}
