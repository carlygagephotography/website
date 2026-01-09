"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, ArrowRight, CheckCircle } from "lucide-react";
import { sendInquiry } from "@/app/actions/sendInquiry";
import { trackLead } from "@/lib/facebook-pixel";

const schema = z.object({
  name: z.string().min(2, "Please share your name").nonempty("Name is required"),
  email: z.string().email("A valid email is required").nonempty("Email is required"),
  phone: z.string().min(10, "A valid phone is required").nonempty("Phone number is required"),
  sessionType: z.string().min(1, "Please select a session type"),
  location: z.string().min(1, "Please enter your location"),
  message: z.string().min(10, "Please share a bit more about your vision"),
});

export function Inquiry() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      const result = await sendInquiry(data);
      
      if (result.success) {
        // Track Facebook Pixel Lead event
        trackLead(data.sessionType, data.location);
        setIsSuccess(true);
      } else {
        alert(result.error || "Something went wrong. Please try again or email me directly at carlygagephotography@gmail.com");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please email me directly at carlygagephotography@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section className="min-h-[70vh] md:min-h-[80vh] flex flex-col items-center justify-center bg-bone px-4 md:px-6 py-12 md:py-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-6 md:space-y-8 max-w-xl"
        >
          <div className="w-16 h-16 md:w-20 md:h-20 bg-moss/10 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-moss" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-serif text-slate leading-tight px-4">
            Can't Wait to <br /> <span className="italic opacity-50">Meet You!</span>
          </h2>
          <p className="text-slate/60 font-sans font-light text-base md:text-lg px-4">
            Thank you for reaching out! I personally review every inquiry and will be in touch within 24 hours to chat about your session.
          </p>
          <div className="pt-6 md:pt-8">
             <button onClick={() => setIsSuccess(false)} className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-slate/40 border-b border-sand pb-1 hover:text-slate transition-colors">Return to Portfolio</button>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-8 md:py-20 lg:py-40 px-4 md:px-16 bg-bone overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-24 items-start">
          
          {/* Form Header - Hidden on mobile, shown on desktop */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8 lg:space-y-12 hidden lg:block">
            <div className="space-y-4 md:space-y-6">
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] md:tracking-[0.6em] text-slate/40">Get In Touch</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[6vw] font-serif leading-[0.9] md:leading-[0.85] text-slate tracking-tighter">
                Let's Tell <br />
                <span className="italic font-light opacity-50 text-clay">Your Story.</span>
              </h2>
            </div>
            
            <p className="text-base md:text-lg lg:text-xl text-slate/60 font-sans font-light max-w-md leading-relaxed text-left">
              Ready to book or have a few questions? Fill out the form below and I'll get back to you within 24 hours.
            </p>

            <div className="space-y-4 md:space-y-6 pt-8 md:pt-12 border-t border-sand">
               <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-8 md:w-12 h-[1px] bg-sand" />
                  <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-slate/40 font-bold">What to Expect</span>
               </div>
               <ul className="space-y-3 md:space-y-4">
                  {["Quick Response", "Helpful Styling Tips", "Fun, Stress-Free Session", "Beautiful Images Delivered"].map(item => (
                    <li key={item} className="text-[10px] md:text-xs uppercase tracking-[0.1em] text-slate/80 flex items-center gap-2 md:gap-3">
                       <div className="w-1 h-1 bg-moss rounded-full flex-shrink-0" />
                       {item}
                    </li>
                  ))}
               </ul>
            </div>
          </div>

          {/* Mobile Header - Only shown on mobile */}
          <div className="lg:hidden space-y-3 mb-4">
            <span className="text-[9px] uppercase tracking-[0.5em] text-slate/40">Get In Touch</span>
            <h2 className="text-2xl font-serif leading-[0.9] text-slate tracking-tighter">
              Let's Tell <br />
              <span className="italic font-light opacity-50 text-clay">Your Story.</span>
            </h2>
            <p className="text-xs text-slate/60 font-sans font-light leading-relaxed text-left">
              Ready to book or have questions? Fill out the form below and I'll get back to you within 24 hours.
            </p>
          </div>

          {/* Actual Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-4 md:p-8 lg:p-20 rounded-sm shadow-2xl border border-sand">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-8 lg:space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12">
                  <div className="space-y-1 md:space-y-2 group">
                    <label className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-slate/40 group-focus-within:text-slate transition-colors font-bold block">Full Name *</label>
                    <input {...register("name")} className="w-full bg-transparent border-b border-sand py-2 md:py-4 outline-none focus:border-slate transition-all font-serif text-sm md:text-lg lg:text-xl placeholder:text-slate/30" placeholder="Alexandra Smith" required />
                    {errors.name && <span className="text-[8px] md:text-[10px] text-red-400 uppercase tracking-widest block mt-1">{errors.name.message as string}</span>}
                  </div>
                  <div className="space-y-1 md:space-y-2 group">
                    <label className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-slate/40 group-focus-within:text-slate transition-colors font-bold block">Email Address *</label>
                    <input {...register("email")} type="email" className="w-full bg-transparent border-b border-sand py-2 md:py-4 outline-none focus:border-slate transition-all font-serif text-sm md:text-lg lg:text-xl placeholder:text-slate/30" placeholder="hello@email.com" required />
                    {errors.email && <span className="text-[8px] md:text-[10px] text-red-400 uppercase tracking-widest block mt-1">{errors.email.message as string}</span>}
                  </div>
                </div>

                <div className="space-y-1 md:space-y-2 group">
                  <label className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-slate/40 group-focus-within:text-slate transition-colors font-bold block">Session Type *</label>
                  <select {...register("sessionType")} className="w-full bg-transparent border-b border-sand py-2 md:py-4 outline-none focus:border-slate transition-all font-serif text-sm md:text-lg lg:text-xl appearance-none cursor-pointer" required>
                    <option value="">Select a session type...</option>
                    <option value="family">Family Session</option>
                    <option value="maternity">Maternity</option>
                    <option value="baby-announcement">Baby Announcement</option>
                    <option value="mini">Mini Session</option>
                  </select>
                  {errors.sessionType && <span className="text-[8px] md:text-[10px] text-red-400 uppercase tracking-widest block mt-1">{errors.sessionType.message as string}</span>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12">
                  <div className="space-y-1 md:space-y-2 group">
                    <label className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-slate/40 group-focus-within:text-slate transition-colors font-bold block">Phone Number *</label>
                    <input {...register("phone")} type="tel" className="w-full bg-transparent border-b border-sand py-2 md:py-4 outline-none focus:border-slate transition-all font-serif text-sm md:text-lg lg:text-xl placeholder:text-slate/30" placeholder="555.000.0000" required />
                    {errors.phone && <span className="text-[8px] md:text-[10px] text-red-400 uppercase tracking-widest block mt-1">{errors.phone.message as string}</span>}
                  </div>
                  <div className="space-y-1 md:space-y-2 group">
                    <label className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-slate/40 group-focus-within:text-slate transition-colors font-bold block">Location *</label>
                    <input {...register("location")} type="text" className="w-full bg-transparent border-b border-sand py-2 md:py-4 outline-none focus:border-slate transition-all font-serif text-sm md:text-lg lg:text-xl placeholder:text-slate/30" placeholder="e.g. Flower Mound..." required />
                    {errors.location && <span className="text-[8px] md:text-[10px] text-red-400 uppercase tracking-widest block mt-1">{errors.location.message as string}</span>}
                  </div>
                </div>

                <div className="space-y-1 md:space-y-2 group">
                  <label className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-slate/40 group-focus-within:text-slate transition-colors font-bold block">Tell me about your family!</label>
                  <textarea {...register("message")} rows={3} className="w-full bg-transparent border-b border-sand py-2 md:py-4 outline-none focus:border-slate transition-all font-serif text-sm md:text-lg lg:text-xl resize-none placeholder:text-slate/30" placeholder="Share a few details..." />
                  {errors.message && <span className="text-[8px] md:text-[10px] text-red-400 uppercase tracking-widest block mt-1">{errors.message.message as string}</span>}
                </div>

                <div className="pt-3 md:pt-6 lg:pt-8">
                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-slate text-bone py-4 md:py-6 lg:py-8 rounded-sm text-[9px] md:text-[11px] uppercase tracking-[0.35em] md:tracking-[0.5em] hover:bg-slate/90 transition-all flex items-center justify-center gap-3 md:gap-4 group active:scale-[0.98]"
                  >
                    {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : (
                      <>
                        Let's Chat
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

