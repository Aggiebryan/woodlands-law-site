
const NewsletterSignup = () => {
  return (
    <div className="bg-law-purple p-6 rounded text-white">
      <h3 className="font-serif text-xl font-bold mb-3">Stay Updated</h3>
      <p className="text-white/80 mb-4 text-sm">Subscribe to our newsletter for the latest legal updates and event announcements.</p>
      <form>
        <input 
          type="email" 
          placeholder="Your Email Address" 
          className="w-full p-2 mb-3 rounded text-gray-800 font-serif"
        />
        <button type="submit" className="w-full bg-law-gold text-law-purple font-medium py-2 rounded hover:bg-law-gold-light transition-colors font-serif">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterSignup;
