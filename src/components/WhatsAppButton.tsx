const WHATSAPP_NUMBER = "5543998471000";
const WHATSAPP_MESSAGE = "Olá! Vim pelo site do Monte Alphaville e gostaria de mais informações.";

const WhatsAppButton = () => {
  const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95"
      style={{ backgroundColor: "#25D366" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        className="w-7 h-7"
      >
        <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.83.74 5.49 2.03 7.8L.5 31.5l7.93-2.07A15.45 15.45 0 0016 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm0 28.2a12.64 12.64 0 01-6.44-1.76l-.46-.27-4.71 1.23 1.26-4.6-.3-.48A12.67 12.67 0 1116 28.7zm6.96-9.47c-.38-.19-2.26-1.11-2.61-1.24-.35-.13-.6-.19-.86.19-.25.38-.98 1.24-1.2 1.49-.22.25-.44.28-.82.09-.38-.19-1.6-.59-3.05-1.88-1.13-1-1.89-2.24-2.11-2.62-.22-.38-.02-.59.17-.77.17-.17.38-.44.57-.66.19-.22.25-.38.38-.63.13-.25.06-.47-.03-.66-.09-.19-.86-2.07-1.18-2.84-.31-.74-.63-.64-.86-.65h-.73c-.25 0-.66.09-1.01.47-.35.38-1.33 1.3-1.33 3.17 0 1.87 1.36 3.68 1.55 3.93.19.25 2.67 4.08 6.47 5.72.9.39 1.61.62 2.16.79.91.29 1.73.25 2.38.15.73-.11 2.26-.92 2.58-1.82.32-.9.32-1.67.22-1.82-.09-.16-.35-.25-.73-.44z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
