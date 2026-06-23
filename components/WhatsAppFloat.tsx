"use client";

import { whatsappLink } from "@/content/site";
import { trackEvent } from "@/components/Analytics";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(
        "Hi, I'm interested in setting up MDP Coffee services for our office."
      )}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click", { location: "floating_button" })}
      className="fixed bottom-7 right-7 z-50 flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] p-3.5 shadow-lg transition-transform hover:scale-110"
      aria-label="Chat with MDP Coffee House on WhatsApp"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 fill-white"
        aria-hidden="true"
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.74.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm0 1.67c2.21 0 4.29.86 5.85 2.42a8.23 8.23 0 012.42 5.85c0 4.56-3.71 8.27-8.27 8.27a8.27 8.27 0 01-4.21-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.24 8.24 0 01-1.27-4.41c0-4.56 3.71-8.27 8.27-8.27zm-4.55 4.7c-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.04 0 1.2.88 2.36 1 2.52.12.16 1.72 2.63 4.18 3.68 2.07.88 2.49.71 2.94.66.45-.04 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.45-.27-.23-.12-1.45-.71-1.67-.79-.22-.08-.39-.12-.55.13-.16.25-.63.79-.78.95-.14.16-.29.18-.53.06-.25-.12-1.04-.38-1.99-1.22-.74-.65-1.23-1.46-1.38-1.71-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.24-.41.08-.16.04-.31-.02-.43-.06-.13-.55-1.36-.77-1.86-.2-.49-.41-.42-.55-.43z" />
      </svg>
    </a>
  );
}
