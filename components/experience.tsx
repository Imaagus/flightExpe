"use client"

import Image from "next/image"

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Plane } from 'lucide-react';

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 bg-gray-50 dark:bg-gray-900"
      id="experience"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          ¿Qué incluye el vuelo bautismo?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Image 
              height={1000} width={1000}
              src="/media/Avioneta.jpg"
              alt="Vuelo Bautismo"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg"
            >
              <Plane className="w-8 h-8" />
            </motion.div>
          </motion.div>
          <div className="space-y-6">
            {[
              {
                title: "Recepción y Bienvenida",
                description: "Charla introductoria y explicación básica sobre el vuelo",
              },
              {
                title: "Briefing Pre Vuelo",
                description: "Información detallada del recorrido y normas de seguridad",
              },
              {
                title: "Equipo y Preparativos",
                description: "Entrega de auriculares y explicación de procedimientos",
              },
              {
                title: "Inspección de la Aeronave",
                description: "Revisión completa del avión junto al piloto",
              },
              {
                title: "Recuerdo Especial",
                description: "Fotos y videos en calidad 4K + certificado de vuelo",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: 100, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
              >
                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                  <Plane className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}