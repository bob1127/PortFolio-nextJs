import Slider from './index.js';

export default function Home() {
  return (
    <div className='h-[400vh] border border-black'>
      <nav className="fixed top-0 w-full p-8 flex justify-between items-center z-10 mix-blend-difference">
        <a href="#">Codegrid</a>
        <p>Unlock Source Code with PRO</p>
      </nav>

      <footer className="fixed bottom-0 w-full p-8 flex justify-between items-center z-10 mix-blend-difference">
        <div className="flex gap-8">
          <a href="#">Subscribe</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </div>
        <p>Link in description</p>
      </footer>

      <Slider />
    </div>
  );
}
