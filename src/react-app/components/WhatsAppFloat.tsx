import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5595984240100"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-green-500/50 animate-bounce-slow"
      aria-label="Fale comigo no WhatsApp"
      title="Fale comigo no WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
}

