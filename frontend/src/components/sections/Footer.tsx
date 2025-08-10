export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-300 font-mono text-xs mt-10 tracking-widest">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Stay Connected */}
        <div className="font-[DrukWide] md:col-span-2">
          <h2 className="text-3xl font-black mb-4">STAY CONNECTED</h2>
          <form className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <input
              type="email"
              placeholder="ENTER YOUR E-MAIL"
              className="border-b border-black outline-none w-full sm:w-2/3 py-1 placeholder-black"
            />
            <button
              type="submit"
              className="bg-black text-white px-5 py-2 uppercase text-xs tracking-widest"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-6">CONTACT US: SUPPORT@KINI.COM</p>
        </div>

        {/* Navigation */}
        <div className="font-[WestGate]">
          <p className="mb-2 font-bold">NAVIGATION:</p>
          <ul className="space-y-1">
            <li>SHOP</li>
            <li>DROP</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Info & Social */}
        <div>
          <p className="mb-2 font-bold">INFO:</p>
          <ul className="space-y-1">
            <li>LEGAL & PRIVACY</li>
            <li>SHIPPING</li>
            <li>RETURNS</li>
          </ul>
          <p className="mt-4 mb-2 font-bold">SOCIAL:</p>
          <ul className="space-y-1">
            <li>INSTAGRAM</li>
            <li>FACEBOOK</li>
            <li>TIKTOK</li>
            <li>DISCORD</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 py-4 px-6 flex flex-col sm:flex-row justify-between items-center text-[10px]">
        <p>COPYRIGHT © 2025 KINI, INC. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-2 mt-3 sm:mt-0">
          {/* Replace with actual payment icons */}
          <span className="bg-gray-200 px-2 py-1">VISA</span>
          <span className="bg-gray-200 px-2 py-1">Apple Pay</span>
          <span className="bg-gray-200 px-2 py-1">PayPal</span>
        </div>
        <p className="mt-3 sm:mt-0">CREATED BY Ripudaman</p>
      </div>
    </footer>
  );
}
