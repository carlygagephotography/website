"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { X, Mail, Phone, User, MapPin, Camera, Loader2, CheckCircle, Sparkles, Calendar, ChevronLeft } from "lucide-react";
import { sendInquiry } from "@/app/actions/sendInquiry";

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
      {/* Floating CTA - Single Elegant Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed right-0 top-1/2 -translate-y-1/2 z-[9998] bg-moss text-bone px-6 py-8 rounded-l-2xl shadow-2xl hover:bg-moss/90 transition-all flex flex-col items-center gap-3 group relative overflow-hidden"
            style={{ boxShadow: '-4px 0 20px rgba(0,0,0,0.15)' }}
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Limited</span>
              </div>
              <Mail className="w-6 h-6 relative z-10" />
              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-wider">Book Your</p>
                <p className="text-xs font-semibold uppercase tracking-wider">Session</p>
              </div>
              <div className="text-[10px] text-bone/80 font-sans mt-1">2026 Now</div>
            </div>

            {/* Arrow indicator */}
            <ChevronLeft className="w-5 h-5 relative z-10 opacity-70 group-hover:translate-x-[-2px] transition-transform" />
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
              className="fixed inset-0 bg-slate/60 backdrop-blur-md z-[9997]"
            />
            
            {/* Form Panel - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 400 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 400 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-bone shadow-2xl z-[9998] overflow-y-auto"
            >
              <div className="p-8">
                {/* Header with Value Prop */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-4 h-4 text-moss" />
                        <span className="text-xs font-bold uppercase tracking-wider text-moss">2026 Sessions Open</span>
                      </div>
                      <h3 className="text-2xl font-serif text-slate mb-1">Let's Capture Your Story</h3>
                      <p className="text-sm text-slate/60 font-sans">Quick & easy booking</p>
                    </div>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="w-10 h-10 rounded-full bg-slate/10 hover:bg-slate/20 flex items-center justify-center transition-colors"
                    >
                      <X className="w-5 h-5 text-slate" />
                    </button>
                  </div>
                  
                  {/* Trust Indicators */}
                  <div className="flex items-center gap-4 text-xs text-slate/60 font-sans pt-3 border-t border-sand">
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-moss" />
                      <span>24hr Response</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-moss" />
                      <span>No Commitment</span>
                    </div>
                  </div>
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
                    <h4 className="text-2xl font-serif text-slate">You're All Set!</h4>
                    <p className="text-slate/60 font-sans max-w-xs">I'll get back to you within 24 hours to discuss your perfect session.</p>
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
                        className="w-full bg-white border-2 border-sand py-3 px-4 rounded-sm outline-none focus:border-moss transition-all font-serif text-sm" 
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
                        className="w-full bg-white border-2 border-sand py-3 px-4 rounded-sm outline-none focus:border-moss transition-all font-serif text-sm" 
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
                        className="w-full bg-white border-2 border-sand py-3 px-4 rounded-sm outline-none focus:border-moss transition-all font-serif text-sm" 
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
                        className="w-full bg-white border-2 border-sand py-3 px-4 rounded-sm outline-none focus:border-moss transition-all font-serif text-sm appearance-none cursor-pointer"
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
                        className="w-full bg-white border-2 border-sand py-3 px-4 rounded-sm outline-none focus:border-moss transition-all font-serif text-sm" 
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
                        className="w-full bg-white border-2 border-sand py-3 px-4 rounded-sm outline-none focus:border-moss transition-all font-serif text-sm resize-none" 
                        placeholder="Tell me about your family..."
                      />
                      {errors.message && <span className="text-[10px] text-red-400">{errors.message.message as string}</span>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-moss text-bone py-4 rounded-sm text-sm font-semibold uppercase tracking-wider hover:bg-moss/90 transition-all flex items-center justify-center gap-3 disabled:opacity-50 shadow-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Mail className="w-5 h-5" />
                          Send My Inquiry
                        </>
                      )}
                    </button>

                    <p className="text-xs text-slate/50 text-center font-sans">
                      By submitting, you agree to be contacted within 24 hours
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
