import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Email regex
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      await fetch("http://localhost:8000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      alert("Message sent successfully.");
      setForm({ name: "", email: "", message: "" });
      setErrors({});
    } catch (err) {
      alert("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-20 px-6">
      <div className="max-w-xl mx-auto">

        {/* Title Panel */}
        <div
          className="
            mb-12 text-center
            border-4 border-black dark:border-white
            p-6
            shadow-[6px_6px_0px_#000]
            dark:shadow-[6px_6px_0px_#fff]
          "
        >
          <h2 className="text-3xl font-extrabold mb-2 tracking-wide">
            CONTACT
          </h2>
          <p className="text-sm leading-relaxed">
            Reach out for collaborations, opportunities, or questions.
          </p>
        </div>

        {/* Form Panel */}
        <form
          onSubmit={submit}
          className="
            border-4 border-black dark:border-white
            p-6
            shadow-[6px_6px_0px_#000]
            dark:shadow-[6px_6px_0px_#fff]
            space-y-6
          "
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-bold mb-1">
              NAME
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="w-full bg-transparent border-2 border-black dark:border-white px-3 py-2 focus:outline-none"
            />
            {errors.name && (
              <p className="text-xs mt-1 font-bold">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-bold mb-1">
              EMAIL
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="w-full bg-transparent border-2 border-black dark:border-white px-3 py-2 focus:outline-none"
            />
            {errors.email && (
              <p className="text-xs mt-1 font-bold">
                {errors.email}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-bold mb-1">
              MESSAGE
            </label>
            <textarea
              rows="4"
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className="w-full bg-transparent border-2 border-black dark:border-white px-3 py-2 focus:outline-none"
            />
            {errors.message && (
              <p className="text-xs mt-1 font-bold">
                {errors.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className={`
              w-full border-4 border-black dark:border-white
              py-2 font-bold tracking-wide
              shadow-[4px_4px_0px_#000]
              dark:shadow-[4px_4px_0px_#fff]
              transition
              ${loading ? "opacity-50 cursor-not-allowed" : "hover:translate-x-[1px] hover:translate-y-[1px]"}
            `}
          >
            {loading ? "SENDING..." : "SEND MESSAGE"}
          </button>
        </form>
      </div>
    </section>
  );
}
