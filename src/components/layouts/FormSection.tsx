import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactFormSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", form);
  };

  return (
    <div className="">
      <section className=" w-full bg-gray-100 dark:bg-[#0a0a0a] py-16 px-4">
        <div className=" mx-auto max-w-5xl grid md:grid-cols-2 gap-10 items-center">
          {/* Left Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Contact With Us</h2>
            <p className="text-gray-600 text-base md:text-lg">
              Have any questions about our cars, pricing, or need support? Fill
              out the form and our support team will contact you shortly.
            </p>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold">📍 Our Location</h4>
              <p className="text-gray-600">Banani, Dhaka - 1213, Bangladesh</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold">📞 Contact Number</h4>
              <p className="text-gray-600">+880 1780-XXXXXX</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold">✉️ Email</h4>
              <p className="text-gray-600">support@carshop.com</p>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-xl space-y-5"
          >
            <h3 className="text-2xl font-semibold mb-4">Send us a Message</h3>

            <Input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="py-3"
              required
            />

            <Input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="py-3"
              required
            />

            <Input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="py-3"
              required
            />

            <Textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="py-3 min-h-32"
              required
            />

            <Button type="submit" className="w-full py-3 text-lg rounded-xl">
              Submit
            </Button>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
