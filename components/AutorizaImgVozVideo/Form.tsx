'use client';

import { useRef, useState } from 'react';
import { Documents } from './Document';
import SignaturePad from './SignaturePad';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

interface SignatureData {
    full: string;
    preview: string;
}

interface FormData {
    name: string;
    cpf: string;
    date: string;
    signature: SignatureData | null;
}

export function Forms() {
    const documentRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        cpf: '',
        date: new Date().toISOString().split('T')[0],
        signature: null 
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSignatureSave = (signatureData: SignatureData) => {
        setFormData(prev => ({
            ...prev,
            signature: signatureData
        }));
    };

    async function generatePDF() {
        if (!formData.signature) {
            alert("Adicione a assinatura antes de gerar o PDF");
            return;
        }

        if (!documentRef.current) {
            console.error('Elemento não encontrado');
            return;
        }

        const doc = new jsPDF("p", "mm", "a4");
        const element = documentRef.current;
        await doc.html(element, {
            margin: [15, 15, 15, 15],
            html2canvas: {
                scale: 0.2,
                useCORS: true,
                backgroundColor: "#ffffff"
            },

            callback: function (doc) {
                let y = 210;
                doc.setFont("helvetica", "normal");
                doc.setFontSize(12);
                doc.text(`Nome: ${formData.name}`, 20, y);
                y += 8;
                doc.text(`CPF: ${formData.cpf}`, 20, y);
                y += 8;
                doc.text(`Data: ${formData.date}`, 20, y);
                y += 8;
                doc.text("Assinatura:", 20, y);
                if (formData.signature) {
                    doc.addImage(
                        formData.signature.full,
                        "PNG",
                        20,
                        y + 2,
                        120,
                        50
                    );
                }
                doc.save(`autorizacao-tia-josi-${Date.now()}.pdf`);
            }
        });
    }

    return (
        <>  
            <div ref={documentRef} className="w-4xl mx-auto space-y-4 p-4 m-2 bg-white text-black">
                <Documents />
            </div>
            
            <form className="w-4xl mx-auto space-y-4 p-4 m-2 text-black font-sans bg-white">
                <h1 className="text-base mb-1 font-semibold">Name</h1>
                <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Nome Completo"
                    className="w-full p-2.5 mb-5 border border-black rounded-md box-border"
                />
                
                <div className="flex space-x-4">
                    <div className="flex-1">
                        <h1 className="text-base mb-1 font-semibold">CPF</h1>
                        <input 
                            type="text" 
                            name="cpf"
                            value={formData.cpf}
                            onChange={handleInputChange}
                            placeholder="000.000.000-00"
                            className="w-full p-2.5 mb-5 border border-black rounded-md box-border"
                        />
                    </div>

                    <div className="flex-1">                
                        <h1 className="text-base mb-1 font-semibold">Data</h1>
                        <input 
                            type="date" 
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            className="w-full p-2.5 mb-5 border border-black rounded-md box-border"
                        />
                    </div>
                </div>
                
                <h1 className="text-base mb-1 font-semibold">Assinatura</h1>
                <SignaturePad onSave={handleSignatureSave} />
                
                <div className="flex justify-center mt-8">
                    <button
                        type="button"
                        onClick={generatePDF}
                        className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center gap-2 text-lg font-semibold"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                        </svg>
                        GERAR PDF
                    </button>
                </div>
            </form>
        </>
    );
}