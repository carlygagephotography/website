"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  service: z.string().min(1, "Please select a service"),
  location: z.string().min(1, "Please select a city"),
});

export function LeadGenSection() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: any) => {
    // Lead generation trigger
    console.log("Lead Captured:", data);
    setSubmitted(true);
  };

  const nextStep = () => setStep(prev => prev + 1);

  if (submitted) {
    return (
      <section className="py-32 bg-white flex flex-col items-center justify-center text-center px-6">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="space-y-6"
        >
          <div className="w-20 h-20 bg-moss/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10 text-moss" />
          </div>
          <h2 className="text-4xl font-serif text-charcoal">Invitation Sent.</h2>
          <p className="text-stone-400 font-sans max-w-md mx-auto">
            Thank you for considering me to document your family's legacy. I will be in touch within 24 hours to schedule our consultation.
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-stone-50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        
        {/* Left: Contact Info & Trust */}
        <div className="space-y-16">
          <div className="space-y-6">
            <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400">The Final Step</span>
            <h2 className="text-6xl md:text-8xl font-serif leading-[0.85] text-charcoal tracking-tight">
              Begin the <br /><span className="italic text-stone-400">Experience.</span>
            </h2>
            <p className="text-xl text-stone-500 font-sans font-light max-w-md leading-relaxed">
              Limited session dates are available each month to ensure every client receives white-glove attention and artistry.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 border-t border-stone-200 pt-16">
            <div className="space-y-4">
               <div className="flex items-center gap-3 text-charcoal">
                  <Mail className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-[0.1em]">Email</span>
               </div>
               <p className="font-serif text-lg">hello@carlygage.com</p>
            </div>
            <div className="space-y-4">
               <div className="flex items-center gap-3 text-charcoal">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-[0.1em]">Studio</span>
               </div>
               <p className="font-serif text-lg">Southlake, Texas</p>
            </div>
          </div>
        </div>

        {/* Right: Lead Gen Form */}
        <div className="relative">
          <div className="bg-white p-12 md:p-20 rounded-[3rem] shadow-float border border-stone-100">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div 
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-stone-400">Your Full Name</label>
                      <input {...register("name")} className="w-full bg-transparent border-b border-stone-200 py-4 focus:border-charcoal outline-none transition-colors font-serif text-xl" placeholder="E.g. Alexandra Smith" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-stone-400">Desired Service</label>
                      <select {...register("service")} className="w-full bg-transparent border-b border-stone-200 py-4 focus:border-charcoal outline-none transition-colors font-serif text-xl appearance-none">
                        <option value="">Select a service...</option>
                        <option value="milestone">Milestone Session</option>
                        <option value="family">Family Session</option>
                        <option value="maternity">Maternity Story</option>
                      </select>
                    </div>
                    <button type="button" onClick={nextStep} className="w-full bg-charcoal text-cream py-6 rounded-2xl text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-4 group">
                      Next Step
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div 
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-stone-400">Email Address</label>
                      <input {...register("email")} className="w-full bg-transparent border-b border-stone-200 py-4 focus:border-charcoal outline-none transition-colors font-serif text-xl" placeholder="E.g. hello@email.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-stone-400">Location</label>
                      <select {...register("location")} className="w-full bg-transparent border-b border-stone-200 py-4 focus:border-charcoal outline-none transition-colors font-serif text-xl appearance-none">
                        <option value="">Select your city...</option>
                        <option value="southlake">Southlake</option>
                        <option value="frisco">Frisco</option>
                        <option value="flower-mound">Flower Mound</option>
                        <option value="highland-park">Highland Park</option>
                        <option value="other">Other DFW Area</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-stone-400">Phone Number</label>
                      <input {...register("phone")} className="w-full bg-transparent border-b border-stone-200 py-4 focus:border-charcoal outline-none transition-colors font-serif text-xl" placeholder="E.g. 555-0123" />
                    </div>
                    <button type="submit" className="w-full bg-moss text-cream py-6 rounded-2xl text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-4 group">
                      Complete Inquiry
                      <CheckCircle2 className="w-4 h-4" />
                    </button>
                    <button type="button" onClick={() => setStep(1)} className="w-full text-stone-400 text-[10px] uppercase tracking-[0.2em]">Go Back</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}

