import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construct mailto link
    const subject = `Contact from Portfolio: ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:patnayakpriyanshu@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open email client
    window.location.href = mailtoLink;

    toast.success('Opening your email client...');
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="h-full flex flex-col md:flex-row overflow-hidden">
      {/* Left Panel: Contact Form */}
      <div className="flex-1 p-8 md:p-12 overflow-y-auto border-r border-border flex items-center justify-center">
        <div className="w-full max-w-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-muted-foreground text-sm">_name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-vscode-activitybar border border-border rounded p-3 text-foreground focus:outline-none focus:border-secondary transition-colors"
                placeholder="Jonathan Davis"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-muted-foreground text-sm">_email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-vscode-activitybar border border-border rounded p-3 text-foreground focus:outline-none focus:border-secondary transition-colors"
                placeholder="user@gmail.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-muted-foreground text-sm">_message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full bg-vscode-activitybar border border-border rounded p-3 text-foreground focus:outline-none focus:border-secondary transition-colors resize-none"
                placeholder="Hey! Just checked your website and it looks awesome..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-secondary/10 hover:bg-secondary/20 text-white px-6 py-2 rounded text-sm transition-colors border border-transparent hover:border-secondary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'sending...' : 'submit-message'}
            </button>
          </form>
        </div>
      </div>

      {/* Right Panel: Code Representation */}
      <div className="hidden md:flex flex-1 p-8 md:p-12 items-center justify-center bg-vscode-editor border-l border-border">
        <div className="w-full max-w-lg">
          <div className="font-mono text-sm space-y-1">
            <div className="flex gap-2">
              <span className="text-syntax-keyword">const</span>
              <span className="text-syntax-function">button</span>
              <span className="text-syntax-keyword">=</span>
              <span className="text-syntax-variable">document.querySelector</span>
              <span className="text-syntax-string">('#sendBtn')</span>;
            </div>
            <br />
            <div className="flex gap-2">
              <span className="text-syntax-keyword">const</span>
              <span className="text-syntax-variable">message</span>
              <span className="text-syntax-keyword">=</span>
              <span className="text-white">{`{`}</span>
            </div>
            <div className="pl-4 flex gap-2">
              <span className="text-syntax-variable">name:</span>
              <span className="text-syntax-string">"{formData.name || 'Jonathan Davis'}"</span>,
            </div>
            <div className="pl-4 flex gap-2">
              <span className="text-syntax-variable">email:</span>
              <span className="text-syntax-string">"{formData.email || 'user@gmail.com'}"</span>,
            </div>
            <div className="pl-4 flex gap-2">
              <span className="text-syntax-variable">message:</span>
              <span className="text-syntax-string">"{formData.message ? formData.message.substring(0, 30) + '...' : 'Hey! Just checked...'}"</span>,
            </div>
            <div className="pl-4 flex gap-2">
              <span className="text-syntax-variable">date:</span>
              <span className="text-syntax-string">"{new Date().toDateString()}"</span>
            </div>
            <div className="text-white">{`}`}</div>
            <br />
            <div className="flex gap-2">
              <span className="text-syntax-variable">button.addEventListener</span>
              <span className="text-syntax-string">('click')</span>,
              <span className="text-syntax-keyword">()</span>
              <span className="text-syntax-keyword">{' => '}</span>
              <span className="text-white">{`{`}</span>
            </div>
            <div className="pl-4 flex gap-2">
              <span className="text-syntax-variable">form.send</span>
              <span className="text-syntax-variable">(message)</span>;
            </div>
            <div className="text-white">{`})`}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
