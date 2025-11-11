import ClickSpark from './ClickSpark'; // Import the component

export default function ChristmasOffer() {
  return (
    <section className="bg-[#047857] text-white py-8 border-y-4 border-[#DC2626] text-center">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 uppercase">Christmas Pre-Orders Are Open!</h2>
            <p className="text-lg md:text-xl mb-4">
                Book your festive feast before the end of November and get a <strong>20% DISCOUNT!</strong>
            </p>
            <p className="mb-6">Limited delivery slots available for December 23rd, 24th, and 25th.</p>
            
            {/* Wrap the "Book Now" button. Spark color is set to the green background. */}
            <ClickSpark sparkColor="#047857">
              <a href="#enquiries" className="inline-block bg-white text-[#047857] px-8 py-3 font-bold text-lg border-2 border-black neo-shadow transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#000]">
                  Book Now & Save
              </a>
            </ClickSpark>
        </div>
    </section>
  );
}