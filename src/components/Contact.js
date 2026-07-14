"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        "service_3rfg1mr",
        "template_g6c8676",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "9VlaQ_tF675h9seTf"
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-28 border-t border-gray-200 dark:border-gray-800">
      <div className="flex items-end gap-6 mb-16">
        <motion.span
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-7xl sm:text-8xl font-black text-gray-200 dark:text-white/10 font-[family-name:var(--font-orbitron)] leading-none select-none"
        >
          03
        </motion.span>
        <div className="pb-2">
          <div className="text-xs text-cyan-500 dark:text-cyan-400 tracking-widest uppercase mb-1 font-[family-name:var(--font-orbitron)]">
            // transmit
          </div>
          <h2 className="text-3xl font-bold font-[family-name:var(--font-orbitron)] tracking-wide">
            CONTACT
          </h2>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-gray-300 dark:from-gray-700 to-transparent mb-4 hidden sm:block" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[280px_1fr] gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Have a project in mind, a question, or just want to talk shop?
            Send a message  I read everything myself.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="max-w-xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 mb-8">
            <div className="group">
              <label className="block text-[11px] uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-0 border-b border-gray-300 dark:border-gray-700 px-0 py-1.5 focus:outline-none focus:border-cyan-400 transition-colors group-focus-within:border-cyan-400"
              />
            </div>

            <div className="group">
              <label className="block text-[11px] uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-0 border-b border-gray-300 dark:border-gray-700 px-0 py-1.5 focus:outline-none focus:border-cyan-400 transition-colors group-focus-within:border-cyan-400"
              />
            </div>
          </div>

          <div className="group mb-10">
            <label className="block text-[11px] uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={3}
              className="w-full bg-transparent border-0 border-b border-gray-300 dark:border-gray-700 px-0 py-1.5 focus:outline-none focus:border-cyan-400 transition-colors resize-none group-focus-within:border-cyan-400"
            />
          </div>

          <div className="flex items-center gap-5">
            <button
              type="submit"
              disabled={status === "sending"}
              className="text-sm tracking-wide text-gray-900 dark:text-white border-b border-gray-900 dark:border-white hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-400 transition-colors disabled:opacity-40 pb-0.5"
            >
              {status === "sending" ? "Sending…" : "Send message →"}
            </button>

            {status === "sent" && (
              <span className="text-sm text-cyan-500 dark:text-cyan-400">Sent. Talk soon.</span>
            )}
            {status === "error" && (
              <span className="text-sm text-red-500">Failed — try WhatsApp instead.</span>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;