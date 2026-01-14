"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, ArrowRight, CheckCircle, Gift } from "lucide-react";
import { submitContest } from "@/app/actions/submitContest";

const schema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("A valid email is required"),
  phone: z.string().min(10, "A valid phone is required"),
  location: z.string().min(1, "Please select your location"),
});

export function ContestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    const result = await submitContest(data);
    
    if (result.success) {
      setIsSuccess(true);
    } else {
      alert("Something went wrong. Please try again or email me directly at hello@carlygage.com");
    }
    
    setIsSubmitting(false);
  };

  if (isSuccess) {
    return (
      <section className="min-h-[60vh] flex flex-col items-center justify-center bg-white rounded-sm border border-sand p-10 md:p-20 shadow-2xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-8 max-w-xl"
        >
          <div className="w-20 h-20 bg-moss/10 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-10 h-10 text-moss" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-slate leading-tight">
            You're <span className="italic opacity-50">Entered!</span>
          </h2>
          <p className="text-slate/60 font-sans font-light text-lg">
            Thank you for entering my 2026 Spring Calendar giveaway! I'll be announcing the winner soon via email and social media. Keep an eye out!
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <div className="bg-white p-10 md:p-20 rounded-sm shadow-2xl border border-sand">
      <div className="mb-12 flex items-center gap-4 text-moss">
        <Gift className="w-6 h-6" />
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Entry Form</span>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-2 group">
            <label className="text-[10px] uppercase tracking-[0.3em] text-slate/40 group-focus-within:text-slate transition-colors font-bold">First Name</label>
            <input {...register("firstName")} className="w-full bg-transparent border-b border-sand py-4 outline-none focus:border-slate transition-all font-serif text-xl" placeholder="Alexandra" />
            {errors.firstName && <span className="text-[10px] text-red-400 uppercase tracking-widest">{errors.firstName.message as string}</span>}
          </div>
          <div className="space-y-2 group">
            <label className="text-[10px] uppercase tracking-[0.3em] text-slate/40 group-focus-within:text-slate transition-colors font-bold">Last Name</label>
            <input {...register("lastName")} className="w-full bg-transparent border-b border-sand py-4 outline-none focus:border-slate transition-all font-serif text-xl" placeholder="Smith" />
            {errors.lastName && <span className="text-[10px] text-red-400 uppercase tracking-widest">{errors.lastName.message as string}</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-2 group">
            <label className="text-[10px] uppercase tracking-[0.3em] text-slate/40 group-focus-within:text-slate transition-colors font-bold">Email Address</label>
            <input {...register("email")} className="w-full bg-transparent border-b border-sand py-4 outline-none focus:border-slate transition-all font-serif text-xl" placeholder="hello@email.com" />
            {errors.email && <span className="text-[10px] text-red-400 uppercase tracking-widest">{errors.email.message as string}</span>}
          </div>
          <div className="space-y-2 group">
            <label className="text-[10px] uppercase tracking-[0.3em] text-slate/40 group-focus-within:text-slate transition-colors font-bold">Phone Number</label>
            <input {...register("phone")} className="w-full bg-transparent border-b border-sand py-4 outline-none focus:border-slate transition-all font-serif text-xl" placeholder="555.000.0000" />
            {errors.phone && <span className="text-[10px] text-red-400 uppercase tracking-widest">{errors.phone.message as string}</span>}
          </div>
        </div>

        <div className="space-y-2 group">
          <label className="text-[10px] uppercase tracking-[0.3em] text-slate/40 group-focus-within:text-slate transition-colors font-bold">Where are you located?</label>
          <input {...register("location")} className="w-full bg-transparent border-b border-sand py-4 outline-none focus:border-slate transition-all font-serif text-xl" placeholder="e.g. Southlake, Frisco, etc." />
          {errors.location && <span className="text-[10px] text-red-400 uppercase tracking-widest">{errors.location.message as string}</span>}
        </div>

        <div className="pt-8">
          <button 
            disabled={isSubmitting}
            className="w-full bg-slate text-bone py-8 rounded-sm text-[11px] uppercase tracking-[0.5em] hover:bg-moss transition-all flex items-center justify-center gap-4 group"
          >
            {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : (
              <>
                Enter Giveaway
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </div>
        <p className="text-[9px] text-center uppercase tracking-widest text-slate/30">
          By entering, you agree to receive email updates from Carly Gage Photography.
        </p>
      </form>
    </div>
  );
}
