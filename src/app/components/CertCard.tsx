import { Award } from 'lucide-react';

interface CertCardProps {
  title: string;
  issuer: string;
  image: string;
  darkMode?: boolean;
}

export function CertCard({ title, issuer, image, darkMode = false }: CertCardProps) {
  return (
    <div className={`rounded-3xl overflow-hidden shadow-lg mx-2 min-w-[280px] ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="relative h-40 overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm">
          <Award className="w-4 h-4 text-blue-600" />
        </div>
      </div>
      
      <div className="p-5">
        <h3 className={`font-bold mb-1 line-clamp-2 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{title}</h3>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{issuer}</p>
      </div>
    </div>
  );
}