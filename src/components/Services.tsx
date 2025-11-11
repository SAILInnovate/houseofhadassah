export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 border-b-2 border-black bg-[#F5F3F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          {/* 
            FIX 1: Made the heading responsive.
            - It starts smaller (text-4xl) on mobile.
            - It scales up to text-5xl and text-6xl on larger screens.
          */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[#562B00] mb-4">OUR SERVICES</h2>
          <div className="w-32 h-1 bg-[var(--color-accent)] mx-auto" />
        </div>

        {/* 
          FIX 2: Made the padding on the content box responsive.
          - It starts with less padding on mobile (p-6).
          - The padding increases on larger screens (sm:p-8, md:p-10) for a better look.
        */}
        <div className="max-w-4xl mx-auto text-center space-y-6 bg-white p-6 sm:p-8 md:p-10 border-2 border-black neo-shadow">
            <h3 className="text-2xl md:text-3xl font-bold text-[#562B00]">Weekly Pre-Orders for the Weekend</h3>
            <p className="text-base md:text-lg text-[#212121]">
              Please note, we are a pre-order catering service, not a walk-in takeaway. All our food is made fresh to order to ensure the highest quality.
            </p>
            <div className="text-base md:text-lg text-[#212121] space-y-3 pt-4 border-t border-gray-200">
                <p>
                  <strong>Pre-Order Window:</strong> Monday to Thursday
                </p>
                <p>
                    <strong>Open for Enquiries:</strong> 9:00 AM - 6:00 PM
                </p>
                <p>
                  <strong>Location:</strong> We are based in Eccles, Salford.
                </p>
                 <p>
                  <strong>Collection & Delivery:</strong> You can arrange for pickup, or we can deliver outside of Salford for an additional fee.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}