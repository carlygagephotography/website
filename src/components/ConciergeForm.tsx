"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  sessionType: z.enum(["Newborn", "Family", "Maternity", "Senior", "Branding"]),
  location: z.enum(["Southlake", "Frisco", "Flower Mound", "Highland Park", "Plano", "Other"]),
  datePreference: z.string().min(2, "Date preference is required"),
});

type FormData = z.infer<typeof formSchema>;

export function ConciergeForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sessionType: "Newborn",
      location: "Southlake",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate server action
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form Data:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const sessionType = watch("sessionType");
  const location = watch("location");

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-3xl mx-auto p-12 bg-cream/50 backdrop-blur-sm border border-stone-200 rounded-2xl text-center shadow-sm"
      >
        <div className="flex justify-center mb-6">
          <div className="h-16 w-16 bg-moss/10 rounded-full flex items-center justify-center">
            <Check className="w-8 h-8 text-moss" />
          </div>
        </div>
        <h3 className="text-3xl font-serif text-charcoal mb-4">Inquiry Received</h3>
        <p className="text-lg text-stone-600 font-sans">
          Thank you for reaching out. I will be in touch shortly to discuss your {sessionType} session in {location}.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
        <div className="text-2xl md:text-4xl/relaxed font-serif text-charcoal leading-relaxed">
          <span className="text-stone-400">Hello, my name is </span>
          <div className="inline-block relative min-w-[200px] mx-2">
            <input
              {...register("name")}
              type="text"
              placeholder="Your Name"
              className={cn(
                "w-full bg-transparent border-b-2 border-stone-300 focus:border-moss outline-none px-0 py-1 text-center placeholder:text-stone-300 transition-colors",
                errors.name && "border-red-400 focus:border-red-400"
              )}
            />
          </div>
          <span className="text-stone-400"> and I am interested in booking a </span>
          
          <div className="inline-block relative mx-2">
            <select
              {...register("sessionType")}
              className="appearance-none bg-transparent border-b-2 border-moss text-moss font-medium outline-none px-0 py-1 pr-8 cursor-pointer hover:text-moss/80 transition-colors"
            >
              <option value="Newborn">Newborn</option>
              <option value="Family">Family</option>
              <option value="Maternity">Maternity</option>
              <option value="Senior">Senior</option>
              <option value="Branding">Branding</option>
            </select>
          </div>

          <span className="text-stone-400"> session in </span>

          <div className="inline-block relative mx-2">
            <select
              {...register("location")}
              className="appearance-none bg-transparent border-b-2 border-moss text-moss font-medium outline-none px-0 py-1 pr-8 cursor-pointer hover:text-moss/80 transition-colors"
            >
              <option value="Southlake">Southlake</option>
              <option value="Frisco">Frisco</option>
              <option value="Flower Mound">Flower Mound</option>
              <option value="Highland Park">Highland Park</option>
              <option value="Plano">Plano</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <span className="text-stone-400"> around </span>

          <div className="inline-block relative min-w-[240px] mx-2">
             <input
              {...register("datePreference")}
              type="text"
              placeholder="Late October / Nov 15th"
              className={cn(
                "w-full bg-transparent border-b-2 border-stone-300 focus:border-moss outline-none px-0 py-1 text-center placeholder:text-stone-300 transition-colors",
                errors.datePreference && "border-red-400 focus:border-red-400"
              )}
            />
          </div>
          
          <span className="text-stone-400">. You can reach me at </span>

          <div className="inline-block relative min-w-[300px] mx-2">
            <input
              {...register("email")}
              type="email"
              placeholder="email@address.com"
              className={cn(
                "w-full bg-transparent border-b-2 border-stone-300 focus:border-moss outline-none px-0 py-1 text-center placeholder:text-stone-300 transition-colors",
                errors.email && "border-red-400 focus:border-red-400"
              )}
            />
          </div>
          <span className="text-stone-400">.</span>
        </div>

        <div className="flex justify-center pt-8">
          <button
            type="submit"
            disabled={isSubmitting}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-charcoal text-cream font-sans text-sm uppercase tracking-widest hover:bg-moss transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-full overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Inquire Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </span>
          </button>
        </div>
        
        {/* Error Messages Summary (optional, for better UX) */}
        {Object.keys(errors).length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-red-500 text-sm font-sans"
          >
            Please fill in all the blanks above.
          </motion.div>
        )}
      </form>
    </div>
  );
}

