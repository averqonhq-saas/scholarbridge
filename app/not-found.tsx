import React from "react";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-surface-subtle py-16 px-4">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
        <span className="text-4xl font-extrabold text-teal-700 font-display">404</span>
        <h1 className="text-2xl font-bold text-navy-950 font-display">Page Not Found</h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          The page or institutional resource you are looking for does not exist or has been relocated.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="/" variant="primary" size="md" icon={<Home className="w-4 h-4" />}>
            Back to Home
          </Button>
          <Button href="/contact" variant="outline" size="md">
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
}
