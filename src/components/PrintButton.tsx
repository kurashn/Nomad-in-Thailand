"use client";

import { Printer } from "lucide-react";

export default function PrintButton() {
    return (
        <button
            onClick={() => window.print()}
            className="bg-black text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-slate-800 transition-colors shadow-lg"
        >
            <Printer className="w-4 h-4" />
            Print / Save PDF
        </button>
    );
}
