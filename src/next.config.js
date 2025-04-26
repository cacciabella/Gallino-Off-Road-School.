/** @type {import('next').NextConfig} */
const nextConfig = {
  // '.next' è già il valore predefinito, quindi questa riga è opzionale
  distDir: '.next',
  
  // Abilita la modalità strict di React per aiutare a identificare problemi
  reactStrictMode: true,
  
  // Ottimizza immagini automaticamente (utile se usi il componente Image di Next.js)
  images: {
    domains: [], // Aggiungi qui i domini delle immagini esterne se necessario
  },
  
  // Migliora la gestione degli errori in produzione
  onDemandEntries: {
    // Periodo di tempo in ms per cui la pagina resterà in memoria
    maxInactiveAge: 25 * 1000,
    // Numero di pagine che verranno mantenute in memoria
    pagesBufferLength: 2,
  },
}

module.exports = nextConfig