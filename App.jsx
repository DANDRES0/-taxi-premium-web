import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Car, Briefcase, Phone, Star, Shield, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TaxiPremiumWebsite() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-yellow-500 mb-6">
            Taxi Premium Elite
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-8">
            Transporte ejecutivo y corporativo para empresas, directivos y clientes VIP.
          </p>
          <Button className="bg-yellow-500 text-black hover:bg-yellow-400 text-lg px-8 py-6 rounded-2xl">
            Reservar Servicio
          </Button>
        </motion.div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-yellow-500 mb-12">Servicios</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Car, title: 'Traslados Premium', text: 'Aeropuerto, hoteles, reuniones y eventos con máxima comodidad.' },
            { icon: Briefcase, title: 'Empresas', text: 'Facturación, servicios concertados y atención prioritaria para negocios.' },
            { icon: Clock, title: 'Disponibilidad', text: 'Reservas anticipadas y puntualidad garantizada 24/7.' },
          ].map((service, index) => (
            <Card key={index} className="bg-zinc-900 border-yellow-500/20 rounded-2xl shadow-xl">
              <CardContent className="p-8">
                <service.icon className="w-10 h-10 text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-zinc-400">{service.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-yellow-500 mb-12">¿Por qué elegirnos?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Star, title: 'Experiencia Premium' },
              { icon: Shield, title: 'Seguridad y confianza' },
              { icon: Phone, title: 'Atención personalizada' },
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <item.icon className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-yellow-500 mb-6">Contacto</h2>
        <p className="text-zinc-300 text-lg mb-4">WhatsApp: +34 600 000 000</p>
        <p className="text-zinc-300 text-lg mb-8">Email: contacto@taxipremiumelite.com</p>
        <Button className="bg-yellow-500 text-black hover:bg-yellow-400 px-8 py-6 rounded-2xl">
          Contactar ahora
        </Button>
      </section>
    </div>
  );
}
