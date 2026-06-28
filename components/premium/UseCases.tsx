"use client";

import { motion } from "framer-motion";
import { Utensils, Building, Coffee, PartyPopper, Briefcase, GraduationCap, Lightbulb } from "lucide-react";

export function UseCases() {
  const useCases = [
    {
      title: "Restaurants",
      description: "Elevate dining experiences with custom-branded water on every table.",
      icon: <Utensils size={32} />,
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1200",
      colSpan: "md:col-span-2",
    },
    {
      title: "Hotels",
      description: "Premium room amenities reflecting your luxury brand.",
      icon: <Building size={32} />,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200",
      colSpan: "md:col-span-1",
    },
    {
      title: "Cafés",
      description: "Perfect grab-and-go branding for your patrons.",
      icon: <Coffee size={32} />,
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1200",
      colSpan: "md:col-span-1",
    },
    {
      title: "Weddings",
      description: "Personalized hydration for the perfect celebration.",
      icon: <PartyPopper size={32} />,
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200",
      colSpan: "md:col-span-2",
    },
    {
      title: "Corporate Events",
      description: "Seamless sponsor integration for B2B gatherings.",
      icon: <Briefcase size={32} />,
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1200",
      colSpan: "md:col-span-1",
    },
    {
      title: "College Festivals",
      description: "High-energy engagement for student demographics.",
      icon: <GraduationCap size={32} />,
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1200",
      colSpan: "md:col-span-1",
    },
    {
      title: "Startup Conferences",
      description: "Tech-forward visibility for innovative brands.",
      icon: <Lightbulb size={32} />,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
      colSpan: "md:col-span-1",
    },
  ];

  return (
    <section id="use-cases" className="py-32 bg-zinc-950 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Endless <span className="text-blue-500">Possibilities</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto font-light"
          >
            From high-end hospitality to massive scale ad-tech distribution, we power brands everywhere.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-3xl group cursor-pointer ${useCase.colSpan} h-[250px] border border-white/5`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{ backgroundImage: `url(${useCase.image})` }} 
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                <div className="mb-4 text-white opacity-50 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300">
                  {useCase.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 font-light opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {useCase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
