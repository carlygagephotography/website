"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle, Loader2 } from "lucide-react";

interface EmailSignupProps {
  variant?: "inline" | "card" | "footer";
  title?: string;
  description?: string;
}

export function EmailSignup({ 
  variant = "card",
  title = "Get Mini Session Alerts",
  description = "Be the first to know when I release limited mini session dates. No spam, just exclusive booking opportunities."
}: EmailSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");

    try {
      // For now, we'll just simulate success
      // TODO: Connect to email service (ConvertKit, Mailchimp, etc.)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus("success");
      setMessage("You're on the list! Watch your inbox for exclusive session announcements.");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  if (variant === "inline") {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate/40" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full pl-11 pr-4 py-3 bg-white border border-sand rounded-sm text-slate placeholder:text-slate/40 focus:outline-none focus:border-moss transition-colors"
            disabled={status === "loading" || status === "success"}
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="px-6 py-3 bg-moss text-bone rounded-sm text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-moss/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {status === "loading" ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : status === "success" ? (
            <>
              <CheckCircle className="w-4 h-4" />
              Subscribed
            </>
          ) : (
            "Subscribe"
          )}
        </button>
        {message && (
          <p className={`text-xs mt-2 ${status === "error" ? "text-red-500" : "text-moss"}`}>
            {message}
          </p>
        )}
      </form>
    );
  }

  if (variant === "footer") {
    return (
      <div className="space-y-4">
        <h4 className="text-[10px] uppercase tracking-[0.5em] text-slate/30 font-bold">
          {title}
        </h4>
        <p className="text-sm text-slate/50 font-light">
          {description}
        </p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full px-4 py-3 bg-bone border border-sand rounded-sm text-slate placeholder:text-slate/40 focus:outline-none focus:border-moss transition-colors text-sm"
              disabled={status === "loading" || status === "success"}
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="w-full px-6 py-3 bg-slate text-bone rounded-sm text-[9px] uppercase tracking-[0.3em] font-bold hover:bg-slate/90 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {status === "loading" ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : status === "success" ? (
              <>
                <CheckCircle className="w-4 h-4" />
                You're In!
              </>
            ) : (
              "Get Notified"
            )}
          </button>
        </form>
        {message && (
          <p className={`text-xs ${status === "error" ? "text-red-500" : "text-moss"}`}>
            {message}
          </p>
        )}
      </div>
    );
  }

  // Card variant (default)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-moss/10 to-sand/30 rounded-sm p-8 md:p-12"
    >
      <div className="max-w-xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-moss/20 rounded-full mb-6">
          <Mail className="w-6 h-6 text-moss" />
        </div>
        
        <h3 className="font-display text-2xl md:text-3xl text-slate mb-4">
          {title}
        </h3>
        
        <p className="font-serif text-slate/60 mb-8">
          {description}
        </p>

        {status === "success" ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex items-center justify-center gap-3 text-moss"
          >
            <CheckCircle className="w-6 h-6" />
            <span className="font-serif text-lg">{message}</span>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="relative flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-5 py-4 bg-white border border-sand rounded-sm text-slate placeholder:text-slate/40 focus:outline-none focus:border-moss transition-colors"
                disabled={status === "loading"}
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-8 py-4 bg-moss text-bone rounded-sm text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-moss/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
            >
              {status === "loading" ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                "Notify Me"
              )}
            </button>
          </form>
        )}
        
        {status === "error" && (
          <p className="text-red-500 text-sm mt-4">{message}</p>
        )}
        
        <p className="text-[10px] uppercase tracking-[0.2em] text-slate/30 mt-6">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </motion.div>
  );
}
