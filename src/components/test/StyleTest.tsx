'use client';

export default function StyleTest() {
  return (
    <div className="bg-red-500 text-white p-8 m-4 rounded-lg border-4 border-blue-500">
      <h1 className="text-4xl font-bold mb-4">Style Test Component</h1>
      <p className="text-lg">If you can see this with red background, blue border, and white text, Tailwind is working!</p>
      <div className="bg-primary text-black p-4 mt-4 rounded">
        <p>This should have the brand primary color (lime green) background</p>
      </div>
      <div className="bg-brand-background text-brand-text p-4 mt-4 rounded">
        <p>This should have the brand background color</p>
      </div>
    </div>
  );
}