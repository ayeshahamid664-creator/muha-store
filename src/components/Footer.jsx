export default function Footer() {
  const socials = [
    { name: "Instagram", url: "https://instagram.com/themuha.co" },
    { name: "WhatsApp", url: "https://wa.me/923000000000" },
    { name: "TikTok", url: "https://tiktok.com/@themuha.co" },
    { name: "Facebook", url: "https://facebook.com/themuha.co" },
  ];

  return (
    <footer className="bg-maroon-dark text-cream/80 py-8 sm:py-10 border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-6 sm:gap-8">
        <div>
          <h3 className="font-script text-2xl sm:text-3xl text-cream">
            the Muha Co
          </h3>
          <p className="mt-2 text-sm">
            Wear your attitude. Define your story.
          </p>
        </div>
        <div>
          <h4 className="uppercase tracking-widest text-xs mb-3 text-cream">
            Explore
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Bossy Collection</li>
            <li>Casual Collection</li>
            <li>Cool Collection</li>
          </ul>
        </div>
        <div>
          <h4 className="uppercase tracking-widest text-xs mb-3 text-cream">
            Connect
          </h4>
          <div className="flex flex-wrap gap-x-3 gap-y-2 text-sm">
            {socials.map((s, i) => (
              <span key={s.name} className="flex items-center gap-3">
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream transition"
                >
                  {s.name}
                </a>
                {i < socials.length - 1 && (
                  <span className="text-cream/30">·</span>
                )}
              </span>
            ))}
          </div>
          <p className="text-sm mt-3">
            © {new Date().getFullYear()} The Muha Co.
          </p>
        </div>
      </div>
    </footer>
  );
}