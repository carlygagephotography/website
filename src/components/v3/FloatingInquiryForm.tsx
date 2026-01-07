"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { X, Mail, Phone, User, MapPin, Camera, Loader2, CheckCircle, Sparkles, Clock, Gift } from "lucide-react";
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
  const [showNotification, setShowNotification] = useState(false);

  // Remove notification functionality - keeping for future use if needed
  const { scrollToSection } = useSmoothScroll();

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      message: "I'm interested in booking a session after viewing your portfolio."
    }
  });

  // Notification removed per user request

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      const result = await sendInquiry(data);
      
      if (result.success) {
        setIsSuccess(true);
        reset();
        setShowNotification(false);
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
      {!isOpen && (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[9998]">
          <button
            onClick={() => setIsOpen(true)}
            className="group bg-gradient-to-br from-slate via-slate to-slate/95 text-bone px-5 py-4 rounded-full shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-[1.03] transition-all duration-300 overflow-hidden border border-slate/30 relative"
          >
          {/* Glossy reflective overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-60 rounded-full" />
          
          {/* Shine effect that moves on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
          
          {/* Subtle animated background on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-moss/30 via-moss/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
          
          {/* Content - Clean, modern layout */}
          <div className="relative z-10 flex items-center gap-3">
            {/* Icon container with shine */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-bone/20 to-bone/5 flex items-center justify-center flex-shrink-0 border border-bone/30 group-hover:border-bone/50 group-hover:from-bone/30 group-hover:to-bone/10 transition-all duration-300 shadow-inner">
              <Mail className="w-4.5 h-4.5 text-bone drop-shadow-sm" />
            </div>
            
            {/* Text container - better alignment */}
            <div className="flex flex-col items-start justify-center">
              <span className="text-sm font-serif font-semibold leading-[1.1] tracking-tight text-bone drop-shadow-sm">
                Get Started
              </span>
              <span className="text-[9px] font-sans uppercase tracking-[0.25em] text-bone/80 leading-[1.2] mt-0.5 drop-shadow-sm">
                Let's Chat
              </span>
            </div>
          </div>

          {/* Continuous subtle glow */}
          <motion.div
            animate={{
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 rounded-full bg-gradient-to-br from-bone/20 via-transparent to-transparent pointer-events-none"
          />
          </button>
        </div>
      )}

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
              className="fixed inset-0 bg-slate/60 backdrop-blur-sm z-[9997]"
            />
            
            {/* Form Panel */}
            <motion.div
              initial={{ opacity: 0, x: 400 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 400 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-gradient-to-b from-bone via-bone to-bone/95 shadow-2xl z-[9998] overflow-y-auto"
            >
              <div className="p-8">
                {/* Header with Value Proposition */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-serif text-slate">Let's Create Magic</h3>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="w-10 h-10 rounded-full bg-slate/10 hover:bg-slate/20 flex items-center justify-center transition-colors"
                    >
                      <X className="w-5 h-5 text-slate" />
                    </button>
                  </div>
                  
                  {/* Value Props */}
                  <div className="space-y-3 mb-6 p-4 bg-gradient-to-br from-moss/5 to-slate/5 rounded-sm border border-sand/30">
                    <div className="flex items-center gap-3 text-sm text-slate/70">
                      <Clock className="w-4 h-4 text-moss" />
                      <span>24-hour response time</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate/70">
                      <Gift className="w-4 h-4 text-moss" />
                      <span>Free consultation included</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate/70">
                      <Sparkles className="w-4 h-4 text-moss" />
                      <span>Stress-free, fun experience</span>
                    </div>
                  </div>

                  <p className="text-sm text-slate/60 font-sans leading-relaxed">
                    Fill out the form below and I'll get back to you within 24 hours to discuss your perfect session.
                  </p>
                </div>

                {isSuccess ? (
                  <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-20 h-20 bg-moss/10 rounded-full flex items-center justify-center"
                    >
                      <CheckCircle className="w-10 h-10 text-moss" />
                    </motion.div>
                    <h4 className="text-2xl font-serif text-slate">Thank You!</h4>
                    <p className="text-slate/60 font-sans">I'll get back to you within 24 hours to chat about your session.</p>
                    <p className="text-xs text-slate/40 uppercase tracking-wider">Check your email for confirmation</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.3em] text-slate/60 font-bold flex items-center gap-2">
                        <User className="w-3 h-3" />
                        Full Name *
                      </label>
                      <input 
                        {...register("name")} 
                        className="w-full bg-white border border-sand py-3 px-4 rounded-sm outline-none focus:border-moss transition-all font-serif text-sm shadow-sm" 
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
                        className="w-full bg-white border border-sand py-3 px-4 rounded-sm outline-none focus:border-moss transition-all font-serif text-sm shadow-sm" 
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
                        className="w-full bg-white border border-sand py-3 px-4 rounded-sm outline-none focus:border-moss transition-all font-serif text-sm shadow-sm" 
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
                        className="w-full bg-white border border-sand py-3 px-4 rounded-sm outline-none focus:border-moss transition-all font-serif text-sm appearance-none cursor-pointer shadow-sm"
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
                        className="w-full bg-white border border-sand py-3 px-4 rounded-sm outline-none focus:border-moss transition-all font-serif text-sm shadow-sm" 
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
                        className="w-full bg-white border border-sand py-3 px-4 rounded-sm outline-none focus:border-moss transition-all font-serif text-sm resize-none shadow-sm" 
                        placeholder="Tell me about your family..."
                      />
                      {errors.message && <span className="text-[10px] text-red-400">{errors.message.message as string}</span>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-slate to-slate/90 text-bone py-4 rounded-sm text-[11px] uppercase tracking-[0.5em] hover:from-moss hover:to-moss/90 transition-all flex items-center justify-center gap-3 disabled:opacity-50 shadow-lg hover:shadow-xl font-bold mt-6"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send My Inquiry
                          <Mail className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-[10px] text-slate/40 text-center mt-4">
                      By submitting, you agree to be contacted about your photography session.
                    </p>
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
