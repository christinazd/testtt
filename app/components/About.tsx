'use client';

import { motion } from 'framer-motion';
import { Award, Users, Clock, LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function About() {
  const features: Feature[] = [
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for culinary excellence and outstanding service',
    },
    {
      icon: Users,
      title: 'Expert Chefs',
      description: 'Our talented team brings years of experience and passion',
    },
    {
      icon: Clock,
      title: 'Since 2010',
      description: 'Over a decade of serving exceptional dining experiences',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are passionate about creating memorable dining experiences through 
            exceptional food, warm hospitality, and attention to detail.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center p-8 bg-white rounded-xl shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Our Story
            </h3>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Founded in 2010, our restaurant has been a cornerstone of fine dining in the community. 
                We believe that great food brings people together and creates lasting memories.
              </p>
              <p>
                Our chefs combine traditional techniques with modern innovation, sourcing the finest 
                ingredients from local farms and trusted suppliers. Every dish is crafted with care, 
                attention to detail, and a commitment to excellence.
              </p>
              <p>
                We invite you to join us for an unforgettable culinary journey where every meal 
                is a celebration of flavor, quality, and hospitality.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
