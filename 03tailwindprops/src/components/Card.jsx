import React from "react";

function Card({channel, myArr, myObj}) {
  return (
    <div>

     
      <div class="max-w-sm rounded-lg shadow-lg overflow-hidden">
        <img
          class="w-full h-48 object-cover"
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="Card image"
        />
        <h1>{channel}</h1>
        <div class="p-4">
          <h3 class="text-xl font-semibold mb-2">Tech Card</h3>
          <p class="text-gray-600 text-sm">
            A sleek card design with Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
