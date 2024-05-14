"use client";

export default function Button() {
  function handleClick() {
    console.log("Button clicked");
  }

  return (
    <button
      onClick={handleClick}
      className="bg-zinc-200 px-4 py-2 rounded text-black font-medium"
    >
      Click Here
    </button>
  );
}
