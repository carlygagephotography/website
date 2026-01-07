"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { X, Mail, Phone, User, MapPin, Camera, Loader2, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { sendInquiry } from "@/app/actions/sendInquiry";

const schema = z.object({
  name: z.string().min(2, "Name required").nonempty("Name is required"),
  email: z.string().email("Valid email required").nonempty("Email is required"),
  phone: z.string().min(10, "Phone required").nonempty("Phone number is required"),
  sessionType: z.string().min(1, "Session type required"),
  location: z.string().min(1, "Location required"),
  message: z.string().optional(),
});

export function FloatingInquiryForm() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      message: ""
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
          setIsExpanded(false);
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

  if (!isMounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed right-8 top-1/2 -translate-y-1/2 z-[9999]"
      style={{ transform: 'translateY(-50%)' }}
    >
      <div className="bg-bone border-2 border-slate shadow-2xl rounded-lg overflow-hidden w-80 max-h-[85vh] flex flex-col">
        {/* Header - Always Visible */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full bg-moss text-bone px-6 py-4 flex items-center justify-between hover:bg-moss/90 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5" />
            <div className="text-left">
              <p className="text-sm font-semibold uppercase tracking-wider">Book Your Session</p>
              <p className="text-xs opacity-90">2026 Sessions Open</p>
            </div>
          </div>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </button>

        {/* Expandable Form */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-6 space-y-4 overflow-y-auto max-h-[calc(85vh-80px)]">
                {isSuccess ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
                    <div className="w-16 h-16 bg-moss/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-moss" />
                    </div>
                    <h4 className="text-xl font-serif text-slate">Thank You!</h4>
                    <p className="text-sm text-slate/60 font-sans">I'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-[0.3em] text-slate/60 font-bold flex items-center gap-1">
                        <User className="w-3 h-3" />
                        Name *
                      </label>
                      <input 
                        {...register("name")} 
                        className="w-full bg-white border border-sand py-2 px-3 rounded-sm outline-none focus:border-moss transition-all font-serif text-sm" 
                        placeholder="Your name"
                        required
                      />
                      {errors.name && <span className="text-[10px] text-red-400">{errors.name.message as string}</span>}
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-[0.3em] text-slate/60 font-bold flex items-center gap-1">
                        <Mail className="w-3 h-3" />
                        Email *
                      </label>
                      <input 
                        {...register("email")} 
                        type="email"
                        className="w-full bg-white border border-sand py-2 px-3 rounded-sm outline-none focus:border-moss transition-all font-serif text-sm" 
                        placeholder="your@email.com"
                        required
                      />
                      {errors.email && <span className="text-[10px] text-red-400">{errors.email.message as string}</span>}
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-[0.3em] text-slate/60 font-bold flex items-center gap-1">
                        <Phone className="w-3 h-3" />
                        Phone *
                      </label>
                      <input 
                        {...register("phone")} 
                        type="tel"
                        className="w-full bg-white border border-sand py-2 px-3 rounded-sm outline-none focus:border-moss transition-all font-serif text-sm" 
                        placeholder="555.000.0000"
                        required
                      />
                      {errors.phone && <span className="text-[10px] text-red-400">{errors.phone.message as string}</span>}
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-[0.3em] text-slate/60 font-bold flex items-center gap-1">
                        <Camera className="w-3 h-3" />
                        Session Type *
                      </label>
                      <select 
                        {...register("sessionType")} 
                        className="w-full bg-white border border-sand py-2 px-3 rounded-sm outline-none focus:border-moss transition-all font-serif text-sm appearance-none cursor-pointer"
                        required
                      >
                        <option value="">Select...</option>
                        <option value="family">Family Session</option>
                        <option value="maternity">Maternity</option>
                        <option value="baby-announcement">Baby Announcement</option>
                        <option value="mini">Mini Session</option>
                      </select>
                      {errors.sessionType && <span className="text-[10px] text-red-400">{errors.sessionType.message as string}</span>}
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-[0.3em] text-slate/60 font-bold flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        Location *
                      </label>
                      <input 
                        {...register("location")} 
                        type="text"
                        className="w-full bg-white border border-sand py-2 px-3 rounded-sm outline-none focus:border-moss transition-all font-serif text-sm" 
                        placeholder="e.g. Flower Mound..."
                        required
                      />
                      {errors.location && <span className="text-[10px] text-red-400">{errors.location.message as string}</span>}
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-[0.3em] text-slate/60 font-bold">Message</label>
                      <textarea 
                        {...register("message")} 
                        rows={2}
                        className="w-full bg-white border border-sand py-2 px-3 rounded-sm outline-none focus:border-moss transition-all font-serif text-sm resize-none" 
                        placeholder="Tell me about your family..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-moss text-bone py-3 rounded-sm text-sm font-semibold uppercase tracking-wider hover:bg-moss/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Mail className="w-4 h-4" />
                          Send Inquiry
                        </>
                      )}
                    </button>

                    <p className="text-[10px] text-slate/50 text-center font-sans">
                      24hr response guaranteed
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
