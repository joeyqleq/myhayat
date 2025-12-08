import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
             <Image
              src="/assets/brand/myhayat-logo2.png" // Assuming this works on dark bg or has transparent bg
              alt="My Hayat Logo"
              width={150}
              height={50}
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="text-sm">
              Empathetic AI support for the Lebanese community.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-primary">Home</Link></li>
                <li><Link href="#features" className="hover:text-primary">Features</Link></li>
                <li><Link href="#echoes" className="hover:text-primary">Echoes</Link></li>
                <li><Link href="#" className="hover:text-primary">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-primary">Blog</Link></li>
                <li><Link href="#" className="hover:text-primary">Crisis Support</Link></li>
                <li><Link href="#" className="hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold text-white mb-4">Connect</h4>
              <p className="text-sm mb-4">Beirut, Lebanon</p>
              <div className="flex gap-4">
                  {/* Social Icons placeholders */}
                  <div className="w-8 h-8 bg-slate-800 rounded-full hover:bg-primary transition-colors cursor-pointer" />
                  <div className="w-8 h-8 bg-slate-800 rounded-full hover:bg-primary transition-colors cursor-pointer" />
                  <div className="w-8 h-8 bg-slate-800 rounded-full hover:bg-primary transition-colors cursor-pointer" />
              </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
            © 2025 My Hayat AI. All rights reserved. Not a replacement for professional medical advice.
        </div>
      </div>
    </footer>
  );
}
