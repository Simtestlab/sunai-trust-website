import React from 'react';
import l1 from '@/assets/logo1.jpg';
import l2 from '@/assets/logo2.png';
import l3 from '@/assets/logo3.png';
import l4 from '@/assets/logo4.jpg';
import l5 from '@/assets/logo5.png';
import l6 from '@/assets/logo6.png';
import l7 from '@/assets/logo7.png';

const logos = [l1, l2, l3, l4, l5, l6, l7];
const labels = ['Partner 1','Partner 2','Partner 3','Partner 4','Partner 5','Partner 6','Partner 7'];

const PartnerLogos: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h3 className="text-base md:text-lg tracking-wider font-semibold text-black uppercase">Brands that trust us</h3>
          <div className="w-12 h-0.5 bg-red-500 mx-auto mt-2"></div>
        </div>

    <div className="w-full mx-auto py-6">
          <div className="overflow-hidden">
            <div className="flex items-center justify-center gap-10 md:gap-20 lg:gap-28 py-6 whitespace-nowrap md:whitespace-normal md:flex-nowrap">
              {logos.map((src, i) => (
                <div key={i} className="inline-flex items-center justify-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-white p-2 md:p-3 flex items-center justify-center overflow-hidden shadow-sm">
                    <img src={src} alt={labels[i] ?? `partner-${i}`} className="max-w-full max-h-full object-contain" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
