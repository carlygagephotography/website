"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { X, Mail, Phone, User, MapPin, Camera, Loader2, CheckCircle } from "lucide-react";
import { sendInquiry } from "@/app/actions/sendInquiry";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const schema = z.object({
  name: z.string().min(2, "Please share your name").nonempty("Name is required"),
  email: z.string().email("A valid email is required").nonempty("Email is required"),
  phone: z.string().min(10, "A valid phone is required").nonempty("Phone number is required"),
  sessionType: z.string().min(1, "Please select a session type"),
  location: z.string().min(1, "Please enter your location"),
  message: z.string().min(10, "Please share a bit more").optional(),
});

export function FloatingInquiryForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { scrollToSection } = useSmoothScroll();

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      message: "I'm interested in booking a session after viewing your portfolio."
    }
  });

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      const result = await sendInquiry(data);
      
      if (result.success) {
        setIsSuccess(true);
        reset();
        setTimeout(() => {
          setIsSuccess(false);
          setIsOpen(false);
        }, 3000);
      } else {
        alert(result.error || "Something went wrong. Please try again or email carlygagephotography@gmail.com");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please email carlygagephotography@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 100 }}
            onClick={() => setIsOpen(true)}
            className="fixed right-8 bottom-8 z-[9998] bg-slate text-bone px-6 py-4 rounded-full shadow-2xl hover:bg-slate/90 transition-all flex items-center gap-3 group"
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm font-sans uppercase tracking-wider">Inquire</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Form Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate/50 backdrop-blur-sm z-[9997]"
            />
            
            {/* Form Panel */}
            <motion.div
              initial={{ opacity: 0, x: 400 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 400 }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-bone shadow-2xl z-[9998] overflow-y-auto"
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-serif text-slate">Inquire About Your Session</h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 rounded-full bg-slate/10 hover:bg-slate/20 flex items-center justify-center transition-colors"
                  >
                    <X className="w-5 h-5 text-slate" />
                  </button>
                </div>

                {isSuccess ? (
                  <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-6">
                    <div className="w-16 h-16 bg-moss/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-moss" />
                    </div>
                    <h4 className="text-xl font-serif text-slate">Thank You!</h4>
                    <p className="text-slate/60 font-sans">I'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.3em] text-slate/60 font-bold flex items-center gap-2">
                        <User className="w-3 h-3" />
                        Full Name *
                      </label>
                      <input 
                        {...register("name")} 
                        className="w-full bg-white border border-sand py-3 px-4 rounded-sm outline-none focus:border-slate transition-all font-serif text-sm" 
                        placeholder="Your name"
                        required
                      />
                      {errors.name && <span className="text-[10px] text-red-400">{errors.name.message as string}</span>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.3em] text-slate/60 font-bold flex items-center gap-2">
                        <Mail className="w-3 h-3" />
                        Email *
                      </label>
                      <input 
                        {...register("email")} 
                        type="email"
                        className="w-full bg-white border border-sand py-3 px-4 rounded-sm outline-none focus:border-slate transition-all font-serif text-sm" 
                        placeholder="your@email.com"
                        required
                      />
                      {errors.email && <span className="text-[10px] text-red-400">{errors.email.message as string}</span>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.3em] text-slate/60 font-bold flex items-center gap-2">
                        <Phone className="w-3 h-3" />
                        Phone *
                      </label>
                      <input 
                        {...register("phone")} 
                        type="tel"
                        className="w-full bg-white border border-sand py-3 px-4 rounded-sm outline-none focus:border-slate transition-all font-serif text-sm" 
                        placeholder="555.000.0000"
                        required
                      />
                      {errors.phone && <span className="text-[10px] text-red-400">{errors.phone.message as string}</span>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.3em] text-slate/60 font-bold flex items-center gap-2">
                        <Camera className="w-3 h-3" />
                        Session Type *
                      </label>
                      <select 
                        {...register("sessionType")} 
                        className="w-full bg-white border border-sand py-3 px-4 rounded-sm outline-none focus:border-slate transition-all font-serif text-sm appearance-none cursor-pointer"
                        required
                      >
                        <option value="">Select session type...</option>
                        <option value="family">Family Session</option>
                        <option value="maternity">Maternity</option>
                        <option value="baby-announcement">Baby Announcement</option>
                        <option value="mini">Mini Session</option>
                      </select>
                      {errors.sessionType && <span className="text-[10px] text-red-400">{errors.sessionType.message as string}</span>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.3em] text-slate/60 font-bold flex items-center gap-2">
                        <MapPin className="w-3 h-3" />
                        Location *
                      </label>
                      <input 
                        {...register("location")} 
                        type="text"
                        className="w-full bg-white border border-sand py-3 px-4 rounded-sm outline-none focus:border-slate transition-all font-serif text-sm" 
                        placeholder="e.g. Flower Mound, Frisco..."
                        required
                      />
                      {errors.location && <span className="text-[10px] text-red-400">{errors.location.message as string}</span>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.3em] text-slate/60 font-bold">Message (Optional)</label>
                      <textarea 
                        {...register("message")} 
                        rows={3}
                        className="w-full bg-white border border-sand py-3 px-4 rounded-sm outline-none focus:border-slate transition-all font-serif text-sm resize-none" 
                        placeholder="Tell me about your family..."
                      />
                      {errors.message && <span className="text-[10px] text-red-400">{errors.message.message as string}</span>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-slate text-bone py-4 rounded-sm text-[11px] uppercase tracking-[0.5em] hover:bg-slate/90 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Submit Inquiry"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

